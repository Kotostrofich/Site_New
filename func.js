const display = document.getElementById("display");
let b1="0";

function Digit(input){
    if (display.value == "Error" || display.value == "undefined" || display.value == "Infinity" ||  display.value == "0"){
        display.value = "";
    }
    display.value += input;
    
}

function Operater(input){
    if (!("%*-+/".includes(display.value.slice(-1)))){
    display.value += input;
    b1="0";
    }
}
function Dote(input){
    if (b1=="0"){
    display.value += input;
    b1="1";

    }
}

function ClearDisplay(){
    display.value = "";
    b1="0"
}

function Dife(){
    if (display.value[0].includes("-")){ 
        display.value  = display.value.slice(1);
    }
    
    else {
        display.value = "-" + display.value;
    }
}

function destroy(){
    if (display.value != ""){
        if(display.value.slice(-1)=="."){
            b1=="0"
        }
        display.value = display.value.slice(0, -1);; 
    
    }


}
function calculate(){
    if (display.value == "Error"){
        display.value = "0";
    }

    try {
        display.value = parseFloat((eval(display.value)).toFixed(4));
    }
    catch(error){
        display.value = "Error";
    }

    if (display.value == "undefined"){
        display.value = "";
    }    
}