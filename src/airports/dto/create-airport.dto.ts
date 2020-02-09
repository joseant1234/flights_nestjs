import { IsString, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Unique } from '../../common/validator/unique';
import { Airport } from '../airport.entity';

export class CreateAirportDto {

  @IsString()
  @ApiProperty({
    description: 'Airport name',
    required: true,
    example: 'Airport Madrid - Barajas'
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Code IATA',
    required: true,
    example: 'MAD'
  })
  @Validate(Unique, [Airport])
  iata: string;

  @IsString()
  @ApiProperty({
    description: 'Airport city',
    required: true,
    example: 'Madrid'
  })
  city: string;

  @IsString()
  @ApiProperty({
    description: 'Airport country',
    required: true,
    example: 'Spain'
  })
  country: string;

}
