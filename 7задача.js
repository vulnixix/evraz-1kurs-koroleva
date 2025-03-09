list = []

function addElement() {
    let inputElement = document.getElementById('element');
    let olElement = document.getElementById('ol');
    let liElement = document.createElement('li');

    if (inputElement.value === ''){
        alert('укажите значение')
    }
    else {
        list.push(inputElement.value)
        liElement.innerText = inputElement.value;
        olElement.append(liElement);
    }
}

function changeElement() {
    let inputIndex = document.getElementById('index');
    let inputChange = document.getElementById('change');

    if (inputIndex.value === ''){
        alert('укажите индекс изменяемого элемента')
    }
    else {
        let i = inputIndex.value-1
        console.log('индекс',i, 'элемент массива', list[i]);
        liElement.innerText = list[i]

    }
}
