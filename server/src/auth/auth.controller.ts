import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 회원가입 엔드포인트
  @Post('signup')
  @UsePipes(new ValidationPipe()) // DTO 유효성 검증
  async signup(@Body() createAuthDto: CreateAuthDto) {
    await this.authService.signup(createAuthDto);
    return { message: 'Signup successful' };
  }

  // 로그인 엔드포인트
  @Post('login')
  @UsePipes(new ValidationPipe()) // DTO 유효성 검증
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}