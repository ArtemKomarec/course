const container = document.querySelector('#container');
const images = container.querySelectorAll('img');
let diffMouseMinusImgX = 0;
let diffMouseMinusImgY = 0;
let currElem;
window.addEventListener('load', start);

function start() {
    for (let elem of images) {
        const position = getElementPos(elem);
        elem.style.left = Math.floor(Math.random()*300) + 'px';
        elem.style.top = Math.floor(Math.random()*300) + 'px';
        elem.style.width= '70px'
        elem.addEventListener('mousedown', mousedown);
        elem.addEventListener('mouseup', mouseup);
    }

}

function getElementPos(elem) {
    const bbox = elem.getBoundingClientRect();
    return {
      left: bbox.left + window.pageXOffset,
      top: bbox.top + window.pageYOffset
    };
}

function mousedown (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    currElem = EO.target;
    const position = getElementPos(currElem);
    diffMouseMinusImgX = EO.pageX - position.left;
    diffMouseMinusImgY = EO.pageY - position.top;
    container.appendChild(currElem);
    currElem.style.cursor = 'pointer';
    window.addEventListener('mousemove', mousemove);
}

function mouseup (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    window.removeEventListener('mousemove', mousemove);
    currElem.style.cursor = 'auto';
}

function mousemove (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    currElem.style.left = (EO.pageX - diffMouseMinusImgX) + 'px';
    currElem.style.top = (EO.pageY - diffMouseMinusImgY) + 'px';
}
