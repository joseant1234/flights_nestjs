import { Controller, Get } from '@nestjs/common';

@Controller('flights')
export class FlightsController {

  @Get()
  index(): string {
    return 'dsadsada'
  }
}
