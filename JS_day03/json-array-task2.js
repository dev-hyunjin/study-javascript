// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
];

let productsJSON = JSON.stringify(products);

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

let file = require('fs');

file.writeFile('shop.json', productsJSON, 'utf-8', error => {});

file.readFile('shop.json', 'utf-8', (error, content) => {
    products = JSON.parse(content);
});

let totalprice = products.map(data => data.price).reduce((total, data) => total + data);
let totalstock = products.map(data => data.stock).reduce((total, data) => total + data);

let totalPriceAndStock = { "총 가격" : totalprice, "총 재고 수" : totalstock};

totalPriceAndStockJSON = JSON.stringify(totalPriceAndStock);

file.writeFile('sum.json', totalPriceAndStockJSON, 'utf-8', error => {});