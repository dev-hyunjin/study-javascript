// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.

let file = require('fs');
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = new Array();

products.push(new Product('바밤바', 500, 5));
products.push(new Product('와쿠와크', 1000, 4));
products.push(new Product('엄마는 외계인', 3000, 1));

let productsJSON = JSON.stringify(products);

file.writeFile('product.json', productsJSON, 'utf-8', function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log("성공!");
    }
});

file.readFile('product.json', 'utf-8', function(error, content) {
    if(error) {
        console.log(error);
    } else {
        products = JSON.parse(content);
    }
});

console.log(products);

/* 강사님 풀이 */
