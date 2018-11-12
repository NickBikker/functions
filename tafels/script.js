

function prompt() {
    var tables = prompt('what table to you want to display');
    return tables
}

function calculator() {
    var a = 1;
    for(var i = 0; i < tables; i++){
        document.write('1x'+ a + '=' + a * 1 + '<br>');
        document.write('2x'+ a + '=' + a * 2 + '<br>');
        document.write('3x'+ a + '=' + a * 3 + '<br>');
        document.write('4x'+ a + '=' + a * 4 + '<br>');
        document.write('5x'+ a + '=' + a * 5 + '<br>');
        document.write('6x'+ a + '=' + a * 6 + '<br>');
        document.write('7x'+ a + '=' + a * 7 + '<br>');
        document.write('8x'+ a + '=' + a * 8 + '<br>');
        document.write('9x'+ a + '=' + a * 9 + '<br>');
        document.write('10x'+ a + '=' + a * 10 + '<br>' + '<br>');

        a++
    }
}

<<<<<<< Updated upstream
calculator();

=======

if(tables <= 10){
    calculator()
}else{
    if(isNaN(tables){
        alert('you need to use numbers');
        prompt();
    }else{
        alert('you need to pick a figure between 1 and 10');
        prompt();
    }
}
>>>>>>> Stashed changes
