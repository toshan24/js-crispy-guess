// DOM-based number guessing game
(() => {
    const startBtn = document.getElementById('startBtn');
    const playArea = document.getElementById('playArea');
    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const restartBtn = document.getElementById('restartBtn');
    const feedback = document.getElementById('feedback');
    const attemptsEl = document.getElementById('attempts');

    let randomNumber = null;
    let attempts = 0;
    let playing = false;

    function startGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        playing = true;
        feedback.textContent = 'Game started — make your first guess!';
        attemptsEl.textContent = '';
        playArea.style.display = '';
        guessInput.value = '';
        guessInput.focus();
        console.log('Random number (debug):', randomNumber);
    }

    function endGame(message) {
        playing = false;
        feedback.textContent = message;
        attemptsEl.textContent = `You made ${attempts} attempt${attempts === 1 ? '' : 's'}.`;
    }

    function makeGuess() {
        if (!playing) return;
        const val = parseInt(guessInput.value, 10);
        if (isNaN(val) || val < 1 || val > 100) {
            feedback.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }
        attempts += 1;

        if (val > randomNumber) {
            feedback.textContent = 'Too high, try again.';
        } else if (val < randomNumber) {
            feedback.textContent = 'Too low, try again.';
        } else {
            endGame(`You got it! The number was ${randomNumber}.`);
        }
        attemptsEl.textContent = `Attempts: ${attempts}`;
        guessInput.select();
        guessInput.focus();
    }

    startBtn.addEventListener('click', startGame);
    guessBtn.addEventListener('click', makeGuess);
    guessInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') makeGuess();
    });
    restartBtn.addEventListener('click', () => {
        startGame();
    });

})();
