globalThis.count = 1;

function numberToKor() {
    const input = document.getElementById("input").value;
    const out = document.getElementById("result");
    let hangle = "공일이삼사오육칠팔구점영".split("");
    
    count++;
    if(!parseFloat(input)){
        out.innerHTML = "숫자만 입력하세요";
        return;
    }
    const inputAr = input.split("");

    let cnt = 0;
    for (let i = 0; i < inputAr.length; i++) {
        if(inputAr[i] == ".") {
            inputAr[i] = 10;
            cnt++;
            if(cnt > 1) {
                out.innerHTML = "숫자만 입력하세요";
                return;
            }
        }
    }

    if(inputAr[0] == 0) {
        inputAr[0] = 11;
    }
    
    let result = inputAr.map(input => hangle[input]).join("");
    
    out.innerHTML = result;
    document.querySelector(".count").innerHTML = count;
}