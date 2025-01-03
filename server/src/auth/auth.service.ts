import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private readonly authRepository: AuthRepository,
  ) {}

  async signup(createAuthDto: CreateAuthDto): Promise<void> {
    const { email, username, password } = createAuthDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.authRepository.create({
      email,
      username,
      password: hashedPassword,
      role: 'user',
    });

    await this.authRepository.save(user);
  }

  async login(loginAuthDto: LoginAuthDto): Promise<string> {
    const { username, password } = loginAuthDto;
    const user = await this.authRepository.findByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return `Welcome, ${username}!`;
  }
}