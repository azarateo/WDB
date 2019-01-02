var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var upto = document.querySelector('#upto');
var resetButton = document.querySelector('#resetButton');
var topscore = document.querySelector('#topscore');
var p1button = document.querySelector('#p1button');
var p2button = document.querySelector('#p2button');
var p1score = 0;
var p2score = 0;
var winningScore = 0;
var gameover = false;


p1button.addEventListener('click',function(){
    if(!gameover){
        p1score++;
        console.log('p1:'+p1score+' p2:'+p2score+'-- wins when anyone gets to:'+winningScore);
        if(p1score === winningScore){
            gameover = true;
            p1.classList.add('winner');
        }
        p1.textContent=p1score;
    }
});

p2button.addEventListener('click',function(){
    if(!gameover){
        p2score++;
        console.log('p1:'+p1score+' p2:'+p2score+'-- wins when anyone gets to:'+winningScore);
        if(p2score === winningScore){
            gameover = true;
            p2.classList.add('winner');
        }
        p2.textContent=p2score;
    }
});

resetButton.addEventListener('click',reset);

function reset() {
    gameover = false;
    p1score=0;
    p2score=0;
    p1.classList.remove('winner');
    p1.textContent=0;
    p2.classList.remove('winner');
    p2.textContent=0;
}

upto.addEventListener('change',function(){
    winningScore = Number(upto.value); 
    topscore.textContent = winningScore;
    reset();
});

