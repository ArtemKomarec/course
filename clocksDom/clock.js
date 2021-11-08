const diameter = document.getElementById('getDiameter');



class Clock {
    constructor() {

    }

    createHours() {
        for (var i = 1; i <= hourDigits; i++) {
            let wrapChildElem = document.createElement("div");
            let angle;
            let wrapChildElemCenterX;
            let wrapChildElemCenterY;

            angleValue += distanceOfDigits;
            angle = angleValue / 180 * Math.PI;

            wrapChildElem = wrap.appendChild(wrapChildElem);
            wrapChildElem.classList.add('childElem');
            wrapChildElem.innerHTML = i;

            wrapChildElemCenterX = wrapCenterX + radius * Math.sin(angle);
            wrapChildElemCenterY = wrapCenterY - radius * Math.cos(angle);

            wrapChildElem.style.left = Math.round(wrapChildElemCenterX - wrapChildElem.offsetWidth / 2) + "px";
            wrapChildElem.style.top = Math.round(wrapChildElemCenterY - wrapChildElem.offsetHeight / 2) + "px";
        }
    }

    setClass() {
        wrapChildElemForDigitalWatch = wrap.appendChild(wrapChildElemForDigitalWatch);
        elemForArrowHours = wrap.appendChild(elemForArrowHours);
        elemForArrowMinutes = wrap.appendChild(elemForArrowMinutes);
        elemForArrowSeconds = wrap.appendChild(elemForArrowSeconds);

        wrapChildElemForDigitalWatch.classList.add("childElemForDigitalWatch");
        elemForArrowHours.classList.add("elemForArrowHours");
        elemForArrowMinutes.classList.add("elemForArrowMinutes");
        elemForArrowSeconds.classList.add("elemForArrowSeconds");
    }

    elemPosotion() {
        wrapChildElemForDigitalWatch.style.left = wrapCenterX - wrapChildElemForDigitalWatch.offsetWidth / 2 + "px";
        wrapChildElemForDigitalWatch.style.top = wrapCenterY - radiusForDigitalWatch + "px";
        elemForArrowHours.style.top = wrapCenterY - elemForArrowHours.offsetHeight + 10 + "px";
        elemForArrowHours.style.left = wrapCenterX - elemForArrowHours.offsetWidth / 2 + "px";
        elemForArrowMinutes.style.top = wrapCenterY - elemForArrowMinutes.offsetHeight + 10 + "px";
        elemForArrowMinutes.style.left = wrapCenterX - elemForArrowMinutes.offsetWidth / 2 + "px";
        elemForArrowSeconds.style.top = wrapCenterY - elemForArrowSeconds.offsetHeight + 10 + "px";
        elemForArrowSeconds.style.left = wrapCenterX - elemForArrowSeconds.offsetWidth / 2 + "px";
        elemForArrowHours.style.transformOrigin = "center 50px";
        elemForArrowMinutes.style.transformOrigin = "center 110px";
        elemForArrowSeconds.style.transformOrigin = "center 135px";
    }

    arrows() {
        var time = new Date(); 
        wrapChildElemForDigitalWatch.innerHTML = time.toLocaleTimeString();
        secondsDeg += 6; 
        elemForArrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";
        minutesDeg += 6 * (1 / 60); 
        elemForArrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";
        hoursDeg += 6 * (1 / 360); 
        elemForArrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
    }
}



const wrap = document.getElementById('wrapper');

let wrapCenterX = wrap.offsetLeft + wrap.offsetWidth / 2; 
let wrapCenterY = wrap.offsetTop + wrap.offsetHeight / 2; 
let wrapChildElemForDigitalWatch = document.createElement("div");
const radius = 120; 
const radiusForDigitalWatch = 70; 
let angleValue = 0;
const distanceOfDigits = 30; 
let time = new Date();
let elemForArrowHours = document.createElement("div"); 
let elemForArrowMinutes = document.createElement("div");
let elemForArrowSeconds = document.createElement("div");
let hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
let minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); 
let secondsDeg = 6 * time.getSeconds() - 6;
const hourDigits = 12; 

let clock = new Clock();
clock.createHours();
clock.setClass();
clock.elemPosotion();
window.onload = clock.arrows(); 
window.setInterval(clock.arrows, 1000);

