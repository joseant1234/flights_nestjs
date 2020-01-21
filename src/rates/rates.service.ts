import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rate } from './rate.entity';


@Injectable()
export class RatesService {

  constructor(
    @InjectRepository(Rate) private readonly rateRepository: Repository<Rate>,
  ) {}

  findAll(): Promise<Rate[]> {
    return this.rateRepository.find();
  }

}
