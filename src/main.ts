import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule, AppConfigService } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get<AppConfigService>(ConfigService);

  //await app.listen(config.get('PORT'));
  await app.listen(3000);

  process.on('SIGTERM', () => app.close());
}
bootstrap();
