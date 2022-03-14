function Person(name, age) {
    this.name = name;
    this.age = age;
}
let jane = new Person('제인', 25);

// class는 ES2015 (ES6)에 등장
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

const john = new Person('존', 30); // 생성 되었습니다.
console.log(john); // {name: '존', age: 30}
