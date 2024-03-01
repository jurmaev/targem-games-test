import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Player } from './entity/player';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '89658572002',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [Player],
  migrations: [],
  subscribers: [],
});
