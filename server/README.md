npm install -g @nestjs/cli
nest new sever --skip-git
npm install @nestjs/config -> .env 생성

NestJS에서는 TypeOrmModule.forRootAsync를 사용하여 동적으로 TypeORM 설정을 주입할 수 있습니다. 이를 통해:

export const typeORMConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: await configService.get<string>('POSTGRES_HOST'),
  port: await configService.get<number>('POSTGRES_PORT'),
  username: await configService.get<string>('POSTGRES_USER'),
  password: await configService.get<string>('POSTGRES_PASSWORD'),
  database: await configService.get<string>('POSTGRES_DB'),
  synchronize: true,
  autoLoadEntities: true,
});

환경 변수를 코드에 하드코딩하지 않고 .env 파일에서 읽어올 수 있습니다.
환경별 설정(개발, 테스트, 프로덕션) 값의 유연한 관리를 지원합니다.
설정 값을 동적으로 생성하거나 비동기 작업을 통해 값을 결정할 수 있습니다.


npm install @nestjs/typeorm typeorm pg


ConfigService는 IoC 패턴의 일환
ConfigService는 NestJS에서 제공하는 서비스 클래스로, 환경 변수(.env)를 쉽게 관리하고 애플리케이션 전역에서 사용할 수 있도록 설계되었습니다. NestJS의 IoC 컨테이너가 이 서비스를 관리합니다.

주요 특징:
IoC 컨테이너 등록: ConfigModule에서 ConfigService를 제공하며, 이 모듈이 ConfigService를 전역 서비스로 등록합니다.
DI(Dependency Injection): ConfigService는 컨트롤러, 서비스, 모듈 등 필요한 곳에 자동으로 주입됩니다.
Singleton 패턴: ConfigService는 애플리케이션 전역에서 하나의 인스턴스를 공유합니다.
