let count=0;
let countel = document.getElementById("score1");
function increment1(){
    count++;
    countel.textContent = count;
}
function increment2(){
    count += 2;
    countel.textContent = count;
}
function increment3(){
    count += 3;
    countel.textContent = count;
}
let count1=0;
let countel2 = document.getElementById("score2");
function increment01(){
    count1++;
    countel2.textContent = count1;
}
function increment02(){
    count1 += 2;
    countel2.textContent = count1;
}
function increment03(){
    count1 += 3;
    countel2.textContent = count1;
}
let newString = "";
let newString1 = "";

let savEL = document.getElementById("entry1");
let savEL1 = document.getElementById("entry2");
function save(){
    newString = newString + count + "-";
    savEL.innerText = newString;
    newString1 = newString1 + count1 + "-";
    savEL1.innerText = newString1;
}

function clearr(){
    newString = "";
    newString1 = "";
    count = 0;
    count1 = 0;
    savEL.innerText = newString;
    savEL1.innerText = newString1;
    countel2.textContent = 0;
    countel.textContent = 0;

}