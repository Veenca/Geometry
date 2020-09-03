
let figureInput = document.getElementById('inputFigure');
let btn = document.getElementById('btn');
let useless = document.getElementById('height_span');
undobtn=document.getElementById('undobtn')
console.log(undobtn);
let value;
let options
let width;
let height;
let beenClicked = false;
function onClick() {
    value = figureInput.value;

    options = document.getElementById("figureName").childNodes;
    width = document.getElementById('baseValue').value;

    console.log(width);
    if (!useless.hasAttribute('class')) {
        height = document.getElementById('heightValue').value;
        console.log(height);
    }

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {

            console.log(options[i].value);
            beenClicked = true;
            figureInput.value = '';
            break;
        }
    }
}
function onInput() {
    let value = figureInput.value;
    useless = document.getElementById('height_span');

    if (value === 'Square') {

        useless.setAttribute('class', 'useless');
    }
    else {
        if (useless.hasAttribute('class')) {
            useless.removeAttribute('class');
        }
    }

}
figureInput.addEventListener('input', onInput, false);
btn.addEventListener('click', onClick, false);
let drawings = [];
function setup() {
    let canvas = createCanvas(document.getElementById('drawingPanel').offsetWidth, document.getElementById('drawingPanel').offsetHeight);
    canvas.parent('drawingPanel');

    background(220);
}
let i = 0;
let b;
function draw() {

    if (beenClicked === true) {
        fill(255);
        if (mouseIsPressed) {
            switch (value) {
                case 'Square':

                    b = new Rectangle(mouseX - (width / 2), mouseY-(width/2), width, width);
                    drawings.push(b);
                    drawings[i].show();
                    i++;
                  

                    break;
                case 'Rectangle':

                    
                    b = new Rectangle(mouseX - (width / 2), mouseY-(height/2), width, height);
                    drawings.push(b);
                    drawings[i].show();
                    i++;
                  

                    break;
                case 'Ellipse':

                    b = new Ellipse(mouseX, mouseY, width, height);
                    drawings.push(b);
                    drawings[i].show();
                    i++;
                   

                    break;
            }

        }
    }
}
class Rectangle {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    show() {
        stroke(0);
        fill(225);
        rect(this.x, this.y, this.w, this.h);
    }
}
class Square {

}
class Ellipse {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    show() {
        stroke(0);
        fill(225);
        ellipse(this.x, this.y, this.w, this.h);
    }
}

