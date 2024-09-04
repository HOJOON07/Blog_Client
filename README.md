# Dev World
> 기술블로그를 작성하고 공유하는 개발자들의 SNS 플랫폼

# 배포 사이트
[DevWorld 사이트 주소](https://blog-client-pink-rho.vercel.app/)

- 현재 백엔드 서버 문제로 오류가 있어 고치는 중입니다. 최대한 빠르게 고치도록 하겠습니다.(2024.09.04)
# 기술 스택

- TypeScript
- NEXT.js
- Tanstack Query
- Zustand
- React Hook Form & Zod
- Tailwind CSS
- Shadcn UI
- Framer Motion
- AWS S3, EC2, ALB, Nginx
- Vercel

# 기술적 의사 결정
- TypeScript는 데이터의 타입을 명시함으로써 개발 단계에서 오류를 사전에 발견하고 수정할 수 있어서 사용했습니다.
- NEXT.js는 웹 페이지의 초기 로딩 속도를 향상시키고 게시글 상세페이지와 같은 부분에서 SEO 최적화에 유리한 장점이 있어서 사용했습니다.
- 서버 상태를 효율적으로 관리하고 데이터를 요청하기 위해 Tanstack Query를 사용했습니다. 또한 클라이언트 상태 관리로는 직관적인 사용법으로 인해 러닝 커브가 낮고 Store 기반으로 상태를 다루면서 컴포넌트 구조를 체계적으로 설계하여 유지 보수에 용이한 Zustand를 선택했습니다.
- 다양한 스타일링 프레임워크를 적용하고 고민하면서 NEXT.js의 SSR 방식에 적합하고 개발자의 생산성을 높일 수 있는 TailwindCSS를 선택했습니다.
- Vercel은 NEXT.js 애플리케이션을 배포하는데 최적화되어 있으며 CDN 지원 및 CI / CD 기능을 제공하여 개발 효율성을 높일 수 있어 선택했습니다.

# 주요 기능
## 1. 로그인 / 로그아웃
- 이메일 / 패스워드 로그인
- OAuth (깃허브)

![로그인 화면](https://velog.velcdn.com/images/ghwns1007/post/3542d843-06ff-4faa-bf79-25e0636af93f/image.png)

## 2. 회원가입
- 이메일 인증 확인
- 폼 양식 유효성 검사
- JWT

- 프로필 페이지

- 프로필 수정 페이지

- 전체 아티클 조회

- 아티클 미리보기 기능

  - intercept routes
  - parallel routes

- 아티클 상세 보기

- 아티클 댓글

- 개인 워크 스페이스
- 개인 워크 스페이스 글 작성, 수정, 무한 스크롤 기능

- 팔로우 기능

## 트러블 슈팅

## 기술적 의사 결정

- 전역 상태 관리 (zustand)
- 테일 윈드 (tailwind)
- 폴더 구조 개선 (FSD)
- 텍스트 에디터 (Plate.JS)

## 성능 최적화
