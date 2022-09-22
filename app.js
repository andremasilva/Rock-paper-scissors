
const game = () => {
    let pScore = 0
    let cScore = 0

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })

    }


    //play match
    const playmatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]
                // here is where i call compare hands

                compareHands(this.textContent, computerChoice)

                //UPDATE Images
                playerHand.src = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }

    const compareHands = (playerChoise, computerChoice) => {
        //update text
        const winner = document.querySelector('.winner');
        //if tie
        if (playerChoise === computerChoice) {
            winner.textContent = 'It is a tie'
            return
        }
        //if rock
        if (playerChoise === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Computer wins';
                cScore++
                updateScore()
                return;
            }
        }

        //paper
        if (playerChoise === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer wins'
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Player wins';
                pScore++
                updateScore()
                return;
            }
        }
        //scissors
        if (playerChoise === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer wins'
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Player wins';
                pScore++
                updateScore()
                return;
            }
        }


    };


    startGame()
    playmatch()
}
//start game Function
game()
