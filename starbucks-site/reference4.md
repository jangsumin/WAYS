## CSS 속성

### 너비(width, height)

-   기본값으로 auto 사용
-   auto는 브라우저가 자동으로 너비를 계산한다는 의미
-   단위는 px, em, vw 등 사용
-   인라인 요소는 가로, 세로 모두 콘텐츠 크기만큼 자동으로 줄어듦
-   인라인 요소에 width, height 속성에 값을 지정해도 반영 X
-   블록 레벨 요소의 가로는 부모 요소의 크기만큼 자동으로 늘어남
-   블록 레벨 요소의 세로는 콘텐츠 크기만큼 자동으로 줄어듦
-   max-width, max-height, min-width, min-height

### CSS 단위

-   px : 픽셀, 디바이스에 따라 해상도가 달라서 픽셀 개수가 다름
-   % : 상대적 백분율
-   em : 요소의 글꼴 크기, 10px이 1em이라면 2em을 20px로 산정
-   rem : 루트 요소(html)의 글꼴 크기, em 단위는 혼선을 발생시킬 수 있어서, 그 대체로 rem을 사용 가능
-   vw : 뷰포트 가로 너비의 백분율(100vw이 최대), 화면을 조정하면 반응함
-   vh : 뷰포트 세로 너비의 백분율(100vh이 최대), 화면을 조정하면 반응함
-   0을 표기할 때는 단위를 붙이지 말자!

### margin

-   요소의 외부 여백을 지정하는 단축 속성(1 ~ 4개까지 값 지정 가능)
-   **값을 auto를 주어서 가운데 정렬에 활용**
-   음수를 사용할 수 있음
-   음수를 사용하면 요소들이 겹쳐지는 현상이 일어남
-   top, bottom, left, right 방향으로 따로 값을 지정할 수 있음
-   개발자 도구의 computed 탭에서 여백의 크기를 확인할 수 있음
-   `margin: 10px 20px;`은 top, bottom에 10px, left, right에 20px의 외부 여백을 주라는 의미
-   `margin: 10px 20px 30px`은 top에 10px, left, right에 20px, bottom에 30px을 주라는 의미
-   값이 4개면 시계 방향으로 돌아가면서 해당 방향에 외부 여백 지정

### padding

-   요소의 내부 여백을 지정하는 단축 속성
-   요소의 크기가 커짐
-   부모 요소의 가로 너비에 대한 비율로 지정하기 위해 % 단위를 자주 사용
-   top, bottom, left, right 방향으로 따로 값 지정 가능

### border

-   요소의 테두리 선을 지정하는 단축 속성
-   `border: 선-두께 선-종류 선-색상`의 순서를 권장
-   border-width, border-style, border-color
-   border를 지정하면 **요소의 크기가 커짐**
-   border-width에는 medium(기본 값), thin, thick, 이외에 px, em, % 단위 사용
-   border-style에는 solid(실선), dashed(파선), dotted(점선), double, groove, ridge, inset, outset 등이 있음
-   border-color의 기본값은 black(검정색)이고, 다른 색상이나 transparent(투명)도 지정할 수 있음
-   색상 표현
    -   색상 이름(red, tomato, royalblue)
    -   Hex 색상코드(16진수 색상, #000, #FFFFFF)
    -   RGB, 빛의 삼원색(rgb(255,255,255))
    -   RGBA, 빛의 삼원색 + 투명도(rgba(0, 0, 0, 0.5))
    -   HSL, HSLA(색상, 채도, 명도 + 투명도)
-   색상 이름은 브라우저마다 다르게 해석될 수 있어서 Hex 색상코드 사용 권장
-   border-top-width, border-top-style, border-top-color 와 같이 방향마다 다르게 설정할 수 있음

### border-radius

-   요소의 모서리를 둥글게 깎음
-   기본 값은 0
-   단위는 px, em, vw 등을 사용
-   모서리의 끝에 border-radius에 지정된 값만큼의 반지름을 갖는 원을 그리고 그 외부를 깎아내는 개념
-   `border-radius: 0 10px 0 0;`처럼 4개의 값을 지정할 수 있는데 왼쪽 상단에서부터 시계방향으로 돌면서 깎으므로 오른쪽 상단이 깎여진 상태

### 크기 계산(box-sizing)

-   요소의 크기 계산 기준을 지정
-   기본 값은 content-box
-   width가 100px인 div 요소에 border 4px, padding 10px이 적용되면 총 가로 길이가 128px이 되는데 그 이유는 border, padding이 요소의 크기가 커지는 특성을 가진 속성이기 때문
-   가로 길이를 100px로 맞추기 위해선 width 값을 감소시켜야 하는데, 그 대신 box-sizing의 값을 `border-box`로 바꾸면 됨
-   margin은 포함하지 않음!

### 넘침 제어(overflow)

-   요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성
-   기본 값은 visible, 다른 값으로는 auto, hidden, scroll이 있음
-   부모 요소의 영역보다 자식 요소의 영역이 더 클 때, 부모 요소에 `overflow: hidden;`을 주면 부모 요소의 영역만큼 잘려서 보임
-   scroll은 스크롤을 만듦(브라우저마다 다르긴 한데, 보통 가로 세로 둘 다 스크롤이 생김)
-   auto는 넘치는 축에 대해서만 스크롤 생성
-   overflow-x, overflow-y처럼 특정 축에 대해서만 속성 값을 지정할 수 있음

### 출력 특성(display)

-   요소의 화면 출력(보여짐) 특성을 강제로 변경
-   기본 값으로는 block, inline, inline-block이 각각 요소에 맞게 이미 지정
-   지정 가능한 값은 flex, grid, none(요소가 존재하나 화면에서 사라짐)이 있음
-   기타로 table, table-row, table-cell이 있음
-   span 태그 선택자에 `display: block;`을 설정하면 가로, 세로 너비 값을 가질 수 있게 됨

### 투명도(opacity)

-   기본값은 1(불투명)
-   0과 1 사이의 소수점 숫자를 지정 할 수 있음
-   0과 가까운 숫자를 지정하면 투명해짐
-   0.5가 아니라 정수 0을 제외한 .5으로 명시해도 동작함

### 글꼴

-   font-style : 글자의 기울기, normal(기본 값), italic
-   font-weight : 글자의 두께, normal(400, 기본 값), bold(700, 두껍게), bolder, lighter, 100 ~ 900의 100단위 값
-   font-size : 글자의 크기, 16px(기본 값), px, em, rem
-   line-height : 한 줄의 높이(행간과 유사), normal(기본 값), 요소의 글꼴 크기의 **배수로 지정**(16px \* 1.4), 단위(px, em, rem)
-   line-height의 세로 중앙 부분과 글자의 중앙 부분을 일치
-   font-family : 글꼴(서체) 지정, 띄어쓰기 등 특수문자가 포함된 글꼴 이름은 큰 따옴표로 묶어야 함
-   첫 번째 글꼴을 먼저 사용하려고 했으나, 적용되지 않는다면 이후에 명시된 **글꼴 후보군**을 가져다 쓰고, 그것도 안된다면 마지막에 명시된 **글꼴 계열**을 가져다 씀
-   글꼴 계열에는 serif(바탕체), sans-serif(고딕체), monospace(고정 너비 글꼴 계열), cursive(필기체)가 있음

### 문자

-   color : 글자의 색상, 기본 값은 rgb(0, 0, 0), 검정색
-   text-align : 글자의 정렬 방식, left(기본 값), right, center, justify(양쪽 정렬)
-   text-decoration : 문자의 선, none(기본 값), underline, overline, line-through(중앙 선)
-   text-indent : 첫 줄 들여쓰기, 음수로 지정하면 내어쓰기도 가능

### 배경

-   background-color로 배경 색깔을 지정할 수 있음(기본 값은 transparent)
-   `background-image: url('경로');`라고 명시해서 이미지를 배경으로 지정할 수도 있음
-   background-size를 지정하면 이미지가 반복적으로 나타남(바둑판식 배열)
    -   cover 값 : 비율을 유지, 요소의 가로와 세로 중 더 넓은 너비에 맞춤
    -   contain 값 : 비율을 유지, 요소의 더 짧은 너비에 맞춤
    -   가로와 세로를 둘 다 명시할 수 있지만, 굳이 그렇게 하지 않는 이유는 보통 배경 이미지의 비율을 모르기 때문에 가로만 지정해서 세로를 자동으로 계산하게 함
-   background-repeat에 no-repeat 값을 부여해서 반복하지 않게 할 수 있음(기본 값은 repeat, 추가적으로 repeat-x, repeat-y 지원)
-   background-position에 center 값을 부여해서 가운데에 이미지를 배치 가능
-   background-position에 지정할 수 있는 값으로는 top, bottom, left, right, center가 있음
    -   top right를 주면 우상단에 이미지가 위치하게 됨
    -   100px 30px을 주면 왼쪽 세로축으로부터 100px, 위쪽 가로축으로부터 30px에 위치
-   background-attachment : scroll(기본 값), fixed 옵션이 있음
    -   배경 이미지 자체가 멈춰 있도록 하고 싶으면 fixed 값을 주면 됨

### 배치

-   position : 요소의 위치 지정 기준
    -   static - 기본 값
    -   relative - 요소 자신을 기준
    -   absolute - position 상 부모 요소를 기준
    -   fixed - 뷰포트(브라우저)를 기준
    -   sticky - 스크롤 영역 기준
-   position과 같이 사용하는 CSS 속성 : top, bottom, left, right, z-index
-   보통 하나의 요소에 relative를 주고 나서 움직이지 않음 -> 비정상적인 레이아웃 발생
-   position 상의 부모를 찾다가 결국 못찾으면 뷰포트를 기준으로 배치
-   fixed는 상위 요소의 relative 유무와 관계없이 아예 뷰포트 상에 고정된 위치에 고정하고, 스크롤 하더라도 그 위치에 존재
-   요소 쌓임 순서(Stack order) : 어떤 요소가 사용자와 더 가깝게 있는지 결정
    1. 요소에 position 속성 값이 있는 경우 위에 쌓임(기본 값 static 제외)
    2. 1번 조건이 같으면, z-index 속성의 숫자 값이 높을수록 위에 쌓임
    3. 1번과 2번 조건까지 같은 경우, HTML의 다음 구조일수록 위에 쌓임
-   단순히 z-index 값이 있다고 해서 요소가 가장 사용자와 무조건 가까이 있을 수 없음
- z-index는 음수 값도 지정할 수 있는데, -1 미만으로 잘 쓰지 않음
- position에 absolute나 fixed 값을 주면 사실 `display: block;`을 지정한 것과 같은 효과가 추가됨

### flex
- 1차원의 레이아웃을 생성
- 부모 요소에 `display: flex;`를 적용하여 자식 요소들이 수평 정렬됨
- flex container, flex items로 역할을 나눌 수 있음
- flex container에 적용가능한 속성
    - display : flex(블록 요소), inline-flex(인라인 요소)
    - flex-flow
    - flex-direction : 주 축을 설정, 기본 값은 row, row-reverse, column, column-reverse의 값 지정 가능
    - flex-wrap : flex items 묶음(줄 바꿈) 여부, nowrap(줄 바꿈 없음)이 기본 값이고, wrap이 여러 줄로 묶음
    - nowrap일 때 부모 요소인 container의 너비보다 넘쳐나면 자식 요소가 찌그러짐
    - jusify-content : 주 축의 정렬 방법, flex-start(기본 값), flex-end, center, space-between, space-around
    - align-content : 교차 축의 여러 줄 정렬 방법, stretch(기본 값), flex-start, flex-end, center, space-between, space-around
    - align-items : 교차 축의 한 줄 정렬 방법, stretch(기본 값), flex-start, flex-end, center, baseline(문자 기준선에 정렬)
- flex items에 적용가능한 속성
    - order : 0(기본 값, 순서 없음), 숫자 값을 줘서 정렬 순서를 변경 가능
    - flex
    - flex-grow : flex item의 증가 너비 비율, 0(기본 값), 증가 비율을 숫자로 지정 가능
    - flex-shrink : flex item의 감소 너비 비율, 1(기본 값), 감소 비율을 숫자로 지정 가능
    - 부모 요소의 너비를 넘어가지 않게 자식 요소들이 찌그러드는 이유가 flex-shrink의 기본 값이 1이기 때문
    - flex-basis : flex item의 공간 배분 전 기본 너비, auto(기본 값, 요소의 content 너비)
    - flex-basis에 0을 주면, 글자와 같은 컨텐트 너비와 관계 없이 자식 요소들의 너비가 flex-grow만큼 지정됨
    - align-self : flex item 하나만 정렬 방식을 지정

### 전환
- 요소의 전, 후 상태가 있는 경우에만 전환 효과를 지정할 수 있음(ex. :active, :hover)
- transition : 요소의 전환(시작과 끝) 효과를 지정하는 단축 속성
- `transition: 속성명 지속시간 타이밍함수 대기시간;`의 형태로 쓸 수 있음
- 쉼표를 넣어서 단축 속성을 여러 개 지정할 수 있음
- 지속시간(transition-duration)은 필수 속성
- transition-property : 전환 효과를 사용할 속성 이름을 지정, 기본 값은 all
- transition-duration : 전환 효과의 지속시간을 지정, 기본 값은 0s
- transition-timing-function : 전환 효과의 타이밍 함수를 지정
    - ease : 느리게-빠르게-느리게(기본 값)
    - linear : 일정하게
    - ease-in : 느리게-빠르게
    - ease-out : 빠르게-느리게
    - ease-in-out : 느리게-빠르게-느리게
    - cubic-bezier(n, n, n, n)
    - steps() : 계단 함수
- easing 함수 치트 시트를 검색하면 원하는 타이밍 함수를 얻을 수 있음
- transition-delay : 전환 효과 전 대기 시간

### 변환
- transform 속성 사용
- `transform: 변환함수1 변환함수2 변환함수3;`처럼 나열해서 여러 함수 사용 가능
- 따로 설명 안한 함수들은 중요도 떨어짐
- 2D 변환 함수
    - translate(x, y)
    - translateX(x)
    - translateY(y)
    - rotate(degree) : 원하는 만큼 시계방향으로 회전, deg 단위 사용
    - scale(x, y) : 크기를 늘림
    - scaleX(x)
    - scaleY(y)
    - skewX(x) : 기울임(x축), 요소를 기울여서 마름모로 만드는 함수, deg 단위 사용
    - skewY(y) : 기울임(y축)
    - matrix(n, n, n, n, n, n)
- 3D 변환 함수
    - translateZ(z)
    - translate3d(x, y, z)
    - scaleZ(z)
    - scale3d(x, y, z)
    - rotateX(x) : 회전(x축)
    - rotateY(y) : 회전(y축)
    - rotate3d(x, y, z, a)
    - perspective(n) : 원근법(거리), **제일 앞에 명시해야 작용함**
    - matrix3d(n, n, n, ..., n)
- persepective 함수가 있고 속성이 따로 있음
    - 속성 `perspective: 600px;`은 관찰 대상의 부모가 적용 대상임
    - 함수 `transfrom: perspective(600px)`는 관찰 대상이 적용 대상임
- backface-visibility : 뒷면이 안보이게 할 수 있는 속성으로, hidden 값을 주면 됨, visible이 기본 값, 요소 자체가 사라진 것은 아님