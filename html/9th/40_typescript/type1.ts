//Turple
//튜플 타입 선언
let drink: [string, number];

//튜플 초기화
drink = ["cola", 2000];

//튜플의 선언과 초기화
let drink2: [string, number] = ["cola", 3000];

//js배열과 동일하게 index접근가능 method사용 가능
console.log(drink.length);

//스프레드 연산자 사용가능
console.log([...drink, ...drink2]);

//readonly:데이터를 변경할 수 없다
let drink3: readonly [string, number] = ["cola", 2000];

console.log([...drink3]);

/////////////////////////////////////////////////////////////////
//열거형
//enum은 기본적으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
  admin = 100,
  user = 200,
  guest,
}

//enum은 문자열을 지정해 줄 수 있다.
enum Delivery {
  pending = "pending",
  delivery = "delivery",
  finish = "finish",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

/////////////////////////////////////////////////////////////////
//any
let a: any[]=['1','2','3',1,2,3];


