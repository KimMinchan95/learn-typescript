// 인터페이스
interface Dev {
    name: string;
    skill: string;
}

interface Per {
    name: string;
}

let developer: Dev;
let person: Per;

// 에러: 우측에 타입이 더 커야됨(상위)
// developer = person;

// 우측이 더 상위 개념이라 가능
person = developer;

class PersonClass {
    name: string;
    skill: string;
    phone: number;
}

// 가능 PersonClass가 더 상위
developer = new PersonClass();

// 함수

// sum이 add의 구조를 포함하는 경우
let add = function (a: number) {
    // ...
}
let sum = function (a: number, b: number) {
    // ...
}

// 가능
sum = add;

// 에러
// add = sum

// 제네릭
interface Empty<T> {
    // ..
}
let empty1: Empty<string>;
let empty2: Empty<number>;
// 비어있기 때문에 동일하다고 취급
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// 동일하지 않아서 둘 다 에러
// notempty1 = notempty2;
// notempty2 = notempty1