import * as dotenv from 'dotenv';
import { Flight } from '../flights/flight.entity';

dotenv.config();

export const databaseOptions ={
  type: process.env.DIALECT,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [Flight],
} as any;
