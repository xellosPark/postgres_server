import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { Auth } from './auth.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth]), // 엔티티(Auth)를 TypeORM에 등록
    // 이로 인해 기본 리포지토리(Repository<Auth>)를 사용할 수 있음
  ],
  controllers: [
    AuthController, // 클라이언트 요청을 처리하는 컨트롤러를 등록
  ],
  providers: [
    AuthService, // 비즈니스 로직을 처리하는 서비스 등록

    // 커스텀 리포지토리(AuthRepository) 등록
    {
      provide: 'AUTH_REPOSITORY', // NestJS의 DI 시스템에서 사용할 토큰 이름
      useFactory: (dataSource: DataSource) => {
        // DataSource를 이용해 커스텀 리포지토리를 생성
        return new AuthRepository(dataSource);
      },
      inject: [DataSource], // DataSource를 주입하여 리포지토리를 생성
    },
  ],
  exports: [
    AuthService, // AuthService를 외부 모듈에서도 사용할 수 있도록 내보냄
  ],
})
export class AuthModule {}