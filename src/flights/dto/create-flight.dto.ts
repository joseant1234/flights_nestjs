import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFlightDto {

  @IsString()
  @ApiProperty({
    description: 'Check in',
    required: true,
  })
  departureAt: Date;

  @IsString()
  @ApiProperty({
    description: 'Check out',
    required: true,
  })
  arrivalAt: Date;

  @IsInt()
  @ApiProperty({
    description: 'Rate reference',
    required: true,
    example: 1
  })
  rateId: number;

}
