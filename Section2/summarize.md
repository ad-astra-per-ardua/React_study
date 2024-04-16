## Rewinding Javascript
<hr>
Adding JS code to a website. <br>

1. Add between script Tags. Inline approach. <br>
ex)

```html
<script>
alert('Hello')
</script>
```

- Don't use because it cause quickly lead to unmaintainable & complex HTML files.
- Typically only used for very short scripts

<br>

2. import Javascript file Via script src tags
```html
<script src="script.js"></script>
```
- Separates HTML & JavaScript code.
- Maintaining complex JavaScript powered apps becomes easier.

<br>

- defer attribute : Load Javascript after HTML when we need to use HTML elements. But, Alternatively, we could move the script tags to the end of the body section. It works same as well. 

<br>

- type = 'module' attribute : treat Javascript as a module, which unlock important syntax -> import. 
this can import script A to script B. <br> ex) import / export

<br>

Nevertheless, React projects always use a **build process** which inject script tags in HTML automatically. 

<br>
The reason why React Projects Use A Build Process.

1. Raw, unprocessed React code won't execute in the browser.
Cause, React use spacial JSX function. Which is not standard Javascript feature(Adding HTML tags into Javascript files).
2. In addition, the code would not be optimized for production(a.g., not minified)

## Arrow function syntax

```js
<button
className={activeContentIndex === 3 ? "active" : ""}
onClick={()=> setActiveContentIndex(3)}
>
React vs JS
</button>
```
Especially important when dealing with Anonymous function.
<br>
Arrow function keyword don't use function syntax. Only use parameter and () => symbols.
<br>
```js
export default (paramA, paramB) => {
    console.log("Testing")
    return paramA + paramB
}
```

+)
1) 매개변수 목록 괄호 생략하기

화살표 함수가 정확히 하나의 매개변수만 사용하는 경우, 묶는 괄호를 생략할 수 있습니다.<br>
```
(userName) => { ... } 가 아니라
userName => { ... } 라고 쓸 수 있습니다.
```
- 함수에 매개변수가 없는 경우에는, 괄호를 생략해서는 안 됩니다.
() => { ... } 라고 써야 옳습니다.
- 함수가 둘 이상의 매개변수를 받는 경우에도 괄호를 생략해서는 안 됩니다.
    ```
    userName, userAge => { ... } 라고 쓰면 안 됩니다.
    (userName, userAge) => { ... } 라고 써야 합니다.
    ```
  
화살표 함수에 반환문 외에 다른 로직이 없는 경우, return키워드와 중괄호를 생략할 수 있습니다.
```js
number => {   return number * 3;}
```
라고 쓰는 게 아니라
```js
number => number * 3;
```
라고 쓸 수 있습니다.<br>
아래와 같이 오류가 생깁니다.
```js
number => return number * 3; // 이 경우 retrun 키워드는 생략되어야 하므로, 오류가 생깁니다.
number => if (number === 2) { return 5 }; // 이 경우 if 문은 반환될 수 없으므로 오류가 생깁니다. 
```
특수한 경우: 객체만 반환하는 경우

2)에서 설명한 짧은 대안으로 자바스크립트 객체를 반환하려고 하면, 다음과 같이 유효하지 않은 코드가 나올 수 있습니다.

```js
number => ({ age: number }); // 객체를 반환하려고 합니다.
```
자바스크립트는 중괄호를 JS 객체를 생성하는 코드가 아닌 함수 본문 래퍼로 취급하기 때문에 이 코드는 유효하지 않습니다.

객체를 생성하고 반환해야 한다고 자바스크립트에 “말하려면” 코드를 다음과 같이 수정해야 합니다:

```js
number => ({ age: number }); // 추가 괄호를 써서 객체를 감싸줍니다.
```
객체와 중괄호를 추가 괄호로 감싸면, 자바스크립트는 중괄호가 함수 본문을 정의하는 것이 아니라 객체를 생성하기 위한 것임을 이해합니다. 따라서 객체가 반환됩니다.
