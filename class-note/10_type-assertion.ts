//* 타입 단언(type assertion)
// 내가 정의한 타입으로 간주를 해라 (as)
let a;
a = 20;
a = 'a';
let b = a as string;

//* DOM API 조작할 때 가장 많이 사용
// <div id="app">hi</div>

const div = document.querySelector('div');
if (div) {
  div.innerText
}