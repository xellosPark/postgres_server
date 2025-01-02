import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typeORMConfig = async (
  configService: ConfigService, // ConfigService를 주입받아 환경 변수 값을 읽음
): Promise<TypeOrmModuleOptions> => ({ // TypeORM 설정을 반환하는 비동기 함수
  type: 'postgres', // 데이터베이스 타입을 PostgreSQL로 지정
  host: configService.get<string>('POSTGRES_HOST'), // 환경 변수 POSTGRES_HOST에서 호스트 주소를 가져옴
  port: configService.get<number>('POSTGRES_PORT'), // 환경 변수 POSTGRES_PORT에서 포트 번호를 가져옴
  username: configService.get<string>('POSTGRES_USER'), // 환경 변수 POSTGRES_USER에서 사용자 이름을 가져옴
  password: configService.get<string>('POSTGRES_PASSWORD'), // 환경 변수 POSTGRES_PASSWORD에서 비밀번호를 가져옴
  database: configService.get<string>('POSTGRES_DB'), // 환경 변수 POSTGRES_DB에서 데이터베이스 이름을 가져옴
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티 파일 경로를 설정하여 테이블 생성에 사용
  synchronize: true, // 엔티티와 데이터베이스 스키마를 자동으로 동기화 (개발 환경에서만 true 권장)
  autoLoadEntities: true, // 엔티티를 모듈별로 자동 로드
  // logging: true, // SQL 쿼리 로그 활성화
});