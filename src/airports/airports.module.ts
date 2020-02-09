import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { SharedModule } from '../common/shared.module';

@Module({
  imports: [SharedModule],
  providers: [AirportsService],
  controllers: [AirportsController],
  exports: []
})
export class AirportsModule {}
