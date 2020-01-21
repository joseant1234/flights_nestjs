import { Controller, Get } from '@nestjs/common';

@Controller('rates')
export class RatesController {

  @Get()
  index(): string {
    return ''
  }
}
