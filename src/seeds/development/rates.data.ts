import { Rate } from '../../rates/rate.entity';

export const rates: Partial<Rate>[] = [
  {
    origin: 'MAD',
    destination: 'BCN',
    price: 250,
  },
  {
    origin: 'MAD',
    destination: 'BCN',
    price: 350,
  },
  {
    origin: 'MAD',
    price: 650,
    destination: 'BCN',
  }
]
