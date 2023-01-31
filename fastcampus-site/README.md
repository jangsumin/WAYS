# Fastcampus Site
## Contributor
- @jangsumin (장수민)

## Tech Requirement (Tech Stack)
- Create-next-app
- Next.js
- TypeScript
- ESLint
- Babel 설정 (IE 11 대응)

## ~~Docker~~
- ~~Dockerfile을 이용해서 Docker Container~~
- ~~Docker Compose를 사용~~

## Test
- 유닛 테스트 > 코드 상으로 기능을 점검
- E2E 테스트 > 실제 동작을 바탕으로 기능을 점검
- Jest
- `npm run test`로 테스트 시작
---
### Next 기반 강의 수강 사이트 개발
- 타입스크립트 옵션으로 create-next-app

```bash
npx create-next-app --ts [폴더명]
```
<br/>

- 서버 동작시키는 명령어

```bash
npm run dev
```
<br/>

- ~~바벨 설정 -> `.babelrc`파일 생성~~
- 문제가 생겨서 바벨 빌드 파일 삭제
<br/>

- ESLint -> eslint-config-airbnb-typescript 사용, ESLint confing 파일에 추가

```bash
npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^5.13.0 \
            @typescript-eslint/parser@^5.0.0 \
            --save-dev
```
<br/>

- 최상위 폴더 하단에 .github 폴더를 생성 후 CODEOWNERS 파일 생성

`* @jansumin` -> codeowners에 지정된 사람이 리뷰를 남겼을 때만 merge가 가능하도록 하는 기능

<br/>

- Jest & React Testing 라이브러리 사용(Next.js 12버전부터 구성 방법이 바뀜), `jest.config.js` 파일 생성
- 스타일 시트나 이미지 파일은 테스트에 포함되지 않지만, import 해오는 데 오류가 생길 수 있어서 `__mocks__` 폴더 내에 js 파일로 설정 
- package.json 파일에 scripts에 테스트 항목 추가, `"test": "jest --watch"`
- `__tests__` 폴더 내에 index.test.jsx 파일 추가
<br/>

- Docker로 배포 환경 설정하려 했으나, 공식문서 참고하여 순수하게 Next 기본 배포 방법 사용

```bash
npm run build
npm run start
```
<br/>

- CI/CD를 위한 GitHub Actions 추가는 따로 설정 X
---
### 애플리케이션 개발
- Data Flow 그리기
- 유저 시나리오 작성 (비회원, 회원, 구매 회원, 어드민에 따라 다름)