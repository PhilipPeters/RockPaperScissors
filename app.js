
function computerPlay() {
	let sign = Math.floor(Math.random() * 3);
	switch (sign) {
		case 0:
			return 'rock';
			break;
		case 1: 
			return 'paper';
			break
		default:
			return 'scissors';("scissors", computerPlay)
		}
}


events = document.getElementById('events')

"easier to numerate things as we are dealing with relatively long strings, numbers are easier and have built in comparison operators"
function numerate(word) {
  return word.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
	playerSelection = numerate(playerSelection);
	computerSelection = numerate(computerSelection);
	if (playerSelection === computerSelection) {
		events.innerHTML = `Draw! Both players choose ${playerSelection}`
		return 2;
	} else {
		switch(playerSelection) {
			case 1:
				switch(computerSelection) {
					case 2:
						events.innerHTML = 'You Lose! Rocks beats Scissors';
						return 0;
						break;
					default:
						console.log(playerSelection);
						events.innerHTML = 'You Win! Scissors beats Paper';
						return 1;
				}
				break;
			case '3':
				switch(computerSelection) {
                        case '2':
							 events.innerHTML = 'You Win! Paper beats Rock';
							 return 1;
							 break;
                		default:
							events.innerHTML = 'You Lose! Scissors beats Paper';
							return 0;
				}
				break;

			case '2':
				switch(computerSelection) {
					case '3':
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

rockChoose.addEventListener('click', () => {
	game('rock', computerPlay(), Math.max(playerScore, compScore));
});
paperChoose.addEventListener('click', () => {
	game('paper', computerPlay(), Math.max(playerScore, compScore));
});
scissorsChoose.addEventListener('click', () => {
	game('scissors', computerPlay(), Math.max(playerScore, compScore));
});

reset.addEventListener('click', () => resetScore());



#Credit is due to GitHub user orzymandias for most of the code
