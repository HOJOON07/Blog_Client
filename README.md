# Dev World
> 기술블로그를 작성하고 공유하는 개발자들의 SNS 플랫폼
![랜딩 페이지 ](https://velog.velcdn.com/images/ghwns1007/post/78678dde-3dc3-4d48-b35e-8169e15118a9/image.gif)

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

![](https://velog.velcdn.com/images/ghwns1007/post/28f52039-3639-4288-a3ae-8f34a5c3c0b7/image.gif)


## 3. 프로필 페이지
- 사용자의 기본적인 프로필 정보
- 텍스트 에디터와 프로필 소개 작성 및 수정 기능
- 프로필 페이지 유저의 최신 깃허브 잔디 가져오기
- 프로필 페이지 유저의 최신 아티클과 검색 및 정렬 기능

![프로필 페이지 기본](https://velog.velcdn.com/images/ghwns1007/post/b0b1b664-ec0e-46eb-8f0f-2e767579778b/image.png)

![프로필 페이지 아티클](https://velog.velcdn.com/images/ghwns1007/post/2cb597ed-b89b-469e-95ee-c98c9f27bc39/image.png)

## 4. 프로필 수정 페이지
- AWS S3에 프로필 이미지 업로드
- 데브월드 닉네임 중복검사
- 폼 입력 값 유효성 검사
![프로필 수정 페이지 ](https://velog.velcdn.com/images/ghwns1007/post/70940ce7-4059-4fa4-9998-a3484408ca94/image.png)

## 5. 메인 피드
- 무한스크롤 적용
![메인 피드](https://velog.velcdn.com/images/ghwns1007/post/28b27065-320e-4302-b6df-0aa45d76ccea/image.png)

## 6. 검색 기능
- 제목, 한 줄 설명으로 아티클 검색 기능 구현
![검색 다이얼로그](https://velog.velcdn.com/images/ghwns1007/post/c37edbfc-11a1-4acf-8cf8-f24cd3efbb4c/image.png)

## 7. 아티클 미리보기 기능
- 메인 피드에서 아티클을 클릭 시 미리보기 기능을 구현
![미리보기 페이지](https://velog.velcdn.com/images/ghwns1007/post/52b68d13-48b9-42ba-aa4f-06875fad6299/image.png)

## 8. 아티클 상세 페이지
- 아티클 작성한 유저의 정보를 볼 수 있도록 페이지 구성
- 아티클 댓글도 볼 수 있도록 페이지 구성
![상세 페이지](https://velog.velcdn.com/images/ghwns1007/post/be710703-550b-4491-b71a-be6a36932115/image.png)

## 9. 댓글 기능
- 댓글 작성
- 마크다운, 사진, 동영상, 링크, 테이블, Excalidraw 등 다양한 유틸요소를 지원
![댓글](https://velog.velcdn.com/images/ghwns1007/post/9f662fea-26af-47ee-a59d-9c38bd1bc7fc/image.png)

## 10. 워크 스페이스 페이지 
- 유저의 개인 워크스페이스 페이지
> 글을 작성하거나 비공개, 임시 작성 중인 유저의 모든 글을 볼 수 있는 개인화된 공간
![워크스페이스](https://velog.velcdn.com/images/ghwns1007/post/7232f655-64f8-4d38-b2ed-c4d0aa04cea4/image.png)

## 11. 워크스페이스 아티클 작성, 수정 페이지 
- 새 아티클 작성 및 수정
- AWS S3에 아티클 썸네일 사진 업로드
- 아티클 제목과 설명 입력, 임시저장, 공개 여부 설정
![아티클 작성](https://velog.velcdn.com/images/ghwns1007/post/038ab27e-dc73-4138-82be-aa5325731cd8/image.png)

# 개발 환경 개선

## [FSD 폴더 구조 도입](https://velog.io/@ghwns1007/%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0-FSD)

# 최적화 포인트
- 이미지 최적화
- 폰트 최적화
- SEO 최적화
- 초기 로딩 속도 최적화
- 페이지 이동시 전환 속도 최적화
- 효율적인 네트워크 요청 (디바운싱, 쓰로틀링, windowing 기법 적용)


# 추가 기능 구현 목표
> 추가 기능 구현 이전에 프로젝트의 코드를 리팩토링하고 더 좋은 설계를 고민할 것! 
- 웹소켓을 활용하여 커피챗 서비스를 구현할 예정입니다. 백엔드는 구현 완료
- 페어프로그래밍 서비스를 구현할 예정입니다. 디스코드와 같이 채팅 방을 생성하고 화면 공유 기능
- 어드민 페이지 개발 예정
- 일정 관리 페이지 개발 예정

# 프로젝트 후기 
프로젝트를 진행하며 사용자의 입장에서 생각하고 고민하는 것이 얼마나 중요한지 깨달았습니다. 사용자 경험을 향상시키기 위해 지속적으로 피드백을 반영하고, UX / UI와 디자인을 깊이 고민했습니다. 이를 통해 사용자 중심 제품 개발의 중요성을 이해하게 되었습니다.
성능 개선과 최적화를 위해 다양한 기법과 도구들을 학습했습니다.
제품의 개발부터 출시까지 전 과정을 경험할 수 있는 기회였습니다. 기술 선택 단계에서는 프로젝트의 요구 사항과 상황에 맞는 적합한 기술을 신중하게 선택하며 프로젝트 완성도를 높일 수 있었습니다.


