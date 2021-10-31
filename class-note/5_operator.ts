export { };
// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// Union Type 하나 이상의 타입을 사용할 수 있게 만들어줌
// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정

let seho: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Pesron {
  name: string;
  age: number;
}

// Union Type은 공통된 속성만 접근 가능

// Devloper아 Person 둘 중 하나
function askSomeone(someone: Developer | Person) {
  someone.name; // 공통속성만 접근 가능 Developer와 Person 둘다 가능해야 함으로
  // someone.skill  erorr
  // someone.age error
}

askSomeone({ name: '디베로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

// Intersection Type
let chan: string | number | boolean;
let capt: string & number & boolean;

// Developer와 Person의 속성을 하나로 합친 타입
function saySomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

saySomeone({ name: '디벨로퍼', skill: 'TS', age: 30 });
