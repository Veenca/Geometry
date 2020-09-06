
let figureInput = document.getElementById('figureSelection');
let useless = document.getElementById('height_span');
undobtn = document.getElementById('undobtn')
let undo = false;

function checkValue(radios) {

    for (let j = 0, length = radios.length; j < length; j++) {
        if (radios[j].checked) {
            // do whatever you want with the checked radio
            return radios[j].value
            // only one radio can be logically checked, don't check the rest

        }
    }
}
function onInput() {

    let idk;
    useless = document.getElementById('height_span');
    idk = checkValue(document.getElementsByName('figure'));

    if (idk == 'Square') {

        useless.setAttribute('class', 'useless');
    }
    else {
        if (useless.hasAttribute('class')) {
            useless.removeAttribute('class');
        }
    }

}
function undoelmt() {
    if (undo == false) {
        undo = true;
        undobtn.setAttribute('class', 'clicked');
       
    } else if (undo == true) {
        undo = false;
        undobtn.removeAttribute('class');
    }
    console.log(undo);
    
}

figureInput.addEventListener('click', onInput, false);

undobtn.addEventListener('click', undoelmt, false);
let div = document.getElementById('drawingPanel');

let drawings = [];
let canvas;
function setup() {
    canvas = createCanvas(div.offsetWidth, div.offsetHeight);
    canvas.parent('drawingPanel');


}
let i = 0;
let b;
let x;
let y;
function mousePressed() {

    var e = window.event;
    var posX = e.clientX;
    var posY = e.clientY;
    let isclicking = findpoint((div.offsetWidth + div.offsetLeft), div.offsetLeft, div.offsetTop, (div.offsetHeight + div.offsetTop), posX, posY);


    if (undo == false && isclicking == true) {
        let c = color(document.getElementById('fg_RedValue').value, document.getElementById('fg_GreenValue').value, document.getElementById('fg_BlueValue').value);

        switch (checkValue(document.getElementsByName('figure'))) {
            case 'Square':
                b = new Rectangle(mouseX - (document.getElementById('baseValue').value / 2), mouseY - (document.getElementById('baseValue').value / 2), document.getElementById('baseValue').value, document.getElementById('baseValue').value, c);
                break;
            case 'Rectangle':
                b = new Rectangle(mouseX - (document.getElementById('baseValue').value / 2), mouseY - (document.getElementById('heightValue').value / 2), document.getElementById('baseValue').value, document.getElementById('heightValue').value, c);
                break;
            case 'Ellipse':
                b = new Ellipse(mouseX, mouseY, document.getElementById('baseValue').value, document.getElementById('heightValue').value, c);
                break;
        }
        drawings.push(b);
        console.log(drawings.length)
        

    }else if(undo==true && isclicking == true){
        console.log('ok');
        for(let i=0;i<drawings.length;i++){
         if(drawings[i].contains(mouseX,mouseY)){
            drawings.splice(i,1);
             
         }
        
         
           } 
    }
}
    



function draw() {

    background(document.getElementById('bg_RedValue').value, document.getElementById('bg_GreenValue').value, document.getElementById('bg_BlueValue').value);
    //let asd=checkValue(document.getElementsByName('figure'));

    for (i = 0; i < drawings.length; i++) {
        drawings[i].show();


    }

    let c = color(document.getElementById('fg_RedValue').value, document.getElementById('fg_GreenValue').value, document.getElementById('fg_BlueValue').value);
    fill(c);
    div.style.cursor = 'pointer';
    if(undo==false){
    switch (checkValue(document.getElementsByName('figure'))) {
        case 'Square':

            rect(mouseX - (document.getElementById('baseValue').value / 2), mouseY - (document.getElementById('baseValue').value / 2), document.getElementById('baseValue').value, document.getElementById('baseValue').value);
            break;
        case 'Rectangle':
            rect(mouseX - (document.getElementById('baseValue').value / 2), mouseY - (document.getElementById('heightValue').value / 2), document.getElementById('baseValue').value, document.getElementById('heightValue').value);
            break;
        case 'Ellipse':
            ellipse(mouseX, mouseY, document.getElementById('baseValue').value, document.getElementById('heightValue').value);
            break;
    }
    if(undo==true){
        div.style.cursor = 'crossair';
    }
}

}
class Rectangle {

    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = c
    }
    show() {
        stroke(0);
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
    contains(px,py){

        let offw=(this.w*1)+this.x;
        let offleft=this.x;
        let offh=(this.h*1)+this.y;
        let offtop=this.y;
      
      return findpoint(offw,offleft,offtop,offh,px,py);
      
    
    }


}
class Ellipse {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = c
    }

    show() {
        stroke(0);
        fill(this.color);
        ellipse(this.x, this.y, this.w, this.h);
    }

}

function findpoint(x1, x2, y1, y2, x, y) {
    

    if (x <= x1 && x >= x2 &&
        y >= y1 && y <= y2) {
        return true;
    }
    else {

        return false;
    }
}
