window.addEventListener("DOMContentLoaded", () => {
    /*******GLOBAL VARIABLES********/
    let heads = document.querySelectorAll('.wgs__mole-head');
    let count = 30;
    let score = 0;
    let NAME;


    /************FUNCTIONS*************/
    function popUpRandomMole() {
        count--;
        document.getElementById('moles').innerHTML = `Moles ${count}`;
        if (count === 0) {
            let end = document.getElementById("game-over");
            end.innerHTML = "Game Over!";
            setHighScore();
            showHighScore();
            return;
        }
        const random = Math.floor(Math.random() * 15.9);
        let currHead = heads[random];
        currHead.classList.remove('wgs__mole-head--hidden')
        setTimeout(hideMole, 20, currHead);
    }

    function hideMole(ele) {
        ele.classList.add('wgs__mole-head--hidden');
        setTimeout(popUpRandomMole, 20);
    }

    function showHighScore() {
        debugger;
        document.querySelector('.high-score').classList.remove('hidden');
        let scores = Object.entries(localStorage)
            .sort((a, b) => b[1] - a[1]);
        if(scores.length > 10) scores = scores.slice(0, 10);
        scores.forEach(score => {
            document.querySelector('ol').innerHTML +=
                `<li>${score[0]}: ${score[1]}</li>`
        })
    }


    function setHighScore() {
        localStorage.setItem(NAME, score);
    }

    function startGame() {
        setTimeout(popUpRandomMole, 0);
    }

    /**********EVENT LISTENERS*************/
    document.querySelector('.form-input')
        .addEventListener('submit', event => {
            // debugger;
            event.preventDefault();
            document.querySelector('.form')
                .classList.add('hidden');

            NAME = document.querySelector('.form-input').name.value;
            document.getElementById('score').innerHTML = `${NAME}'s Score: ${score}`;
            startGame();
        })


    Array.from(heads).forEach((head) => {
        head.addEventListener("click", event => {
            score++;
            event.target.classList.add('wgs__mole-head--hidden');
            document.getElementById('score').innerHTML = `${NAME}'s Score: ${score}`;
        })
    })
})