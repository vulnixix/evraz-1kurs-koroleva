function makeAlert() {

    let AlertText = prompt('Укажите номер блока, куда добавить текст')
    console.log(AlertText, 'd' + AlertText)
    let div = document.getElementById('d' + AlertText)
    div.innerText = AlertText
}


