    let div2 = document.getElementById("div2");

    function w1() {
    document.getElementById("body").style.backgroundColor = 'black';
    document.getElementById("body").style.color = 'white';
    }

    function w2() {
    document.getElementById("body").style.backgroundColor = 'white';
    document.getElementById("body").style.color = 'black';
    }

    function w3() {
    document.getElementById("body").style.backgroundColor = 'blue';
    document.getElementById("body").style.color = 'white';
    }

    function w4() {
    document.getElementById("body").style.backgroundColor = 'green';
    document.getElementById("body").style.color = 'white';
    }

    function w5() {
    document.getElementById("body").style.backgroundColor = 'red';
    document.getElementById("body").style.color = 'black';

    }

    function w6() {
    document.getElementById("body").style.backgroundColor = 'gold';
    document.getElementById("body").style.color = 'black';
    }

    function www() {
        let div2 = document.getElementById("div2");
        div2.innerHTML = 0;
        xxx()
    }
    function sss() {
        let div2 = document.getElementById("div2");
        div2.innerHTML = 1;
        xxx()
    }

    function ooo() {
        let div2 = document.getElementById("div2");
        div2.innerHTML = 2;
        xxx()
    }

    function kkk() {
        let div2 = document.getElementById("div2");
        div2.innerHTML = 5;
        xxx()
    }

    function lll() {
        let div2 = document.getElementById("div2");
        div2.innerHTML = Number(div2.innerText) +1;
        xxx()
    }

    function ttt() {
        let div2 = document.getElementById("div2");
        div2.innerHTML = Number(div2.innerText) -1;
        xxx()
    }

    function xxx () {
    if (div2.innerText == 0) {
        w1()
    } else if (div2.innerText == 1 ) {
        w2()
    } else if (div2.innerText == 2 ) {
        w3()
    } else if (div2.innerText == 5 ) {
        w4()
    } else if (div2.innerText % 2 == 0 ) {
        w5()
    } else {
        w6()
    }


    }








