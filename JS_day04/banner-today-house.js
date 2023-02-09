/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
const lastImageDiv = document.createElement("div");
const firstImageDiv = document.createElement("div");
const next = document.querySelector("div.next");
const prev = document.querySelector("div.prev");
const buttons = document.querySelectorAll(".buttons button");
let checkArrow = false;
let count = 1;
let auto = setInterval(autoSlide, 5000);
let temp = buttons[0];

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(auto);
        count = parseInt(button.value);
        console.log(count);
        console.log(temp);
        changeButtonStyle();
        banner.style.transition = "transform 0.3s";
        banner.style.transform = `translate(${-1728 * count}px)`;
        auto = setInterval(autoSlide, 5000);
    });
});

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(image/000${i+1}.png)`)

banner.appendChild(lastImageDiv);
lastImageDiv.style.backgroundImage = `url(image/0001.png)`;

banner.insertBefore(firstImageDiv, document.querySelector("div.banner div"));
firstImageDiv.style.backgroundImage = `url(image/00${imageDiv.length}.png)`

banner.style.transform = `translate(-1728px)`;

function changeButtonStyle() {
    if(temp){
        temp.style.width = "6px";
        temp.style.height = "6px";
        temp.style.background = "hsla(0,0%,100%,.7)";
    }
    buttons[count - 1].style.width = "8px";
    buttons[count - 1].style.height = "8px";
    buttons[count - 1].style.background = "#fff";
    temp = buttons[count - 1];
}

function autoSlide(){
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1728 * ++count}px)`;
    console.log(count);
    if(count == 12) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1728px)";
        }, 300);
    }
    changeButtonStyle();
}