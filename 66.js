function makeAlert() {

    let d1 = document.getElementById('xxx');
    let AlertText = prompt('Укажите номер блока, куда добавить текст')
    console.log(AlertText, 'd' + AlertText)
    let div = document.getElementById('d' + AlertText)
    div.innerText = div.innerText + d1.value;



}




function combine() {
    let div1 = document.getElementById('d1')
    let div2 = document.getElementById('d2')
    let div3 = document.getElementById('d3')
    let span2 = document.getElementById('span2')
    span2.innerText = div1.innerText + div2.innerText + div3.innerText;
}

function clearDiv() {
    let div1 = document.getElementById('d1');
    let div2 = document.getElementById('d2');
    let div3 = document.getElementById('d3');
    div1.innerHTML = "";
    div2.innerHTML = "";
    div3.innerHTML = "";
}