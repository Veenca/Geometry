let figureInput=document.getElementById('inputFigure');
function printfig(figure){
    let c = document.getElementById("gameCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    if(figure==='Rectangle'){
    
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
    }else if(figure==='Triangle'){
        ctx.moveTo(75,75);
        ctx.lineTo(20,75);
        ctx.lineTo(20,25);
        ctx.closePath();
        ctx.stroke();
    }else{
        ctx.rect(20, 20, 100, 100);
        ctx.stroke();
    }

}
function onInput(){
    let value=figureInput.value;
    
    let options= document.getElementById("figureName").childNodes;
    
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {
          // An item was selected from the list!
          // yourCallbackHere()
          
          
          figureInput.value=''   
          console.log(options[i].value);
          printfig(options[i].value);
          return options[i].value;    
          //break; potrebbe essere utile;
        }
      }
}
figureInput.addEventListener('input',onInput,false);




