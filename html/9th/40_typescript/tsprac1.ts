//실습 1번
let olimpic_newgame: readonly [{ name: string; type: string }, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
//실습2
type title = "DC 언체인드" | "MARVEL 퓨처파이트";
type price = 50000 | 65000;
type category="action" | "role"
type platform="모바일"
interface Game {
    title:title,
    price:price,
    desc?:'DC히어로&빌런...',
    category:category,
    platform:platform
}

let heroGame_A:Game={
    title:'DC 언체인드',
    price:50000,
    desc:'DC히어로&빌런...',
    category:'action',
    platform:'모바일'
}
let heroGame_B:Game={
    title:'MARVEL 퓨처파이트',
    price:65000,
    category:'role',
    platform:'모바일'
}

//실습3
function sum1(a:number,b:number):number{
    return a+b;
}
console.log(sum1(5,11));


//실습 4
const numbers = [1, 2, 3, 4, 10];

const sum2 = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};


console.log(sum2(...numbers));

//실습5
const arrElement=<T>(arr:T[],idxnum:number)=>{
    if(arr.length -1 < idxnum){
      return false;
    }
}

console.log(arrElement<string>(['a'],1))