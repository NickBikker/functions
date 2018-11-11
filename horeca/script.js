const prijsfris = 2.50;
const prijsbier = 3.30;
const prijswijn = 3.10;
const prijs8 = 4.50;
const prijs16 = 7;


var hoeveelfris = 0;
var hoeveelbier = 0;
var hoeveelwijn = 0;
var hoeveel8 = 0;
var hoeveel16 = 0;



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
        }else if(input == 'snacks'){
            snacks();
        }else{
            rekening()
        }

    }
}

function snacks(){
    var input = prompt('Hoeveel snacks wilt u bestellen, 8 of 16');
    if(input == '8'){
        var inputsnack8 = parseInt(prompt('hoeveel schalen wilt u bestellen'));
        hoeveel8 = hoeveel8 + inputsnack8;
        console.log('hoeveel schalen snacks' + hoeveel8);
    }else if(input == '16'){
        var inputsnack16 = parseInt(prompt('hoeveel schalen wilt u bestellen'));
        hoeveel16 = hoeveel16 + inputsnack16;
        console.log('hoeveel schalen snacks' + hoeveel16);

    }


}

function rekening(){
    var totaalfris = prijsfris * hoeveelfris;
    var totaalbier = prijsbier * hoeveelbier;
    var totaalwijn = prijswijn * hoeveelwijn;
    var totaalsnack8 = prijs8 * hoeveel8;
    var totaalsnack16 = prijs16 * hoeveel16;
    var totaal = totaalfris + totaalbier + totaalwijn + totaalsnack8 + totaalsnack16;

    if(hoeveelfris > 0) {
        document.write('aantal fris: ' + hoeveelfris + '<br>' + 'dit kost bij elkaar: \u20AC' + totaalfris + '<br>' + '<br>');
    }else{
        document.write()
    }
    if(hoeveelbier > 0) {
        document.write('aantal bier: ' + hoeveelbier + '<br>' + 'dit kost bij elkaar: \u20AC' + totaalbier + '<br>' + '<br>');
    }else{
        document.write()
    }
    if(hoeveelwijn > 0) {
        document.write('aantal wijn: ' + hoeveelwijn + '<br>' + 'dit kost bij elkaar: \u20AC' + totaalwijn + '<br>' + '<br>');
    }else{
        document.write()
    }
    if(hoeveel8 > 0) {
        document.write('aantal schalen met 8 snacks: ' + hoeveel8 + '<br>' + 'dit kost bij elkaar: \u20AC \u20AC' + totaalsnack8 + '<br>' + '<br>');
    }else{
        document.write()
    }
    if(hoeveel16 > 0) {
        document.write('aantal schalen met 16 snacks: ' + hoeveel16 + '<br>' + 'dit kost bij elkaar: \u20AC' + totaalsnack16 + '<br>' + '<br>');
    }else{
        document.write()
    }
    document.write('de totaalprijs is: \u20AC' + totaal);
}

addToOrder();


