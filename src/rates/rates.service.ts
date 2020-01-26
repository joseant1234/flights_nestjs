import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rate } from './rate.entity';
import { CreateRateDto } from './dto/create-rate.dto';

@Injectable()
export class RatesService {

  constructor(
    @InjectRepository(Rate) private readonly rateRepository: Repository<Rate>,
  ) {}

  findAll(): Promise<Rate[]> {
    return this.rateRepository.find();
  }

  create(rateDto: CreateRateDto): Promise<Rate> {
    const rate = this.rateRepository.create(rateDto);
    return this.rateRepository.save(rate)
  }

}
