function gekkeding() {
    var naam=prompt('naam');
    if (naam != 'stop') {
        var leeftijd=prompt('leeftijd');
        document.write('Hallo ' + naam + ', uw leeftijd is ' + leeftijd + ' jaar' + '<hr>');
        gekkeding();
    }
}

gekkeding();