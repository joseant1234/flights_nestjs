import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { SharedModule } from '../common/shared.module';

@Module({
  imports: [SharedModule],
  providers: [RatesService],
  controllers: [RatesController],
  exports: []
})
export class RatesModule {}
