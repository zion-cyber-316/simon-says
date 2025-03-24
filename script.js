let gameSeq = [];
let userSeq = [];
let btns = ["blue","green","red","yellow"];
h3 = document.querySelector("h3");

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game start ");
        started = true;
    }
    levelUp();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
},250)
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
},250)
}


function levelUp(){
    userSeq = [];
    level++;
h3.innerText = `level ${level}`
let randIndx = Math.floor(Math.random() * 4 );
let randcolor = btns[randIndx];
let randbtn = document.querySelector(`.${randcolor}`);
gameSeq.push(randcolor);
console.log(gameSeq)
gameFlash(randbtn);
}

function checkAns(idx){
   
   
    if(userSeq[idx] == gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000)
       }
    }else{
        h3.innerHTML = `Game over ! your score was <b> ${level} </b>  <br> press any key to restart`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        rest();
    }
   
}


function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    console.log(userColor)
    checkAns(userSeq.length-1);
}


let  allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function rest(){
    userSeq = [];
    gameSeq = [];
    started = false;
    level = 0;
}