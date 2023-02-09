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

### 가상 클래스 선택자(Pseudo-Classes)
- 사용자가 어떠한 행동을 했을 때 일어나는 효과를 보통 가상 클래스 선택자를 사용해서 볼 수 있음
- 콜론 하나가 앞에 붙음
- ex) .box:hover -> 클래스 선택자 box에 마우스 커서가 올라가 있는 동안 선택
- active -> 마우스를 클릭하고 있는 동안 선택
- focus -> 요소가 포커스 되어 있는 동안 선택
- focus가 될 수 있는 요소는 HTML 대화형 콘텐츠로, input, a, button, label, select 등이 있음
- HTML 대화형 콘텐츠가 아닌 요소에 focus가 작동하게 하려면 tabindex 속성에 -1 값을 주면 됨
- li:first-child -> li 형제 요소 중 첫째라면 선택
- li:last-child -> li 형제 요소 중 막내라면 선택
- li:nth-child(n) -> li 형제 요소 중 n째라면 선택, n은 0부터 시작, nth-child(2n)으로 명시하면 짝수 번째 요소들 선택
- 부정 선택자(Negation), *:not(li) -> 전체 요소 중 li 요소가 아니라면 선택

### 가상 요소 선택자(Pseudo-Elements)
- 콜론 두 개가 앞에 붙음
- div::before -> div 요소 내부의 가장 앞에 내용(content)을 삽입
```css
.box::before {
  content: "앞!";
}
```
- div::after -> div 요소 내부의 가장 뒤에 내용을 삽입
- **가상 요소 선택자 before, after에 content 속성이 없으면 아무것도 작동하지 않음**
- before와 after는 인라인 요소이므로 블록 레벨 요소로 변환하고 싶다면 `display: block;`을 추가하면 됨

### 속성 선택자
- 특정한 속성을 포함한 요소를 선택
- 특정한 속성과 속성의 값을 가진 요소를 선택하는 것도 가능
```css
[disabled] {
  color: red;
}

[type="password"] {
  color: red;
}
```

### 스타일 상속
- 부모 요소 및 조상 요소로부터 스타일이 상속
- 상속되는 CSS 속성들(대체로 글자/문자 관련 속성들)
    - font-style
    - font-weight
    - font-size
    - line-height
    - font-family
    - color
    - text-align
- 강제 상속은 inherit을 사용(부모 요소의 속성값을 그대로 가져옴)

### 우선순위
- 우선순위란, 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 CSS 속성을 우선 적용할지 결정하는 방법
- 점수가 높은 선언이 우선
- 점수가 같으면, 가장 마지막에 해석된 선언이 우선
- 점수
    - 인라인 선언 - 1000점
    - ID 선택자 - 100점
    - Class 선택자 - 10점
    - 태그 선택자 - 1점
    - 전체 선택자 - 0점
    - !important - 무한대(가장 높음)
    - body라는 태그 선택자 - 상속은 별도로 계산 X
    - 부정 선택자 - 점수 X
- 점수가 너무 높은 !important나 인라인 스타일 선언 방식 사용은 지양
```html
<!-- 글자색은 빨간색 -->
<div
  id="color_yellow" 
  class="color_green" 
  style="color: orange;"
>
  Hello world!
</div>
```
```css
div {
  color: red !important;
}

#color_yellow {
  color: yellow;
}

.color_green {
  color: green;
}

div {
  color: blue;
}

* {
  color: darkblue;
}

body {
  color: violet;
}
```
```css
/* 10 + 1 + 10 = 21점 */
.list li.item {
  color: red;
}

/* 10 + 1 + 10 = 21점 */
.list li:hover {
  color: red;
}

/* 10 + 1 = 11점 */
.box::before {
  content: "Good";
  color: red;
}

/* 100 + 1 = 101점 */
#submit span {
  color: red;
}

/* 1 + 10 + 1 + 10 = 22점 */
header .menu li:nth-child(2) {
  color: red;
}

/* 1점 */
h1 {
  color: red;
}

/* 부정 선택자는 점수 없으므로 10점 */
:not(.box) {
  color: red;
}
```