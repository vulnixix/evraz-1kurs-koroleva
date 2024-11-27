function clearDiv () {
    let d1 = document.getElementById('span1');
    let d2 = document.getElementById('span2');
    let d3 = document.getElementById('span3');
    d1.innerHTML = "";
    d2.innerHTML = "";
    d3.innerHTML = "";

}

function vvv () {
    let d1 = document.getElementById('d1');
    let span = document.getElementById('span1');
    span.innerText = span.innerText + d1.value;

}

function ptt () {
    let d2 = document.getElementById('d2');
    let span = document.getElementById('span2');
    span.innerText = span.innerText + d2.value;
}


function apt () {
    let d3 = document.getElementById('d3');
    let span = document.getElementById('span3');
    span.innerText = span.innerText + d3.value;
}