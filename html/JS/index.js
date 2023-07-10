// //변수란 특정값을 저장하는 공간
// //abc = "abcdefg~~~"

// //키워드 변수이름 = 값;
// //키워드 var, let, const

// var number = 5; //변수의 선언과 할당이 동시에 나타냄
// var number;

// //var보다는 let을 권장
// //var는 영역을 무시하는 경향이 있다!!!!!!!


// var number1; //변수 선언
// number1 = 5; //변수 값 할당
// number1 = 6;

// let string ="가나다";
// string="가나다라";
// // let string1;

// const string2="가나다";
// // string2="aaaaa"
// console.log(string2);

// //var let const
// //var : 재선언 재할당이 가능!
// //let:재선언 불가능 재할당 가능!
// //const:재선언 재할당 둘다 불가!
// let iii;
// console.log(iii);

// let firstName="";
// let var="";

const variable=1; //상수

//문자열 선언 및 할당
var number = 1;
var string="aaaaa"
var string="1";
var string=`1abc2`;
var number =5;
// console.log(string , number)

let name="rkdtjr"

var string=`안녕하세요`;
let hihi=`안녕하세요 ${name} 입니다!!!`
console.log(hihi);
//'' ," ", ``
let names=["홍길동","성춘향","짱구"];
//인덱싱
//인덱스 : 0부터 시작
console.log(names[0],names[1],names[2]);

// let data=[1,"apple",false,null,undefined];

console.log(names.length) //배열의 길이


names.push("짱아");
console.log("push",names);
//배열의 마지막에 값을 추가
names.pop();
console.log("pop",names);
//배열의 가장 마지막값을 삭제
names.unshift("신형만");
console.log("unshift",names);
//배열의 가장 앞에 값을추가
names.shift();
console.log("shift",names);
//배열의 가장앞에 값 삭제
let index=names.indexOf("짱구");
console.log(index);
//배열의 인덱스 값 출력, 만약 값이 존재하지 않을경우 -1 출력
let isInclude=names.includes("홍길동");
console.log(isInclude);
//값이 포함되어있는질 확인

let color=['빨','주','노','초','파','남','검정'];
console.log(color[1],color[2],color[3],color[4])
console.log(color[2])
color.push('아쿠아');
console.log(color);
let in1 = color.indexOf('검정');
console.log(in1);
const arr=color.reverse()
console.log(arr);




