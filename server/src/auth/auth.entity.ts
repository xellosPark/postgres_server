import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('auth') // 데이터베이스의 'auth' 테이블과 매핑
export class Auth {
  @PrimaryGeneratedColumn() // 자동 생성되는 기본 키
  id: number;

  @Column({ unique: true }) // 이메일 필드 (중복 허용 안 함)
  email: string;

  @Column({ nullable: true, unique: true }) // 사용자명 필드 (선택적, 중복 허용 안 함)
  username: string;

  @Column() // 비밀번호 필드
  password: string;

  @Column({ default: 'user' }) // 사용자 권한 필드 (기본값: 'user')
  role: string; // 'admin', 'user' 등의 권한 등급

  @Column({ default: 0 }) // 로그인 실패 횟수 (기본값: 0)
  failedLoginAttempts: number;

  @Column({ nullable: true }) // 마지막 로그인 시간 필드 (선택적)
  lastLogin: Date;

  @CreateDateColumn() // 레코드 생성 시간 자동 저장
  createdAt: Date;

  @UpdateDateColumn() // 레코드 마지막 업데이트 시간 자동 저장
  updatedAt: Date;
  
}