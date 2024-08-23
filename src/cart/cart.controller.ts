import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';


@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() data :{itemId : number,quantity :number}) {
    return this.cartService.create(data.itemId,data.quantity);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }
}
