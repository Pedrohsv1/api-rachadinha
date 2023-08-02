import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/database.sqlite',
  synchronize: true,
  dropSchema: true,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
};
