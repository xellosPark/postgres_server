# postgres_server

**"Entity → DTO → Service → Controller → Pipe 추가 → Repository"**의 흐름을 따르는 예제입니다. 주제는 간단한 사용자(User) 관리 API로, 사용자 정보를 생성, 조회, 업데이트, 삭제하는 API를 작성합니다.

결론
이제 다음과 같은 흐름으로 프로젝트가 구성됩니다:
Entity: 데이터베이스 모델 정의.
DTO: 요청 데이터의 유효성 검증.
Service: 비즈니스 로직 처리.
Controller: API 엔드포인트 제공.
파이프: 유효성 검증과 데이터 변환.
Repository: 복잡한 쿼리를 캡슐화.

전체 흐름
Entity 작성: 데이터베이스 테이블 모델 정의.
DTO 작성: 요청 데이터의 유효성 검증 구현.
Service 작성: 비즈니스 로직 처리.
Controller 작성: API 엔드포인트 제공.
Pipe 추가: DTO와 함께 데이터 유효성 검증 활성화.
Repository 작성: 데이터베이스 쿼리 로직 캡슐화.
Module 작성: 모든 인증 관련 구성 요소를 관리.