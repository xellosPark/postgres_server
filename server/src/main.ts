import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 유효성 검증 파이프 추가
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(9002);
}
bootstrap();
