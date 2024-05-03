// complete logic of game inside func

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    // func to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [ rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissor'];

        // func to start the game
        playerOptions.forEach( option => {
            option.addEventListener( 'click', function () {
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3 );
                const computerChoice = computerOptions[choiceNumber];

                // func check who wins
                winner(this.innerText, computerChoice);
                // console.log('me: ' + this.innerText);
                // console.log('pc: ' + computerChoice);
                // calling gameOver after 10 moves
                if(moves == 10){
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }

    // func decide winner
    const winner = (player, computer) => {
        
        const result = document.querySelector('.result');
        
        const playerScoreBoard = document.querySelector('.p-count');
        
        const computerScoreBoard = document.querySelector('.c-count');

        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if( player === computer) {
            result.textContent = 'Tie';
        }
        else if( player == 'rock'){
            if( computer == 'paper'){
                result.textContent = 'computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if( player == 'scissor'){
            if( computer == 'rock'){
                result.textContent = 'computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if( player == 'paper'){
            if( computer == 'scissor'){
                result.textContent = 'computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    //func to run when game over
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseMove.innerHTML = 'game over';
        movesLeft.style.display = 'none';

        if( playerScore > computerScore ){
            result.style.fontSize = '2rem';
            result.innerText = 'you won the game';
            result.style.color = '#308D46';
        }else if( playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'you lost the game';
            result.style.color = 'red';
        }else{
            result.style.fontSize = '2rem';
            result.innerText = 'tie';
            result.style.color = 'grey';
        }

        reloadBtn.innerText = 'restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', ()=> {
            window.location.reload();
        })
    }

    // calling playGame inside game
    playGame();
}

// calling game func
game();