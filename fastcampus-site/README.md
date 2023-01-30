# Fastcampus Site
## Contributor
- @jangsumin (장수민)

## Tech Requirement (Tech Stack)
- Create-next-app
- Next.js
- TypeScript
- ESLint
- Babel 설정 (IE 11 대응)

## Docker
- Dockerfile을 이용해서 Docker Container
- Docker Compose를 사용
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

- 바벨 설정 -> `.babelrc`파일 생성
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
