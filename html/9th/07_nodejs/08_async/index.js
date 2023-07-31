//setTimeout(code,delay):delay동안 기다리다가 코드를 실행 

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// },2000)
// console.log(3);

//편의점에서 물건을 사는 상황
function goMart(){
    console.log('마트에 가서 어떤 음료를 살지 고민한다');
}

function pickDrink(callback){
    setTimeout(()=>{
        console.log('고민끝!!')
        product='제로콜라';
        price =2000;
        callback(product,price);
    },3000)
}

let product;
let price;
goMart();
pickDrink(function pay(product,price){
    console.log(`상품명:${product},가격:${price}`);
});
// function pay(product,price){
//     console.log(`상품명:${product},가격:${price}`);
// }
// pay(product,price); 


//콜백함수:함수타입 파라미터 맨 마지막에 하나 더 선언
// function mainFunc(param1,param2,callback){
//     console.log(param1,param2);
//     callback();
// }

// function callbackFunc(param){
//     console.log("콜백 함수입니다");
// }

// mainFunc(1,2,callbackFunc);