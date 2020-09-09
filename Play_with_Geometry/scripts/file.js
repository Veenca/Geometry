
let figureInput = document.getElementById('figureSelection');
let useless = document.getElementById('height_span');
undobtn = document.getElementById('undobtn')
let undo = false;
let beenClicked = false;
goBackBtn = document.getElementById('goBackBtn');
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
    //   console.log(undo); //DEBUG

}
let drawings = [];
figureInput.addEventListener('click', onInput, false);

undobtn.addEventListener('click', undoelmt, false);
goBackBtn.addEventListener('click', goback, false);
function goback() {
    if (drawings.length >= 0) {
        drawings.pop();
    }

}

let div = document.getElementById('drawingPanel');


let canvas;
function setup() {
    canvas = createCanvas(div.offsetWidth, div.offsetHeight);
    canvas.parent('drawingPanel');

}
let i = 0;
let b;
let x;
let y;
let fg_Red=document.getElementById('fg_RedValue');
let fg_Green=document.getElementById('fg_GreenValue');
let fg_Blue=document.getElementById('fg_BlueValue');

function mousePressed() {
  
    var e = window.event;
    var posX = e.clientX;
    var posY = e.clientY;
    let isclicking = findpoint((div.offsetWidth + div.offsetLeft), div.offsetLeft, div.offsetTop, (div.offsetHeight + div.offsetTop), posX, posY);


    if (undo == false && isclicking == true && beenClicked == false) {
      let c= color(fg_Red.value, fg_Green.value,fg_Blue.value);

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
        //    console.log(drawings.length)// DEBUG

<<<<<<< HEAD
    }else if(undo==true && isclicking == true){
        console.log('ok');
        for(let i=0;i<drawings.length;i++){
         if(drawings[i].contains(mouseX,mouseY)){
            drawings.splice(i,1);
             
         }
        
         
           } 
    }
}
    


=======

    } else if (undo == true && isclicking == true) {
        //  console.log('ok'); // DEBUG
        for (let i = 0; i < drawings.length; i++) {

            if (drawings[i].contains(mouseX, mouseY)) {
                drawings.splice(i, 1);
                //      console.log(drawings.length); //DEBUG
            }


        }
    }
}
>>>>>>> b540a69... update


function draw() {

    background(document.getElementById('bg_RedValue').value, document.getElementById('bg_GreenValue').value, document.getElementById('bg_BlueValue').value);


    for (i = 0; i < drawings.length; i++) {
        drawings[i].show();


    }


   
    let c = color(fg_Red.value, fg_Green.value,fg_Blue.value);
    
    fill(c);
    div.style.cursor = 'pointer';
<<<<<<< HEAD
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
=======
    if (undo == false && beenClicked==false) {
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
>>>>>>> b540a69... update

    }
    if (undo == true) {
        div.style.cursor = 'crosshair';
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
<<<<<<< HEAD
    contains(px,py){

        let offw=(this.w*1)+this.x;
        let offleft=this.x;
        let offh=(this.h*1)+this.y;
        let offtop=this.y;
      
      return findpoint(offw,offleft,offtop,offh,px,py);
      
    
=======
    contains(px, py) {

        let offw = (this.w * 1) + this.x;
        let offleft = this.x;
        let offh = (this.h * 1) + this.y;
        let offtop = this.y;

        return findpoint(offw, offleft, offtop, offh, px, py);


>>>>>>> b540a69... update
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
    contains(px, py) {
        //  console.log(this.x,this.y,this.w,this.h,px,py);
        return findPointEllipse(this.x, this.y, this.w, this.h, px, py);
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

function findPointEllipse(h, k, a, b, x, y) {
    let f1 = Math.pow((x - h), 2);
    let f2 = Math.pow((a / 2), 2);
    let f3 = Math.pow((y - k), 2);
    let f4 = Math.pow((b / 2), 2);

    let p = (f1 / f2) + (f3 / f4);
    if (p <= 1) {
        return true;
    } else { return false; }

}

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: 'rgb(225, 225, 225)',
   

    components: {

        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: true
        }
    }
});
pickr.on('show', (color, instance) => {
  //  console.log('show', color, instance);
    beenClicked=true;
}).on('save', (color, instance) => {
    console.log(color.toRGBA());
    pickr.hide();
    beenClicked=false;
    fg_Blue.value=color.toRGBA()[2];
    fg_Green.value=color.toRGBA()[1];
    fg_Red.value=color.toRGBA()[0];
});