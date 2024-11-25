function clearDiv () {
    console.log("clearDiv");
    let div = document.getElementById('clear');
    div.innerText = ''
}

function vvv () {
    let d1 = document.getElementById('d1');
    let span = document.getElementById('span1');
    span.innerText = span.innerText + d1.value;
}
