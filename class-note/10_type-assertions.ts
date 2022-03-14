// 타입 단언(type assertion)
let a;
a = 20;
a = 'a';

// 타입 단언 (as): typescript 보다 개발자가 타입을 더 잘 알고있다.
let b = a as string;

//* DOM API 조작
// <div id="app" > hi < /div>

let div = document.querySelector('div');
if (div) {
    div.innerText
}