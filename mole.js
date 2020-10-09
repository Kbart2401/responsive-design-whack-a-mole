window.addEventListener("DOMContentLoaded", () => {
    let heads = document.querySelectorAll('.wgs__mole-head');
    let count = 30;
    let score = 0;

    setTimeout(popUpRandomMole, 0);

    /************FUNCTIONS*************/
    function popUpRandomMole() {
        count--;
        document.getElementById('moles').innerHTML = `Moles ${count}`;
        if (count === 0) {
            let end = document.getElementById("game-over");
            end.innerHTML = "Game Over!";
            return;
        }
        const random = Math.floor(Math.random() * 15.9);
        let currHead = heads[random];
        if (currHead === undefined) popUpRandomMole();
        currHead.classList.remove('wgs__mole-head--hidden')
        setTimeout(hideMole, 900, currHead);
    }

    function hideMole(ele) {
        ele.classList.add('wgs__mole-head--hidden');
        setTimeout(popUpRandomMole, 1000);
    }


    /**********EVENT LISTENERS*************/
    document.querySelector('.form-input')
        .addEventListener('submit', event => {
            document.querySelector('.form')
                .classList.add('hidden');
                event.preventDefault();
        })


    Array.from(heads).forEach((head) => {
        head.addEventListener("click", event => {
            score++;
            event.target.classList.add('wgs__mole-head--hidden');
            document.getElementById('score').innerHTML = `Score ${score}`;
        })
    })


})