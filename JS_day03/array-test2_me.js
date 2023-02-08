// 1. 제어문
// 2. callback함수
// 3. arrow expression

// 1~10까지 Array객체에 담은 후 짝수만 출력
// 1.
function oneToTenFirst() {
    let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < oneToTen.length; i++) {
        if(oneToTen[i] % 2 == 0) {
            console.log(oneToTen[i]);
        }
    }
}
// oneToTenFirst();

// 2.
function oneToTenSecond() {
    let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    oneToTen.forEach(function(data, i, oneToTen) {
        if(oneToTen[i] % 2 == 0) {
            console.log(oneToTen[i]);
        }
    });
}
// oneToTenSecond();

// 3.
function oneToTenThird() {
    let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    oneToTen.filter(data => data % 2 == 0).forEach(data => console.log(data));
}
// oneToTenThird();

// 한글을 정수로 변경
let input = "일이삼사";
let kor = ['공', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
let result = "";

// 1.
for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);
    result += kor.indexOf(char);
}
console.log(result);


// 3.
want.split("").forEach(function() {

});

// 정수를 한글로 변경
let number = 2468;
let result = "";
// 1.
// while(number != 0) {
//     let index = number % 10;
//     result = kor[index] + result;
//     number = (number - index) / 10;
// }
// console.log(result);

// 2.

// 3.

// 1~100까지 합 출력
// 1.
function plusResultFirst() {
    let datas = new Array(100);
    for (let i = 0; i < datas.length; i++) {datas[i] = i + 1;}
    
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        sum += datas[i];
    }
    console.log(sum);
}
// plusResultFirst();

// 2.
function plusResultSecond() {
    let datas = new Array(100);
    for (let i = 0; i < datas.length; i++) {datas[i] = i + 1;}
    
    let sum = 0;
    datas.forEach(function(data) {sum += data;});
    console.log(sum);
}
// plusResultSecond();

// 3.
function plusResultThird(params) {
    let datas = new Array(100);
    for (let i = 0; i < datas.length; i++) {datas[i] = i + 1;}
    
    let sum = 0;
    datas.forEach(data => sum += data);
    console.log(sum);
}
// plusResultThird();