import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions/exceptions.module';
import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';

@Module({
  imports: [
    TypeormModule,
    EnvironmentConfigModule,
    LoggerModule,
    RepositoriesModule,
    UsecasesProxyModule,
    ExceptionsModule,
  ],
  controllers: [],
})
export class AppModule {}
