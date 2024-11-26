import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: './env/local.env' });
}

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: 'hieunguyen',
  password: process.env.DATABASE_PASSWORD,
  database: 'clean_db',
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [
    'database/migrations/**/*{.ts,.js}',
    'dist/database/migrations/**/*{.ts,.js}',
  ],
};
const dataSource = new DataSource(typeOrmConfig);
export default dataSource;
