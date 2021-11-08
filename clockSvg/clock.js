class Clock {
    constructor() { }

    setClockPosition() {
        bigCircleForWatch = document.createElementNS(xmlnsOfSvg, "circle");
        bigCircleForWatch.setAttribute("cx", bigCircleCX);
        bigCircleForWatch.setAttribute("cy", bigCircleCY);
        bigCircleForWatch.setAttribute("r", bigCircleRadius);
        bigCircleForWatch.setAttribute("fill", bigCircleColor);
        svg.appendChild(bigCircleForWatch);

        svgCenterX = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width / 2; 
        svgCenterY = svg.getBoundingClientRect().top + svg.getBoundingClientRect().height / 2; 
    }
    createHours() {
        for (var i = 1; i <= hourDigits; i++) {
            let svgChildElem = document.createElementNS(xmlnsOfSvg, "circle");
            let svgChildElemText = document.createElementNS(xmlnsOfSvg, "text");
            let smallCircleCX;
            let smallCircleCY;
            let smallCircleRadius = 20;
            const smallCircleColor = "#48B382";
            angleValue += distanceOfDigits;
            angle = angleValue / 180 * Math.PI;
            smallCircleCX = Math.round(svgCenterX + radius * Math.sin(angle) - svg.getBoundingClientRect().left);
            smallCircleCY = Math.round(svgCenterY - radius * Math.cos(angle) - svg.getBoundingClientRect().top);
            svgChildElem.setAttribute("cx", smallCircleCX);
            svgChildElem.setAttribute("cy", smallCircleCY);
            svgChildElem.setAttribute("r", smallCircleRadius);
            svgChildElem.setAttribute("fill", smallCircleColor);
            svgChildElem = svg.appendChild(svgChildElem);
            svgChildElemText.innerHTML = i;
            svgChildElemText.setAttribute("x", smallCircleCX);
            svgChildElemText.setAttribute("y", smallCircleCY);
            svgChildElemText.setAttribute("text-anchor", "middle");
            svgChildElemText.setAttribute("dominant-baseline", "central");
            svgChildElemText.style.fontSize = 20;
            svgChildElemText = svg.appendChild(svgChildElemText);
        }
    }
    setDigitalWatch() {
        svgChildElemForDigitalWatch = document.createElementNS(xmlnsOfSvg, "rect");
        svgChildElemForDigitalWatch.setAttribute("x", (svgCenterX - svgChildElemForDigitalWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
        svgChildElemForDigitalWatch.setAttribute("y", (svgCenterY - radiusForDigitalWatch) - svg.getBoundingClientRect().left);
        svgChildElemForDigitalWatch.setAttribute("fill", "none");
        svg.appendChild(svgChildElemForDigitalWatch);

    }
    setDigitalWatchText() {
        svgChildElemForDigitalWatchText = document.createElementNS(xmlnsOfSvg, "text");
        svgChildElemForDigitalWatchText.setAttribute("x", (svgCenterX - svgChildElemForDigitalWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
        svgChildElemForDigitalWatchText.setAttribute("y", (svgCenterY - radiusForDigitalWatch) - svg.getBoundingClientRect().top);
        svgChildElemForDigitalWatchText.setAttribute("text-anchor", "middle");
        svgChildElemForDigitalWatchText.setAttribute("dominant-baseline", "central");
        svgChildElemForDigitalWatchText.style.fontSize = 25;
        svgChildElemForDigitalWatchText = svg.appendChild(svgChildElemForDigitalWatchText);
    }
    setHourArrow() {
        elemForArrowHours = document.createElementNS(xmlnsOfSvg, "line");
        elemForArrowHours.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
        elemForArrowHours.setAttribute("y1", svgCenterY - elemForArrowHoursHeight - svg.getBoundingClientRect().top);
        elemForArrowHours.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
        elemForArrowHours.setAttribute("y2", svgCenterY);
        elemForArrowHours.setAttribute("stroke", "black");
        elemForArrowHours.setAttribute("stroke-width", elemForArrowHoursWidth);
        elemForArrowHours.setAttribute("stroke-linecap", "round");
        elemForArrowHours.style.transformOrigin = "center 150px";
        svg.appendChild(elemForArrowHours);
    }
    setMinuteArrow() {
        elemForArrowMinutes = document.createElementNS(xmlnsOfSvg, "line");
        elemForArrowMinutes.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
        elemForArrowMinutes.setAttribute("y1", svgCenterY - elemForArrowMinutesHeight - svg.getBoundingClientRect().top);
        elemForArrowMinutes.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
        elemForArrowMinutes.setAttribute("y2", svgCenterY);
        elemForArrowMinutes.setAttribute("stroke", "black");
        elemForArrowMinutes.setAttribute("stroke-width", elemForArrowMinutesWidth);
        elemForArrowMinutes.setAttribute("stroke-linecap", "round");
        elemForArrowMinutes.style.transformOrigin = "center 150px";
        svg.appendChild(elemForArrowMinutes);
    }
    setSecondArrow() {
        elemForArrowSeconds = document.createElementNS(xmlnsOfSvg, "line");
        elemForArrowSeconds.setAttribute("x1", svgCenterX - svg.getBoundingClientRect().left);
        elemForArrowSeconds.setAttribute("y1", svgCenterY - elemForArrowSecondsHeight - svg.getBoundingClientRect().top);
        elemForArrowSeconds.setAttribute("x2", svgCenterX - svg.getBoundingClientRect().left);
        elemForArrowSeconds.setAttribute("y2", svgCenterY);
        elemForArrowSeconds.setAttribute("stroke", "red");
        elemForArrowSeconds.setAttribute("stroke-width", elemForArrowSecondsWidth);
        elemForArrowSeconds.setAttribute("stroke-linecap", "round");
        elemForArrowSeconds.style.transformOrigin = "center 150px";
        svg.appendChild(elemForArrowSeconds);
    }
    arrows() {
        var time = new Date();
        svgChildElemForDigitalWatchText.innerHTML = time.toLocaleTimeString();
        secondsDeg += 6; 
        elemForArrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";
        minutesDeg += 6 * (1 / 60); 
        elemForArrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";
        hoursDeg += 6 * (1 / 360); 
        elemForArrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
    }
}

var svg = document.getElementById("wrapper");
const widthOfSvg = 300;
const heightOfSvg = 300;
const xmlnsOfSvg = 'http://www.w3.org/2000/svg';
let svgCenterX;
let svgCenterY;
let bigCircleForWatch; 
const bigCircleCX = 150;
const bigCircleCY = 150; 
const bigCircleRadius = 150; 
const bigCircleColor = "#FCCA66";
let svgChildElemForDigitalWatch;
let svgChildElemForDigitalWatchText;
let radiusForDigitalWatch = 70; 
let radius = 120; 
let angleValue = 0; 
const distanceOfDigits = 30; 
let time = new Date();
let elemForArrowHours;
let elemForArrowHoursHeight = 50;
let elemForArrowHoursWidth = 9;
let elemForArrowMinutes;
let elemForArrowMinutesHeight = 110;
let elemForArrowMinutesWidth = 5;
let elemForArrowSeconds;
let elemForArrowSecondsHeight = 135;
let elemForArrowSecondsWidth = 2;
let hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
let minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
let secondsDeg = 6 * time.getSeconds() - 6;
let hourDigits = 12;
let clock = new Clock;
svg.style.width = widthOfSvg;
svg.style.height = heightOfSvg;
svg.style.xmlns = xmlnsOfSvg;
clock.setClockPosition();
clock.createHours();
clock.setDigitalWatch();
clock.setDigitalWatchText();
clock.setHourArrow();
clock.setMinuteArrow();
clock.setSecondArrow();
window.onload = clock.arrows();
window.setInterval(clock.arrows, 1000);