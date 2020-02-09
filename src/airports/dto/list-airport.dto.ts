import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListAirportDto {

  @IsString()
  @ApiProperty({
    description: 'Airport name, iata',
    required: false,
    example: 'MAD'
  })
  term: string;

}
