import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConfig } from 'src/domain/config/database.interface';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

export const getTypeOrmConfig = (config: DatabaseConfig) =>
  ({
    type: 'postgres',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUsername(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: false,
    ssl: {
      rejectUnauthorized: false,
    },
  }) as TypeOrmModuleOptions;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigService],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmConfig,
    }),
  ],
})
export class TypeormModule {}
