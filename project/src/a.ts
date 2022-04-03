interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'sheld',
// };

//* 타입 단언을 사용하면 오류를 찾지 못할 수도 있음
const capt = {} as Hero;
// capt.name = 'capt';
// capt.skill = 'shield';

// noe-null type assertion: null이 아님을 단언
let a: string | null;
a!;
