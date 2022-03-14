// 별도의 값을 지정하징 않으면 숫자형 이넘으로 취급: 처음이 0이고 1씩 증가 (숫자를 지정하면 그 다음부터 1씩 증가)
enum ShoesNum {
    Nike,
    Adidas
}

let myShoesNum = ShoesNum.Nike;
console.log(myShoesNum); // 0

// 문자형 이넘
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}
// askQuestion에 대해 정확히 모르면 여러가지 에러가 생길 수 있음
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');

askQuestion(Answer.Yes);