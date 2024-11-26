import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConfig } from 'src/domain/config/database.interface';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';

export const getTypeOrmConfig = (config: DatabaseConfig) => {
  return {
    type: 'postgres',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUsername(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    synchronize: false,
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    migrations: [
      'database/migrations/**/*{.ts,.js}',
      'dist/database/migrations/**/*{.ts,.js}',
    ],
  } as TypeOrmModuleOptions;
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmConfig,
    }),
  ],
})
export class TypeormModule {}
