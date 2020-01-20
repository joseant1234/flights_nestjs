import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { databaseOptions } from './config/database';

@Module({
  imports: [
    FlightsModule,
    TypeOrmModule.forRoot(databaseOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(private readonly connection: Connection) {}
}
