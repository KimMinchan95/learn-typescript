// function logMessage(value: string) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온 타입: 1가지 이상의 타입을 지정하고 싶을때
let seho: string | number | boolean;
// 타입 가드: 특정 타입으로 타팁의 범위를 좁혀나가는(필터링 하는) 과정
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

interface Person {
    name: string;
    age: number;
}

// Developer도 되야되고 Person도 되야하니까 둘이 겹치는 name만 가능함
function askSomeone(someone: Developer | Person) {
    // someone.name;
    // 공통되지 않기 때문에 에러
    // someone.skill;
    // someone.age;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

// 인터섹션 타입 &
let some: string | number | boolean;
let capt: string & number & boolean;

// Developer와 Person이 가지고 있는 type에 모두 접근 가능함
function askSomeoneAgain(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}

// 에러 인터섹션이기 때문에 교집합이 되어야됨
// askSmeoneAgain({ name: '디벨로퍼', skill: '웹 개발' });