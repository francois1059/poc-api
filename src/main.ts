import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule, AppConfigService } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = app.get<AppConfigService>(ConfigService);

  const port = config.get('PORT');

  await app.listen(port);
  console.log(`App listening on port ${port} !`);

  process.on('SIGTERM', () => app.close());
}
bootstrap();
