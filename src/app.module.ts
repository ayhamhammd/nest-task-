import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [CartModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
