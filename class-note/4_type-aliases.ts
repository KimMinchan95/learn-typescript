interface Person {
    name: string;
    age: number;
}

// type Person = {
//     name: string;
//     age: number;
// }

const kelly: Person = {
    name: '캘리',
    age: 30
}

type MyString = string;
const str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
    
}