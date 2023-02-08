### CSS 기본 문법, 주석
- `선택자 { 속성: 값; }`의 형식으로 작성
- 선택자는 스타일을 적용할 대상
- 속성은 스타일의 종류, 이 때 속성은 Property
- 값은 스타일의 값, Value
- 중괄호는 스타일 범위의 시작과 끝을 나타냄
- `/* */`을 통해 주석 사용

### CSS 선언 방식
- 내장 방식 : `<style></style>`의 내용으로 스타일을 작성하는 방식
- 내장 방식으로 CSS 내용이 많아지면, 유지보수 측면에서 좋지 않음
- 인라인 방식 : 요소의 style 속성에 직접 스타일을 작성하는 방식
- 인라인 방식 또한 유지보수 측면에서 좋지 않음, 의도하지 않은 오버라이딩 발생 가능
- 링크 방식 : `<link />로 외부 CSS 문서를 가져와서 연결하는 방식, 병렬 방식으로 해석이 먼저 끝나는 css 파일이 적용
- @import 방식 : `@import url(외부 CSS 주소);`로 사용하며, 보통 main.css 파일에서 다른 css 파일을 가져와서 연결하는 방법, 직렬 방법이라고 하는데 일부러 연결을 지연시킬 때 쓰기도 하는데 자주 사용하지 않음

### CSS 기본 선택자
- `*` : 전체 선택자 (Universal Selector), 모든 요소를 선택
- `li` 등 요소 이름 : 태그 선택자 (Type Selector), 태그 이름에 해당하는 요소 선택
- 클래스 선택자 (Class Selector), HTML class 속성의 값에 해당하는 요소 선택, .을 붙임
- 아이디 선택자 (ID Selector), id 속성의 값에 해당하는 요소 선택, #을 붙임

### CSS 복합 선택자
- 일치 선택자 (Basic Combinator) : 선택자 사이에 아무런 문자가 없어서 태그, 클래스(아이디) 순으로 쓰는 게 좋음
- ex) span.orange -> span이라는 태그 선택자와 .orange라는 클래스 선택자를 모두 만족하는 요소 선택
- 자식 선택자 (Child Combinator)
- ex) ul > .orange -> ul 태그의 자식이면서 .orange가 적용된 요소 선택
- 하위(후손) 선택자 (Descendant Combinator)
- ex) div .orange -> 사이에 띄어쓰기, div의 하위 요소 중 .orange가 적용된 요소 선택
- 인접 형제 선택자 (Adjacent Sibling Combinator)
- .orange + li -> .orange가 적용된 요소의 다음 형제 li 요소 **하나** 선택
- 일반 형제 선택자 (General Sibling Combinator)
- .orange ~ li -> 인접 형제 선택자는 하나를 선택했다면 일반 형제 선택자는 다음 형제 li 요소 모두 선택