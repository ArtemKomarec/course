class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this);
    }

    makeStar() {
        const wrapper = document.getElementById('star');
        const star = document.createElementNS("http://www.w3.org/2000/svg", 'polygon')
        star.setAttribute('stroke', 'orange');
        star.setAttribute('fill', 'orange');
        star.setAttribute('stroke-width', '5')
        star.setAttribute('points', '70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41');
        wrapper.appendChild(star);
    }

    makeTriangle() {
        const wrapper = document.getElementById('triangle');
        const triangle = document.createElementNS("http://www.w3.org/2000/svg", 'polygon')
        triangle.setAttribute('stroke', 'green');
        triangle.setAttribute('fill', 'green');
        triangle.setAttribute('points', '5,135 115,5 225,135');
        wrapper.appendChild(triangle);
    }

    makeCircle() {
        const wrapper = document.getElementById('circle');
        const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle')
        circle.setAttribute('stroke', 'red');
        circle.setAttribute('stroke-width', '5')
        circle.setAttribute('fill', 'purple');
        circle.setAttribute('r', '65');
        circle.setAttribute('cx', '70');
        circle.setAttribute('cy', '70');
        circle.setAttribute('stroke-dasharray', '20,10,40,10')
        wrapper.appendChild(circle);
        return 0;
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }
const menu = document.getElementById('menu')
  new Menu(menu);