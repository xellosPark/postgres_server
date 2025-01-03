import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Auth } from './auth.entity';

@Injectable()
export class AuthRepository extends Repository<Auth> {
  constructor(private readonly dataSource: DataSource) {
    super(Auth, dataSource.createEntityManager());
  }

  async findByUsername(username: string): Promise<Auth | undefined> {
    return this.findOne({ where: { username } });
  }
}

// @Injectable()은 NestJS에서 의존성 주입(Dependency Injection, DI)을 위해 사용하는 데코레이터입니다. 이 데코레이터는 클래스가 다른 클래스에서 주입 가능한(Injectable) 서비스임을 표시합니다.
// **Dependency Injection(DI)**를 쉽게 설명하자면, 필요한 것을 직접 만들지 않고 외부에서 주입받는 방식입니다. DI를 사용하면 코드가 더 유연하고 유지보수하기 쉬워집니다.

// 일상 비유로 이해하기
// DI가 없는 경우:
// 내가 커피를 마시기 위해 커피콩을 직접 재배하고, 로스팅하고, 갈고, 물을 끓여야 한다고 상상해보세요.
// 문제: 모든 것을 스스로 해야 하니 시간이 많이 걸리고, 상황에 따라 다른 커피를 마시기도 어렵습니다.

// DI를 사용하는 경우:
// 커피가 필요하면 카페에 가서 이미 만들어진 커피를 주문합니다.
// 장점: 내가 직접 만들 필요가 없고, 원하는 대로 아메리카노, 라떼 등 다양한 커피를 받을 수 있습니다.