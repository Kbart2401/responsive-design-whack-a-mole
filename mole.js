window.addEventListener("DOMContentLoaded", () => {
    /*******GLOBAL VARIABLES********/
    let NAME;
    let COUNT = 30;
    let score = 0;
    let heads = document.querySelectorAll('.wgs__mole-head');


    /************FUNCTIONS*************/
    function popUpRandomMole() {
        COUNT--;
        document.getElementById('moles').innerHTML = `Moles ${COUNT}`;
        if (COUNT === 0) {
            let end = document.getElementById("game-over");
            end.innerHTML = "Game Over!";
            setHighScore();
            showHighScore();
            return;
        }
        const random = Math.floor(Math.random() * 15.9);
        let currHead = heads[random];
        currHead.classList.remove('wgs__mole-head--hidden')
        setTimeout(hideMole, 900, currHead);
    }

    function hideMole(ele) {
        ele.classList.add('wgs__mole-head--hidden');
        setTimeout(popUpRandomMole, 900);
    }

    function showHighScore() {
        document.querySelector('.high-score').classList.remove('hidden');
        let scores = Object.entries(localStorage)
            .sort((a, b) => b[1] - a[1]);
        if (scores.length > 10) scores = scores.slice(0, 10);
        scores.forEach(score => {
            document.querySelector('ol').innerHTML +=
                `<li>${score[0]}: ${score[1]}</li>`
        })
    }

    function setHighScore() {
        localStorage.setItem(NAME, score);
    }

    function hideWelcomeScreen() {
        document.querySelector('.form')
            .classList.add('hidden');
    }
    // function setDifficulty()

    function startGame() {
        setTimeout(popUpRandomMole, 0);
    }

    /**********EVENT LISTENERS*************/
    //Pressing start button
    document.querySelector('.form-input')
        .addEventListener('submit', event => {
            event.preventDefault();
            hideWelcomeScreen();

            NAME = document.querySelector('.form-input').name.value;
            document.getElementById('score').innerHTML = `${NAME}'s Score: ${score}`;
            startGame();
        })
    //Pressing high scores button
    document.querySelector('.high-scores-button')
        .addEventListener('click', event => {
            showHighScore();
        })
    //Pressing Main menu button
    document.querySelector('.main-menu')
        .addEventListener('click', event => {
            document.querySelector('.high-score').classList.add('hidden');
            document.querySelector('.form').classList.remove('hidden');
            document.querySelector('ol').innerHTML = ""
            document.getElementById("game-over").innerHTML = "";
            COUNT = 30;
            score = 0;
        })
    //Clicking on mole targets
    Array.from(heads).forEach((head) => {
        head.addEventListener("click", event => {
            score++;
            event.target.classList.add('wgs__mole-head--hidden');
            document.getElementById('score').innerHTML = `${NAME}'s Score: ${score}`;
        })
    })
})