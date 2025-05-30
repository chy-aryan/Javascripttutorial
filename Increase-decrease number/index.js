const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let count = 0;

increase.onclick = function(){
    count++;
    document.getElementById("screen").textContent= count;
}

decrease.onclick = function(){
    count--;
    document.getElementById("screen").textContent= count;
}

reset.onclick = function(){
    count = 0;
    document.getElementById("screen").textContent= count;
}

