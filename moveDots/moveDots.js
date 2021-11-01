const dot1 = document.querySelector('.dot.red');
const startBtn = document.getElementById('start');

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;
let pos4 = 0;
let checkHorizontal = true;
let checkVertical = false;

let timer;

function moveDots() {
    if (checkHorizontal) {
        if (pos1 <= 300) {
            pos1 += 3;
            dot1.style.left = pos1 + 'px';
            timer = requestAnimationFrame(moveDots);
        }
        else {
            checkVertical = true;
        }
    }
    if (checkVertical) {
        if (pos2 <= 120) {
            pos2 += 3;
            dot1.style.top = pos2 + 'px';
            if (pos2 <= 120) {
                timer = requestAnimationFrame(moveDots);
            }
            else {
                checkHorizontal = false;
            }
        }
    }
    if (!checkHorizontal) {
        if (pos1 >= 1) {
            pos1 -= 3;
            dot1.style.left = pos1 + 'px';
            timer = requestAnimationFrame(moveDots);
        }
        else {
            checkVertical = false;
        }
    }
    if (!checkVertical) {
        if(!checkHorizontal) {
            if (pos2 >= 1) {
                pos2 -= 3;
                dot1.style.top = pos2 + 'px';
                timer = requestAnimationFrame(moveDots);
            }
            else {
                checkHorizontal = true;
                timer = requestAnimationFrame(moveDots);
            }
        }
        
    }
    
}


startBtn.addEventListener('click', moveDots);


function stop() {
    cancelAnimationFrame(timer);
}
