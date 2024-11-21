import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';

@Module({
  imports: [EnvironmentConfigModule],
  controllers: [],
})
export class AppModule {}
