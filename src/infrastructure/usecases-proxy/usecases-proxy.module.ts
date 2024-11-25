import { DynamicModule, Module, Provider } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { LoggerModule } from '../logger/logger.module';

const providers: Provider[] = [
  { inject: [LoggerService], provide: '', useFactory: () => {} },
];

@Module({
  imports: [LoggerModule],
})
export class UsecasesProxyModule {
  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [...providers],
    };
  }
}
