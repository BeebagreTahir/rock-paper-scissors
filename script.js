let rockButton = document.querySelector('.rock-button');
let paperButton = document.querySelector('.paper-button');
let scissorsButton = document.querySelector('.scissors-button');
let resetButton = document.querySelector('.reset-button')
let scoreContainer = document.querySelector('.score-container')
let selectionContainer = document.querySelector('.selection-container')
let autoPlay = document.querySelector('.auto-play')

let result = '';

rockButton.addEventListener('click',() => {playgame('Rock')});
paperButton.addEventListener('click',() => {playgame('Paper')});
scissorsButton.addEventListener('click',() => {playgame('Scissors')})

resetButton.addEventListener('click', () =>{
    score.won = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score')
scoreContainer.innerHTML = `<p>Win:${score.won} Lose:${score.lose} Tie:${score.tie}</p>`
selectionContainer.innerHTML = `<p>You selected  and computer selected is  Result is </p>` 
    
})

let isautoplaying = false;
let IntervalID;
autoPlay.addEventListener('click',()=>{
    if(!isautoplaying){
        IntervalID = setInterval(function(){
        playgame(computerMove());
        isautoplaying = true
    },2000)}
    else{
        clearInterval(IntervalID);
        isautoplaying = false;
    }
})




let score = JSON.parse(localStorage.getItem('score')) ||  { 
    won: 0,
    lose: 0,
    tie:0,
}

selectionContainer.innerHTML = `<p>You selected  and computer selected is  Result is </p>` 
scoreContainer.innerHTML = `<p>Win:${score.won} Lose:${score.lose} Tie:${score.tie}</p>`



function computerMove(){
    let randomNumber = Math.random();
    let cMove = ''
    if (randomNumber <= 1/3){
        cMove = 'Rock';
    }else if(randomNumber <= 2/3){
        cMove = 'Paper';
    }else if(randomNumber <= 3/3){
        cMove =  'Scissors'
    }return cMove
}





function playgame(playermove){
    let result = '';
    let computer = computerMove();

    if(playermove === 'Rock'){
        if(computer === 'Rock'){
            result = 'Tie'
        }else if(computer === 'Paper'){
            result = 'You Lose'
        }else if(computer === 'Scissors'){
            result = 'You Won'
        }
    }else if(playermove === 'Paper'){
        if(computer === 'Rock'){
            result = 'You Won'
        }else if(computer === 'Paper'){
            result = 'Tie'
        }else{
            result = 'You Lose'
        }
    }else if(playermove === 'Scissors'){
        if(computer === 'Rock'){
            result = 'You Lose'
        }else if(computer === 'Paper'){
            result = 'You Won'
        }else{
            result = 'Tie'
        }
    }
    if(result === 'You Won'){
        score.won += 1;
    }else if(result === 'You Lose'){
        score.lose += 1;
    }else if(result === 'Tie'){
        score.tie += 1;
    }
    scoreContainer.innerHTML = `<p>Win:${score.won} Lose:${score.lose} Tie:${score.tie}</p>`
    selectionContainer.innerHTML = `<p>You selected ${playermove} and computer selected is ${computer} Result is ${result}</p>` 
    console.log(`You selected ${playermove} and computer selected is ${computer} Result is ${result}`)

    localStorage.setItem('score',JSON.stringify(score))
}






