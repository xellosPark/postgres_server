import { IsString, IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsEmail({}, { message: 'Invalid email format' }) // 이메일 형식 검증
  email: string;

  @IsString()
  @MinLength(2, { message: 'username must be at least 2 characters long' })
  @MaxLength(20, { message: 'username must be at most 20 characters long' })
  username: string;

  @IsString()
  @MinLength(4, { message: 'password must be at least 4 characters long' })
  @MaxLength(20, { message: 'password must be at most 20 characters long' })
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts English letters and numbers',
  })
  password: string;

  @IsString()
  role: string; // 'admin', 'user' 등의 권한
}