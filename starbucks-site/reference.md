# 참고 사항

## 유용한 플러그인
- Korean Language Pack for Visual Studio Code : 한국어 지원
- Auto Rename Tag : 여는 태그와 닫는 태그가 동기화되어 있어서, 동시에 수정 가능
- Live Server : 웹에 임시로 로컬 서버를 오픈하여 html 파일을 렌더링하는 기능

## 유용한 단축키
- option + shift + F : 자동 코드 정리
- option + shift + 아래 방향키 : 코드 아랫줄에 복제
- command + S : 파일 저장
- option + command + S : 모든 파일 저장
- command + N : 새로운 파일 생성
- command + P : 파일 열기
- command + F : 찾기(검색)
- command + option + F : 바꾸기, 모두 바꾸기 가능
- option + 위, 아래 방향키 : 해당 줄 위, 아래 이동
- command + Z : 되돌리기
- shift + tab : 내어쓰기
- command + shift + [ : 왼쪽 편집기 열기
- command + B : 탐색기 열기, 닫기

## 유용한 팁
- 브라우저는 index라고 하는 이름의 html 파일을 찾아 렌더링
- html 파일 내에서는 쌍따옴표(double quotation marks)만 사용
- html 파일은 폴더 내에 넣지 않고, 최상위 경로에 위치
- 기본 설정의 tab size에서 모든 파일의 공백 크기를 설정 가능
- 개발자 도구의 elements 탭에서 스타일을 적용해볼 수 있음
- 개발자 도구에서 JS는 보통 비즈니스 로직이 들어가기 때문에 난독화 과정이 있어 분석하기 어려움

---

### DOCTYPE(DTD)
- Document Type Definition의 약자
- 웹 브라우저가 어떤 버전의 html 파일을 해석해야 할 지 지정하는 부분
- `<!DOCTYPE html>`의 경우는 HTML5(표준)
- HTML1~4의 경우 이 부분이 필요없고, XHTML의 경우는 뒤에 다른 코드가 더 붙음

### html, head, body 태그
- 시작 태그와 종료 태그로 이루어져 있음
- html은 HTML 문서의 전체 범위를 나타냄
- html의 lang 속성은 HTML 문서의 언어를 명시 (ko인 경우 한국어)
- head는 문서의 보이지 않는 정보를 나타내는 범위 (제목, 설명, 사용할 파일 위치, 스타일)
- body는 문서의 보이는 구조를 나타내는 범위

### CSS, JS 파일 연결
- link 태그를 head 영역에 추가하고, 파일 위치를 href(hypertext reference)에 명시하면 CSS 파일이 연결
- rel : relationship
- 스크립트 파일을 연결할 때는 link 태그가 아니라, script 태그를 사용하고, src 속성에 파일 위치 지정

### head 영역
- link로 CSS 파일을 연결하지 않더라도, head 영역에 style 태그를 추가해서 스타일을 부여할 수 있음
- link 태그의 rel 속성에 'icon'을 명시하면, favicon(favorite icon)을 적용할 수 있음
- title 태그로 문서의 제목을 정의하고, 웹 브라우저 탭에 표시
- script에 src 속성을 사용하지 않고 바로 자바스크립트 코드를 쓸 수 있음
- meta 태그는 HTML 문서의 제작자, 내용, 키워드 등의 여러 정보를 검색엔진이나 브라우저에 제공
- meta 태그의 name 속성은 메타 데이터(데이터를 표현하거나 데이터를 빨리 찾기 위한 데이터) 종류 content에는 메타 데이터의 값을 명시
- viewport는 모바일 화면에 반응하도록 하기 위해 설정
- charset(Character Set)은 문자 인코딩(문자를 컴퓨터가 이용할 수 있는 신호로 변환) 방식을 지정하는 속성으로, UTF-8 권장

### 상대 경로, 절대 경로
- ./ : 해당 파일의 주변(생락 가능), 상대 경로
- ../ : 해당 파일의 상위, 상대 경로
- / : 루트(최상위 경로), 절대 경로
- http, https 프로토콜로 시작 : 절대 경로

### 브라우저 스타일 초기화
- 우리가 의도하지 않아도, margin과 같은 여백이 자동으로 적용
- 브라우저마다 다른 화면이 표시될 수 있음
- 'reset.css cdn'으로 웹 서핑하고, 되도록이면 'reset.min.css'의 이름으로 된 파일의 tag를 복사하여 index.html에 추가

### emmet 문법
- html, css에서 사용할 수 있음
- background-color의 경우 `bc:orange`를 치고, tab을 누르면 자동으로 변환됨
- $ : 순서대로 숫자 입력