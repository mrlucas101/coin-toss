let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;

function runGame(x) {

    let playerChoice = x;
    
        let randomNumber = Math.floor(Math.random() * 2) + 1;

        let choiceResult;
        
            if (randomNumber === 1) {
                choiceResult = 'Heads';
            } else {
                choiceResult = 'Tails';
            }

        let gameResult;

            if (playerChoice === choiceResult) {
                gameResult = 'Win';
                gamesWon++;
            } else {
                gameResult = 'Loss';
                gamesLost++;
            };

    gamesPlayed++;

    let prediction = document.getElementById('prediction');
            prediction.innerText = playerChoice;

    let flip = document.getElementById('flip');
            flip.innerText = choiceResult;
    
    let result = document.getElementById('result');
            result.innerText = gameResult;

    let count = document.getElementById('count');
            count.innerText = gamesPlayed;

    let wins = document.getElementById('wins');
            wins.innerText = gamesWon;

    let losses = document.getElementById('losses');
            losses.innerText = gamesLost;

}

function resetGame() {
    let gamesPlayed = 0;
    let gamesWon = 0;
    let gamesLost = 0;

    let count = document.getElementById('count');
            count.innerText = gamesPlayed;

    let wins = document.getElementById('wins');
            wins.innerText = gamesWon;

    let losses = document.getElementById('losses');
            losses.innerText = gamesLost;
}