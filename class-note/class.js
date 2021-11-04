// ES2015 (ES6)
class Person {
  // 클래스 로직
  // constructor: 초기화
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

const seho = new Person('세호', 30); // 생성 되었습니다.
console.log(seho); // { name: '세호', age: 30}

// Prototype 설명 (크롬에서는 '__proto__'로 표시)

const user = { name: 'capt', age: 100 };
const admin = {};

// 프로토타입의 상위에 유저 객체를 주겠다.
admin.__proto__ = user;
console.log(admin.name); // 'capt'
console.log(admin.age); // 100
console.log(admin); // {} 기본 객체의 모양
console.log(admin.__proto__); // { name: 'capt', age: 100 }

admin.role = 'admin';
console.log(admin) // { role: 'admin' }
console.log(admin.__proto__) // { name: 'capt', age: 100 }