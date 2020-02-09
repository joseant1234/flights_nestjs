import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Airport } from './airport.entity';
import { CreateAirportDto } from './dto/create-airport.dto';
import * as airportFile from './data/airports.json';
import { ListAirportDto } from './dto/list-airport.dto';

@Injectable()
export class AirportsService {

  constructor(
    @InjectRepository(Airport) private readonly airportRepository: Repository<Airport>,
  ) {}

  findAll(query: ListAirportDto = null): Promise<Airport[]> {
    const term = query.term
    if (term) {
      const where = term.length > 3 ? { name : Like(`%${term}%`) } : { iata: term };
      return this.airportRepository.find({
        where: where
      });
    }
    return this.airportRepository.find();
  }

  async create(airportDto: CreateAirportDto): Promise<Airport> {
    const airport = this.airportRepository.create(airportDto);
    return this.airportRepository.save(airport);
  }

  async syncronize(): Promise<Airport[]> {
    const airports: CreateAirportDto[] = this.buildAirportList();
    const savedAirports: Airport[] = await this.airportRepository.find();

    const filteredAirports = airports.filter((airport: CreateAirportDto) => {
      return !savedAirports.find((savedAirport: Airport) => savedAirport.iata === airport.iata);
    })

    return this.airportRepository.save(filteredAirports);
  }

  private buildAirportList(): CreateAirportDto[] {
    const airportsFromFile = Object.values(airportFile);
    const airports: CreateAirportDto[] = airportsFromFile.map((airport: any) => {
      if (airport.name && airport.iata && airport.city && airport.country) {
        return {
          name: airport.name,
          iata: airport.iata,
          city: airport.city,
          country: airport.country,
        }
      }
    }).filter(Boolean);
    return airports;
  }


}
