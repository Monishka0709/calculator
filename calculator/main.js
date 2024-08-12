let display=document.getElementById("Display")

let Calc = (Number) => display.value +=Number;

function Clear(){
    display.value=""
}

function Answer(){
    display.value=eval(display.value)
}

function sinclick(){
    
    var x = display.value;
    display.value = Math.sin(x * Math.PI / 180).toFixed(2);
    
}
function cosclick(){
    var x = display.value;
    display.value = Math.cos(x * Math.PI / 180).toFixed(2);
    
}
function tanclick(){
    var x = display.value;
    display.value = Math.tan(x * Math.PI / 180).toFixed(2);
    
}

function logclick(){
    var x= display.value;
    if(x<0)
   { x=-x;}

    display.value=Math.log10(x);
}