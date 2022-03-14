interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

let tony = introduce();
// 에러: Developer와 Person의 공통된 속성이 아니여서
// console.log(tony.skill);

// 타입가드 사용 전: 가독성이 매우 떨어짐
if ((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}