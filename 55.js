
function clearDiv () {
    let s1 = document.getElementById('d1');
    let s2 = document.getElementById('d2');
    let s3 = document.getElementById('d3');
    s1.innerHTML = "";
    s2.innerHTML = "";
    s3.innerHTML = "";

}

function a () {
    let s1 = document.getElementById('s1');
    let span = document.getElementById('d1');
    span.innerText = span.innerText + s1.value;

}

function b () {
    let s2 = document.getElementById('s2');
    let span = document.getElementById('d2');
    span.innerText = span.innerText + s2.value;
}


function c () {
    let s3 = document.getElementById('s3');
    let span = document.getElementById('d3');
    span.innerText = span.innerText + s3.value;
}