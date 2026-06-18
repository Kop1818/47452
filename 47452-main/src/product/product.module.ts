import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UtilityModule } from '../shared/utility/utility.module';
import { GlobalHelperModule } from '../shared/global-helper/global-helper.module';

@Module({
  imports: [UtilityModule, GlobalHelperModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
  