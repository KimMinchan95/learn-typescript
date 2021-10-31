enum Num1 {
  Nike,
  Adidas,
}

// 별도의 값을 넣지 않으면 숫자형 이넘 취급
console.log(Num1.Nike); // 0

// 숫자형 이넘에 초깃값을 지정하면 1씩 증가
enum Num2 {
  Nike = 10,
  Adidas,
  etc
}

console.log(Num2.etc) // 12

// 문자형 이넘
enum Shoes {
  Nike = 'nike',
  Adidas = 'adidas'
}

let myShoes = Shoes.Nike;
console.log(myShoes) // 'nike'

// 이넘의 활용 사례
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
