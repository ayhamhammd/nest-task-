import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CartService {
  constructor (private readonly databaseService: DatabaseService){}
  create(itemId: number,quantity:number) {
    return this.databaseService.cartItem.create(
    {data : {itemId,quantity}}
        
    );
  }

  async findAll() {
    return this.databaseService.cartItem.findMany({
      include : {item :true}
    });
  }
}
