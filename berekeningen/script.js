var getal1 = 10;
var getal2 = 12;
var som= plus(getal1,getal2);

function plus(nummer1, nummer2){
    return nummer1+nummer2
}
document.write(getal1 + ' + ' + getal2 + ' = ' + som + '<hr>');
//////////////////////////////////////////////
var getal1 = 58;
var getal2 = 34;
var som2= min(getal1,getal2);

function min(nummer1, nummer2){
    return nummer1-nummer2
}
document.write(getal1 + ' - ' + getal2 + ' = ' + som2 + '<hr>');
///////////////////////////////////////////////
var getal1 = 6;
var getal2 = 7;
var som3= keer(getal1,getal2);

function keer(nummer1, nummer2){
    return nummer1*nummer2
}
document.write(getal1 + ' x ' + getal2 + ' = ' + som3 + '<hr>');
/////////////////////////////////////////////////
var getal1 = 144;
var getal2 = 12;
var som4= delen(getal1,getal2);

function delen(nummer1, nummer2){
    return nummer1/nummer2
}
document.write(getal1 + ' : ' + getal2 + ' = ' + som4 + '<hr>');
////////////////////////////////////////////////////
var getal1 = 12;
var som5= plus1(getal1);

function plus1(nummer1){
    return nummer1+1
}
document.write(getal1 + ' + ' + 1 + ' = ' + som5 + '<hr>');
/////////////////////////////////////////////////////
var getal1 = 34;
var som6= min1(getal1);

function min1(nummer1){
    return nummer1-1
}
document.write(getal1 + ' + ' + 1 + ' = ' + som6 + '<hr>');