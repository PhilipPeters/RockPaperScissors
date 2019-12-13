function computerPlay() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    return gameChoices[Math.floor(Math.random()*gameChoices.length)];
};

function compare(player1Selection, player2Selection) {

    if (player1Selection===player2Selection) { return 'Draw'; }
    else if (((player1Selection==='rock')&&(player2Selection==='scissors')) || 
            ((player1Selection==='paper')&&(player2Selection==='rock')) ||
            ((player1Selection==='scissors')&&(player2Selection==='paper')))
            { return 'player1Win'; }
    else { return 'player1Lose'; }
}

let player1Score = 0;
let player2Score = 0;
let lastPlayer1Score = 0;
let lastPlayer2Score = 0;

const buttons = document.querySelectorAll('button');


const announcement1 = document.createElement('p');
const announcement2 = document.createElement('p');
const announcement3 = document.createElement('h4');
const resetButton = document.createElement('button');
resetButton.classList.add('reset');
const announcementContainer = document.getElementById('announcement')



buttons.forEach(button => { 
    button.addEventListener('click', playRound);
});

function playRound(button) {
    
        lastPlayer1Score = player1Score;
        lastPlayer2Score = player2Score;
        const player2Selection = computerPlay();
        const player1Selection = button.target.id;
        const result = compare(player1Selection.toLowerCase(), player2Selection);
        let message = 'It\'s a draw';
         
        if (result==='player1Win') {
            player1Score += 1;
            message = 'You win! ' + player1Selection + ' beats ' + player2Selection;
        } else if (result==='player1Lose') {
            player2Score += 1;
            message = 'You Lose! ' + player2Selection + ' beats ' + player1Selection;
        }
        
        announcement1.textContent = 'player = ' + player1Selection;
        announcement2.textContent = 'computer = ' + player2Selection;
        announcement3.textContent = message;
        announcementContainer.appendChild(announcement1);
        announcementContainer.appendChild(announcement2);
        announcementContainer.appendChild(announcement3);
        
        displayScore();        
        checkGameEnd(player1Score, player2Score);    
    }
    


function displayScore() {
    const playerScore = document.getElementById('player1Score');
    const compScore = document.getElementById('player2Score');
    playerScore.textContent = 'Player: ' + player1Score;
    compScore.textContent = 'Computer: ' + player2Score;

    if(lastPlayer1Score<player1Score) { playerScore.style.color = 'Red'; }
    else { playerScore.style.color = 'blue'; }

    if(lastPlayer2Score<player2Score) { compScore.style.color = 'Red'; }
    else { compScore.style.color = 'blue'; }
}

function checkGameEnd(score1, score2) {
    
    if ((score1===5) || (score2===5)) {

        announcement3.textContent = finalResult(player1Score, player2Score);
        resetButton.textContent = 'Play Again';
        announcementContainer.appendChild(resetButton);

        console.log(finalResult(player1Score, player2Score));
        console.log('END OF GAME');
        buttons.forEach(button => { 
            button.removeEventListener('click', playRound);
            button.classList.add('disabled');
        });
        resetButton.addEventListener('click', resetGame);

        player1Score = 0;
        player2Score = 0;
    }
}

function resetGame() { 
    announcementContainer.removeChild(resetButton);
    announcementContainer.removeChild(announcement1);
    announcementContainer.removeChild(announcement2);
    announcementContainer.removeChild(announcement3);

    buttons.forEach(button => {
        button.addEventListener('click', playRound);
            button.classList.remove('disabled');
    });
    displayScore(); 
    
}

function finalResult(player1Score, player2Score) {
    if (player1Score > player2Score) { return 'Player Wins the game!!!';  }
    else if (player1Score < player2Score) { return 'The computer Wins the game'; }
    else { return 'It\'s a Draw'; } 
}
