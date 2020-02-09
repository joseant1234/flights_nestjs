import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as databaseOptions  from './typeOrmDatabase';
import { RatesModule } from './rates/rates.module';
import { AirportsModule } from './airports/airports.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseOptions),
    FlightsModule,
    RatesModule,
    AirportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(private readonly connection: Connection) {}
}
