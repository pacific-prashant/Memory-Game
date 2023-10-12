let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","blue","green"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started!");
        started = true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100)
};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100)
};
function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let num = Math.floor(Math.random() * 3);
    let randColor = btns[num];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnflash(randbtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = 'white';
        },50);
        reset();
    }
}
function btnPress(){
    let c = this;
    userflash(c);
    let userColor = c.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll('.btn');
for(b of allbtns){
    b.addEventListener('click',btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
