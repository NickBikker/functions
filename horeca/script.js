const prijsfris = 2.50;
const prijsbier = 3.30;
const prijswijn = 3.10;


var hoeveelfris =0;
var hoeveelbier =0;
var hoeveelwijn =0;



function addToOrder(){
    var input;
    while(input != 'stop'){
        input = prompt('wat wilt u bestellen');
        if(input == 'fris') {
             var inputfris = parseInt(prompt('hoeveel fris wilt u bestellen'));
             hoeveelfris = hoeveelfris + inputfris;
             console.log('Hoeveel fris ' + hoeveelfris);
        }else if(input == 'bier'){
            var inputbier = parseInt(prompt('hoeveel bier wilt u bestellen'));
            hoeveelbier = hoeveelbier + inputbier;
            console.log('hoeveel bier' + hoeveelbier);
        }else if(input == 'wijn'){
            var inputwijn = parseInt(prompt('hoeveel wijn wilt u bestellen'));
            hoeveelwijn = hoeveelwijn + inputwijn;
            console.log('hoeveel wijn' + hoeveelwijn);
        }



    }
}

addToOrder();

document.write(hoeveelfris);
document.write(hoeveelbier);
document.write(hoeveelwijn);
