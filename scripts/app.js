function computerPlay() {
	let sign = Math.floor(Math.random() * 3);
	switch (sign) {
		case 0:
			return 'scissors';
			break;
		case 1: 
			return 'rock';
			break
		default:
			return 'paper';("scissors", computerPlay)
		}
}


events = document.getElementById('events')


function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	if (playerSelection === computerSelection) {
		events.innerHTML = `Draw! Both players choose ${playerSelection}`
		return 2;
	} else {
		switch(playerSelection) {
			case 'SCISSORS':
				switch(computerSelection) {
					case 'ROCK':
						events.innerHTML = 'You Lose! Rocks beats Scissors';
						return 0;
						break;
					default:
						console.log(playerSelection);
						events.innerHTML = 'You Win! Scissors beats Paper';
						return 1;
				}
				break;
			case 'PAPER':
				switch(computerSelection) {
                        case 'ROCK':
							 events.innerHTML = 'You Win! Paper beats Rock';
							 return 1;
							 break;
                		default:
							events.innerHTML = 'You Lose! Scissors beats Paper';
							return 0;
				}
				break;

			case 'ROCK':
				switch(computerSelection) {
					case 'PAPER':
						events.innerHTML = 'You Lose! Paper beats Rock';
						return 0;
						break;
                    default:
						events.innerHTML= 'You Win! Rock beats Scissors';
						return 1;

				}
				break;
		}
	}
}

let compScore = 0;
let playerScore = 0;
yourScore = document.getElementById('yourScore');
aiScore = document.getElementById('aiScore');

function game(playerChoice, comChoice, score) {
	if (score < 5) {
		let outcome = playRound(playerChoice, comChoice);
		if (outcome == 1) {  // when player winds
			playerScore++
			yourScore.innerHTML = playerScore;
		} else if (outcome === 0) {
				compScore++
				aiScore.innerHTML = compScore;
		} else { // draw
		}
	} else {
		// game over
	}
	
}

function resetScore() {
	console.log('resetting...')
	playerScore = 0;
	compScore = 0;
}


rockChoose = document.getElementById('rock');
paperChoose = document.getElementById('paper');
scissorsChoose = document.getElementById('scissors');
reset = document.getElementById('reset');

rockChoose.addEventListener('click', () => {console.log('OK');
	game('rock', computerPlay(), Math.max(playerScore, compScore));
});
paperChoose.addEventListener('click', () => {
	game('paper', computerPlay(), Math.max(playerScore, compScore));
});
scissorsChoose.addEventListener('click', () => {
	game('scissors', computerPlay(), Math.max(playerScore, compScore));
});

reset.addEventListener('click', () => resetScore());

#Code is due to GitHub user orzymandias
