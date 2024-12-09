function kl () {
    let input = document.getElementById('ttt');
    let number = +input.value;

    if (number % 2 === 0) {
        let v = document.getElementById('div1');
        v.innerText = "веденное число - четное";
    }
    else {
        let v = document.getElementById('div1');
        v.innerText = ('веденное число нечетное');

    }
}
