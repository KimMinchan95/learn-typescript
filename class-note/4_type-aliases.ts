interface Person1 {
  name: string;
  age: number;
}

type Person2 = {
  name: string;
  age: number;
}

let chan: Person1 = {
  name: '민찬',
  age: 27
}

// type은 interface 형식 말고도 다양하게 사용할 수 있음
type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
  console.log(todo);
}
