//Gerneric
let value: string | number = "안녕";

//함수의 모든값이 들어올 수 있다
function getValue(val: string | number | object) {
  return val;
}

getValue("hi");

//제네릭
function getValue2<T>(value: T): T {
  return value;
}

console.log(getValue2<string>("hi"));
console.log(getValue2<number>(123));

function arrLength<T>(arr: T[]) {
  return arr.length;
}

console.log(arrLength<string>(["a", "b", "c"]));
console.log(arrLength<number>([1, 2, 3, 4, 5]));

function printFunc<T>(x: T, y: T): T {
    console.log(x)
    console.log(y)
    return x;
}
console.log(printFunc<string>("hi", "hello"));
