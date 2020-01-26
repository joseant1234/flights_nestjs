import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRateDto {

  @IsString()
  @ApiProperty({
    required: true,
    example: 'MAD'
  })
  origin: string;

  @IsString()
  @ApiProperty({
    required: true,
    example: 'BCN'
  })
  destination: string;

  @IsInt()
  @ApiProperty({
    description: 'Price of the rate',
    default: 1,
    type: Number,
    required: true,
    example: 350
  })
  price: number;

}
