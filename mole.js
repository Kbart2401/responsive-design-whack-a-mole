function popUpRandomMole() {
    let heads = document.querySelectorAll('.wgs__mole-head');
    const random = Math.floor(Math.random() * 7.9);
    let currHead = heads[random];
    currHead.classList.remove('wgs__mole-head--hidden')
    setTimeout(hideMole, 1000);
}

