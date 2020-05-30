//starting the game here!! code in java script!!

var scores = [0 , 0];
var roundScore = 0;
 
var activePlayer = 0;

//initializing the game
document.querySelector('.dice').style.display = 'none' ;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click' , function(){
    //random num show the photo and show the wanted picture
    var dice = Math.floor(Math.random() * 6) + 1 ;
    document.querySelector('.dice').style.display = 'block' ;

    var name = 'dice-'+ dice +'.png';
    document.querySelector('.dice').src = name;

    roundScore += dice ;

    if(dice == 1){
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.querySelector('.dice').style.display = 'none';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

    }
    document.getElementById('current-' + activePlayer).textContent = roundScore ;

}) //inside the dice roll buttong

document.querySelector('.btn-hold').addEventListener('click' , function(){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        //alert('Player' + (activePlayer+1) + ' Won The game!!');
        
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!!'
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
        document.querySelector('.dice').style.display = 'none';
    }
    else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        roundScore = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('.dice').style.display = 'none';
    
        
    }
    //console.log('hi');
}) // inside the button holder

document.querySelector('.btn-new').addEventListener('click' , function(){
    scores[0] = scores[1] = 0;
    activePlayer = 0 ;
    roundScore = 0 ;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'


    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    
})