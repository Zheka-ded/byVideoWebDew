document.querySelector(`.slider-leftSliderPage`).onclick = sliderLeft;
let left = 0;

function sliderLeft () {
    let line = document.querySelector(`.lineSliderPage`);
    left = left - 120;

    if(left < -360) {
        left = 0;
    }

    line.style.left = left + `px`;
};