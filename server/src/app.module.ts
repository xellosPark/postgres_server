import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    // ConfigModule을 글로벌로 설정하여 환경 변수 사용 가능
    ConfigModule.forRoot({
      isGlobal: true, // 전역에서 환경 변수 사용 가능
    }),
    // TypeORM 모듈 설정
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // ConfigModule에서 환경 변수 가져오기
      inject: [ConfigService], // ConfigService를 DI로 주입
      useFactory: typeORMConfig, // TypeORM 설정 팩토리 함수 사용
    }),
  ],
})
export class AppModule {}