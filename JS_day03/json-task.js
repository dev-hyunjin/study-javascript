// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.

// 동물원의 동물 전체 평균 나이를 구한다.

function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
}

let zoo = [
    new Animal('사자', '포유류', 5),
    new Animal('독수리', '조류', 7),
    new Animal('도마뱀', '파충류', 3),
];

function getAgeAverage(zoo, callback) {
    let sum = 0;
    zoo.map(data => sum += data.age);
    let avg = sum / zoo.length;
    if(callback) {
        callback(avg);
        return;
    }
    return avg;
}

getAgeAverage(zoo, avg => {console.log(avg)});

/* 강사님 풀이 */
function Animal(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let animals = [
    new Animal('구름이', '양', 4),
    new Animal('뽀삐', '소', 8),
    new Animal('바둑이', '기린', 9)
];

let animalsJSON = JSON.stringify(animals);

function average(animalsJSON, callback) {
    let animals = JSON.parse(animalsJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback) {
        callback(average);
    }
    return average;
}

average(animalsJSON, average => console.log(average));