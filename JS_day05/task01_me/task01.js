function findMoney() {
    const text = document.querySelector("input#textBox").value;
    const children = document.getElementById("children");
    const student = document.getElementById("student");
    const adult = document.getElementById("adult");
    console.log(children.childNodes[1].innerHTML);

    switch(text) {
    case "아동":
        reset();
        children.childNodes[1].innerHTML = "★아동";
        children.style.background = "#ef5350";
        break;
    case "청소년":
        reset();
        student.childNodes[1].innerHTML = "★청소년";
        student.style.background = "#ef5350";
        break;
    case "성인":
        reset();
        adult.childNodes[1].innerHTML = "★성인";
        adult.style.background = "#ef5350";
        break;
    default :
        alert("다시 시도해주세요");
        reset();
        break;
    }
}

function reset() {
    const children = document.getElementById("children");
    const student = document.getElementById("student");
    const adult = document.getElementById("adult");

    children.style.background = "white";
    student.style.background = "white";
    adult.style.background = "white";

    children.childNodes[1].innerHTML = "아동";
    student.childNodes[1].innerHTML = "청소년";
    adult.childNodes[1].innerHTML = "성인";
}