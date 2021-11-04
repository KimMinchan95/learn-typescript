class Person {
  // JS와 차이점 class에서 사용할 멤버 변수를 다 정의해야함 + 변수의 접근범위 class 안에서만은 private 기본 public, readonly 읽기만 가능
  private name: string;
  public age: number;
  readonly log: string;

  // 각 변수의 변수도 정의
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}