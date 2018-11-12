const prijs_fris = 2.50;
const prijs_bier = 3.30;
const prijs_wijn = 3.10;
const prijs_8 = 4.50;
const prijs_16 = 7;

let hoeveelFris = 0;
let hoeveelBier = 0;
let hoeveelWijn = 0;
let hoeveel_8 = 0;
let hoeveel_16 = 0;


// Dit is de functie om de bestelling op te nemen.
// Alle input van de gebruiker wordt automatisch geconverteerd naar lowercase letters, om het checken makkelijker te maken.
function addToOrder(){
    let input;
    while(input !== 'stop'){
        input = prompt('Wat wilt u bestellen? Fris, Bier, Wijn of Snacks?').toLowerCase();
        if(input === 'fris') {
            let inputFris = parseInt(prompt('Hoeveel fris wilt u bestellen'));
            hoeveelFris = hoeveelFris + inputFris;
        }else if(input === 'bier'){
            let inputBier = parseInt(prompt('Hoeveel bier wilt u bestellen'));
            hoeveelBier = hoeveelBier + inputBier;
        }else if(input === 'wijn'){
            let inputWijn = parseInt(prompt('Hoeveel wijn wilt u bestellen'));
            hoeveelWijn = hoeveelWijn + inputWijn;
        }else if(input === 'snacks'){
            snacks();
        } if(input !== 'bier' && input !== 'wijn' && input!== 'fris' && input !=='snacks' && input !=='stop'){
            alert('U kan alleen bier, fris, wijn of snacks bestellen');
        }else{
            rekening();
            }
        }
    }


// Dit is de functie om de snacks op te nemen en deze te berekenen.
function snacks(){
    let input = prompt('Hoeveel snacks wilt u bestellen, 8 of 16');
    if(input === '8'){
        let inputSnack_8 = parseInt(prompt('Hoeveel schalen wilt u bestellen'));
        hoeveel_8 = hoeveel_8 + inputSnack_8;
    }else if(input === '16') {
        let inputSnack_16 = parseInt(prompt('Hoeveel schalen wilt u bestellen'));
        hoeveel_16 = hoeveel_16 + inputSnack_16;
    } else {
        // Als de input een andere waarde heeft dan 8 of 16 dan wordt de prompt opnieuw geopend.
        snacks();
    }
}

// Alles wordt hier op het scherm geprint doormiddel van document.write.

function rekening(){
    let totaalfris = Math.round(prijs_fris * hoeveelFris * 100) / 100;
    let totaalbier = Math.round(prijs_bier * hoeveelBier * 100) / 100;
    let totaalwijn = Math.round(prijs_wijn * hoeveelWijn * 100) / 100;
    let totaalsnack8 = Math.round(prijs_8 * hoeveel_8 * 100) / 100;
    let totaalsnack16 = Math.round(prijs_16 * hoeveel_16 * 100) / 100;
    let totaal = Math.round((totaalfris + totaalbier + totaalwijn + totaalsnack8 + totaalsnack16) * 100) / 100;

    if(hoeveelFris > 0) {
        document.write('<div>' + 'Aantal fris: ' + hoeveelFris + '<br>' + 'Dit kost bij elkaar: \u20AC' + totaalfris.toFixed(2) + '</div>');
    }
    if(hoeveelBier > 0) {
        document.write('<div>' + 'Aantal bier: ' + hoeveelBier + '<br>' + 'Dit kost bij elkaar: \u20AC' + totaalbier.toFixed(2) + '</div>');
    }
    if(hoeveelWijn > 0) {
        document.write('<div>' + 'Aantal wijn: ' + hoeveelWijn + '<br>' + 'Dit kost bij elkaar: \u20AC' + totaalwijn.toFixed(2) + '</div>');
    }
    if(hoeveel_8 > 0) {
        document.write('<div>' + 'Aantal schalen met 8 snacks: ' + hoeveel_8 + '<br>' + 'Dit kost bij elkaar: \u20AC' + totaalsnack8.toFixed(2) + '</div>');
    }
    if(hoeveel_16 > 0) {
        document.write('<div>' + 'Aantal schalen met 16 snacks: ' + hoeveel_16 + '<br>' + 'Dit kost bij elkaar: \u20AC' + totaalsnack16.toFixed(2) + '</div>');
    }
    if(totaal > 0) {
        document.write('<div>' + 'De totaalprijs is: \u20AC' + totaal.toFixed(2) + '</div>');
    }
}

addToOrder();


