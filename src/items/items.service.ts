import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ItemsService {
  constructor(private readonly databaseService : DatabaseService){}

  async create(createItemDto: Prisma.ItemCreateInput) {
    return this.databaseService.item.create(
      {data : createItemDto}
    )
  }

  async findAll() {
    return this.databaseService.item.findMany();
  }
}
