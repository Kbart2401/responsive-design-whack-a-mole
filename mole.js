window.addEventListener("DOMContentLoaded", () => {
    let heads = document.querySelectorAll('.wgs__mole-head');
    let count = 30;
    let score = 0;
    setTimeout(popUpRandomMole, 0);

    function popUpRandomMole() {
        count--;
        if (count === 0) {
            let end = document.getElementById("game-over");
            end.innerHTML = "Game Over";
        }
        const random = Math.floor(Math.random() * 7.9);
        let currHead = heads[random];
        if (currHead === undefined) popUpRandomMole();
        currHead.classList.remove('wgs__mole-head--hidden')
        setTimeout(hideMole, 1000, currHead);
    }

    function hideMole(ele) {
        ele.classList.add('wgs__mole-head--hidden');
        setTimeout(popUpRandomMole, 1000);
    }

    Array.from(heads).forEach((head) => {
        head.addEventListener("click", event => {
            event.target.classList.add('wgs__mole-head--hidden');
            event.target.classList.add('wgs__mole-head--whacked');
        })
    })


})