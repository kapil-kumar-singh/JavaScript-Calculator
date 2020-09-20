"use strict"

var button = document.getElementsByClassName("button");
var pri_view = document.getElementById("display_priview");
var display = document.getElementById("display");



function isOperand(value){
    return value == '+' || value == "-" || value == "*" || value == "/";
}

function isRepeatOperand(value){
    var last_letter = pri_view.textContent.charAt(pri_view.textContent.length-2);
    if (isOperand(last_letter)){
        pri_view.textContent = pri_view.textContent.substring(0, pri_view.textContent.length - 2);
        pri_view.textContent += value ;

    }
};

function IsvalideKey(value){
    return value == '0' || value == "1" || value == "2" || value == "3" || value == '4' || value == "5" || value == "6" || value == "7" || value == '8' || value == "9" || value == "Backspace" || value == "." || value == '+' || value == "-" || value == "*" || value == "/" || value == '+' || value == "=" || value == "Enter";
}

for ( var i=0 ; i<button.length; i++){
    button[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();
        pri_view.textContent += value

        if (isOperand(value)){
            display.textContent = value;
            isRepeatOperand(value);

        }else if (value=="ac"){
            display.textContent = '';
            pri_view.textContent = '';
        }else if(value=="del"){
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
            pri_view.textContent = pri_view.textContent.substring(0, pri_view.textContent.length - 4);
            
        }else if(value =='='){
            pri_view.textContent = pri_view.textContent.substring(0, pri_view.textContent.length - 1);
            var first_letter = pri_view.textContent.charAt(0);
            if (first_letter == "0"){
                pri_view.textContent = pri_view.textContent.substring(1, pri_view.textContent.length);
            }
            var result = eval(pri_view.textContent);
            display.textContent = result;
            pri_view.textContent = result
        }else{
            display.textContent += value;
        }
    });
};


document.addEventListener('keydown', function(event){
    console.log('keypressed', event.key);

    var value = event.key;

    if (IsvalideKey(value)){

        var text = display.textContent.trim();
        pri_view.textContent += value

        if (isOperand(value)){
            display.textContent = value;
            isRepeatOperand(value);
    
        }else if(value=="Backspace"){
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
            pri_view.textContent = pri_view.textContent.substring(0, pri_view.textContent.length - 10);
            
        }else if(value =='='){
            pri_view.textContent = pri_view.textContent.substring(0, pri_view.textContent.length - 1);
            var first_letter = pri_view.textContent.charAt(0);
            if (first_letter == "0"){
                pri_view.textContent = pri_view.textContent.substring(1, pri_view.textContent.length);
            }
            var result = eval(pri_view.textContent);
            display.textContent = result;
            pri_view.textContent = result
        }else if(value=="Enter"){
            pri_view.textContent = pri_view.textContent.substring(0, pri_view.textContent.length - 5);
            var first_letter = pri_view.textContent.charAt(0);
            if (first_letter == "0"){
                pri_view.textContent = pri_view.textContent.substring(1, pri_view.textContent.length);
            }
            var result = eval(pri_view.textContent);
            display.textContent = result;
            pri_view.textContent = result
        }
        else{
            display.textContent += value;
        }
    }

});
