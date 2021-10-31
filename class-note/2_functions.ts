// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
sum(10, 20);

// 함수의 반환 값에 타입을 정희하는 방식
function add(): number{
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum1(a: number, b: number): number {
  return a;
}
sum1(10, 20); // 30
// sum(10, 20, 30, 40); 자바스크립트와 다르게 4개의 인자를 넘겼다고 체크해줌
// sum(10); 인자 개수가 적어도 체크해줌

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {

}
log('hello world');
log('hello ts', 'abc');