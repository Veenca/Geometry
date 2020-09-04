
let figureInput = document.getElementById('figureSelection');
let btn = document.getElementById('btn');
let useless = document.getElementById('height_span');
undobtn=document.getElementById('undobtn')
let undo=false;

let value=null;
let options
let width;
let height;
let beenClicked = false;

function onClick() {
    value = checkValue(document.getElementsByName('figure'));;

   
    width = document.getElementById('baseValue').value;

    console.log(width);
    if (!useless.hasAttribute('class')) {
        height = document.getElementById('heightValue').value;
        console.log(height);
    }
    if(value!=null){
   beenClicked=true;
}
}
function checkValue(radios){
    

    for (let i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
         return radios[i].value
        // only one radio can be logically checked, don't check the rest
        
      }
    }
}
function onInput() {
    
    let idk;
    useless = document.getElementById('height_span');
   idk=checkValue(document.getElementsByName('figure'));
  
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
    if(undo==false){
        undo=true;
        undobtn.setAttribute('class', 'clicked');
    }else if(undo==true){
        undo=false;
        undobtn.removeAttribute('class');
    }
    console.log(undo);
}

figureInput.addEventListener('click', onInput, false);
btn.addEventListener('click', onClick, false);
undobtn.addEventListener('click',undoelmt, false);
let drawings = [];
function setup() {
    let canvas = createCanvas(document.getElementById('drawingPanel').offsetWidth, document.getElementById('drawingPanel').offsetHeight);
    canvas.parent('drawingPanel');
    

}
let i = 0;
let b;
let x;
let y;
function mousePressed(){
    if (beenClicked === true && undo==false) {
        let c=color(document.getElementById('fg_RedValue').value,document.getElementById('fg_GreenValue').value,document.getElementById('fg_BlueValue').value);
        
            x=mouseX;
            y=mouseY;
            switch (value) {
                case 'Square':
                    b = new Rectangle(mouseX - (document.getElementById('baseValue').value / 2),mouseY-(document.getElementById('baseValue').value/2), document.getElementById('baseValue').value, document.getElementById('baseValue').value,c);
                break;
                case 'Rectangle':
                    b = new Rectangle(mouseX- (width / 2), mouseY- (document.getElementById('heightValue').value / 2), document.getElementById('baseValue').value, document.getElementById('heightValue').value,c);               
                   break;
                case 'Ellipse':
                    b = new Ellipse(mouseX, mouseY, document.getElementById('baseValue').value, document.getElementById('heightValue').value,c);
                   break;
            }
            drawings.push(b);
          //  console.log(drawings.length)
    
           
        }
    
}

function draw() {
    
   background(document.getElementById('bg_RedValue').value,document.getElementById('bg_GreenValue').value,document.getElementById('bg_BlueValue').value);
   //let asd=checkValue(document.getElementsByName('figure'));
  
   for(i=0;i<drawings.length;i++){
    drawings[i].show();
    console.log(i);
   }
 
    let c=color(document.getElementById('fg_RedValue').value,document.getElementById('fg_GreenValue').value,document.getElementById('fg_BlueValue').value);
    fill(c);
    if(beenClicked===true){
    switch (value) {
        case 'Square':
           
           rect(mouseX - (document.getElementById('baseValue').value / 2),mouseY-(document.getElementById('baseValue').value/2), document.getElementById('baseValue').value, document.getElementById('baseValue').value);
        break;
        case 'Rectangle':   
        rect(mouseX- (width / 2), mouseY- (document.getElementById('heightValue').value / 2), document.getElementById('baseValue').value, document.getElementById('heightValue').value);
           break;
        case 'Ellipse':
            ellipse(mouseX, mouseY, document.getElementById('baseValue').value, document.getElementById('heightValue').value);
           break;
    }
}
}
class Rectangle {

    constructor(x, y, w, h,c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color=c
    }
    show() {
        stroke(0);
       fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }

   
}
class Ellipse {
    constructor(x, y, w, h,c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color=c
    }
    
    show() {
        stroke(0);
        fill(this.color);
        ellipse(this.x, this.y, this.w, this.h);
    }
   
}

