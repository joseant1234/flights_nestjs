import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRateDto {

  @IsString()
  @ApiProperty({
    description: 'Origin in IATA',
    required: true,
    example: 'MAD'
  })
  origin: string;

  @IsString()
  @ApiProperty({
    description: 'Destination in IATA',
    required: true,
    example: 'BCN'
  })
  destination: string;

  @IsInt()
  @ApiProperty({
    description: 'Price of the rate',
    required: true,
    example: 350
  })
  price: number;

}
