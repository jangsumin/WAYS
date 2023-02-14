### 표기법

- dash-case(kebab-case), snake_case는 보통 HTML, CSS에서 사용
- camelCase는 JavaScript에서 주로 사용
- PascalCase는 camelCase와 다르게 맨 앞 문자를 대문자로 쓰고, JavaScript에서 생성자를 사용할 때 주로 사용
- zero-based numbering : 0을 기반으로 숫자를 매김
- 주석
  - // : 한 줄 메모
  - /* */ : 한 줄 메모
  - 여러 줄 메모 
  ```js
    /**
     *
     *
     */
    ```

### 데이터 종류
- **String(문자 데이터)**, 데이터 정의 방법은 따옴표 사이에 데이터 명시
- 보간법 : 백틱도 사용할 수 있는데 ${}의 중괄호 사이에 데이터를 보간하는 법
- **Number(숫자 데이터)**, 정수 및 부동 소수점 숫자를 나타냄
- **Boolean(불린 데이터)**, true, false의 두 가지 값밖에 없는 논리 데이터
- **Undefined**, 값이 할당되지 않은 상태, 혹은 존재하지 않는 상태를 나타냄
```js
let undef;
let obj = { abc: 123 };
console.log(undef); // undefined
console.log(obj.xyz); // undefined
```
- **Null**, 어떤 값이 의도적으로 비어있음을 의미
- `let empty = null;`
- **Object(객체 데이터)**, 여러 데이터를 Key:Value의 쌍의 형태로 저장
```js
let user = {
  name: 'SUMIN',
  age: 18,
  isValid: true
};
```
- **Array(배열 데이터)**, 여러 데이터를 순차적으로 저장

### 변수
- 데이터를 저장하고 참조하는 데이터의 이름
- 변수 선언 키워드(예약어)로는 var, let, const가 있음
- let으로 선언한 변수는 값의 재할당이 가능
- const는 값의 재할당이 불가능
- 예약어 : 특별한 의미를 가지고 있어서, 변수나 함수 이름 등으로 사용할 수 없는 단어
- 예를 들어서, this, if, break와 같은 예약어들은 변수의 이름으로 쓰면, SyntaxError 발생

### 함수
- 특정 동작(기능)을 수행하는 일부 코드의 집합
```js
// 함수 선언
function helloFunc() {
  console.log(1234);
}

// 함수 호출
helloFunc(); // 1234
```
- 소괄호 안에 들어가는 것이 매개변수(Parameters)
- 함수 호출 시에는 인수(Arguments)라고 함
```js
// 익명 함수
// 함수 표현
let world = function () {
  console.log('World!');
}

world(); // World!
```
- 객체의 속성 값 부분에 일반적인 데이터가 아닌 함수가 있을 때 메소드라고 함

### 조건문
- 조건의 결과에 따라 다른 코드를 실행하는 구문
- if, else if, else의 예약어를 사용하여 조건에 따라 원하는 코드를 실행

### DOM API
- DOM (Document Object Model)
- API (Application Programming Interface)
- 자바스크립트로 HTML을 제어할 때 사용하는 명령들을 DOM API라 생각하면 쉬움
- HTML 문서는 위에서 아래로 읽어나가기 때문에 script 태그가 head 태그 내에 있으면 적용되지 않을 수 있음
- head 태그 내에 script 태그를 쓰고 싶다면 defer 속성을 추가하거나 script 태그를 body 맨 밑에 쓰기
```js
// HTML 요소 1개 검색/찾기
const boxEl = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드
// 첫번째 인자 'click'은 이벤트
// 두번째 인자인 익명 함수는 핸들러
boxEl.addEventListener('click', function () {
  console.log('Click!');
});

// 요소의 클래스 정보 객체 활용
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active');

// 값을 얻는 용도(Getter), 값을 지정하는 용도(Setter) 둘 다 사용가능함
console.log(boxEl.textContent); // Box!!

boxEl.textContent('Hello!');
console.log(boxEl.textContent); // Hello!
```

### 메소드 체이닝
- Method Chaining
- 데이터 형태에 맞는 메소드를 연속으로 사용할 수 있음