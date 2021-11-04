export { };
//* 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

10 + '10' // '1010'

//* 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// let shoopingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

//* 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

// Dropdown에 있는 제네릭 타입으로 넘어감
interface DetailedDropdown<K> extends Dropdown<K>{
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 10,
  tag: 5
}

//* Best Common Type
// union 타입으로 하나씩 지정해 나감
let arr = [1, 2, true, true, 'a'];