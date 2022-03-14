// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

//* 제네릭: 함수를 호출하는 시점에 타입을 넘겨준다.
// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

//* 제네릭을 사용하지 않으면 여가지로 나눠서 작성해야됨 - 유지 보수관점에서 좋지 않음
// function logText(text: string) {
//     console.log(text);
// text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

//* 유니온 타입은 sting과 number 공통으로 접근할 수 있는 속성과 API만 자동완성 제공
// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// logText('a');
// logText(10);
// const num = logNumber(10);

//* 제네릭의 사용
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);
logText('a');
logText(10);

//* 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };
const obj2: Dropdown<number> = { value: 10, selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) { 
        console.log(text);
    })
    return text;
}
logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLen<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
//* 에러: number는 legnth가
// logTextLen(10);
logTextLen({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

//* 쇼핑 아이템 옵셥 중에 하나만 제네릭에 들어갈 수 있다고 제한
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption('a');
getShoppingItemOption("name");