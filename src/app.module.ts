import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { Environment } from './env.validation';
import { configClassValidator } from './lib/config-class-validator';
import { TodosModule } from './todos/todos.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: configClassValidator(Environment),
    }),
    WinstonModule.forRoot({
      level: 'info',
      transports: [new winston.transports.Console()],
    }),
    TodosModule,
    HealthModule,
  ],
})
export class AppModule {}
export type AppConfigService = ConfigService<Environment, true>;
