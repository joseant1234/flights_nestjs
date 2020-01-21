import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { Rate } from './rate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesController } from './rates.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rate])],
  providers: [RatesService],
  controllers: [RatesController],
  exports: [TypeOrmModule]
})
export class RatesModule {}
