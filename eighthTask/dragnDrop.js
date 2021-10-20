const field = document.getElementById('container');
const container = Array.from(document.getElementById('container').children);
container.forEach(function (elem, i) {
    container[i].style.position = 'absolute';
    container[i].style.top = Math.floor(Math.random() * 300) + 'px';
    container[i].style.left = Math.floor(Math.random() * 300) + 'px';
    container[i].style.width = '70px';
    container[i].style.borderRadius = "90%";
    container[i].onclick = function (e) {
        document.body.appendChild(container[i]);

        this.onmousedown = function () {
            e.target.style.zIndex = 1000;
            let shiftX = e.clientX - this.getBoundingClientRect().left;
            let shiftY = e.clientY - this.getBoundingClientRect().top;
            moveAt(e.pageX, e.pageY);
            function moveAt(pageX, pageY) {
                e.target.style.left = pageX - shiftX + 'px';
                e.target.style.top = pageY - shiftY + 'px';
            }
            function onMouseMove(e) {
                moveAt(e.pageX, e.pageY);
            }
            document.addEventListener('mousemove', onMouseMove);
            this.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                this.onmouseup = null;
            };
        }
        this.ondragstart = function () {
            return false;
        };
    }
});
//document.addEventListener('mousemove', onMouseMove);
