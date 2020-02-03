import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { SharedModule } from '../common/shared.module';

@Module({
  imports: [SharedModule],
  providers: [FlightsService],
  controllers: [FlightsController],
  exports: []
})
export class FlightsModule {}
