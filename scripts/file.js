
let figureInput = document.getElementById('inputFigure');
let btn = document.getElementById('btn');
let useless = document.getElementById('height_span');
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
            figureInput.value='';
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

function setup() {
    let canvas = createCanvas(document.getElementById('drawingPanel').offsetWidth, document.getElementById('drawingPanel').offsetHeight);
    canvas.parent('drawingPanel');
    
    background(220);
}

function draw() {

    if (beenClicked === true) {
        fill(255);
        switch(value){
            case 'Square':
                if (mouseIsPressed) {
                rect(mouseX-(width/2), mouseY-(width/2), width, width);
                }
            break;
            case 'Rectangle':
                if (mouseIsPressed) {
                    rect(mouseX, mouseY, width, height);
                    }
            break;
            case 'Ellipse':
                if (mouseIsPressed) {
                    ellipse(mouseX, mouseY, width, height);
                    }
            break;
        }
         

    }
}

