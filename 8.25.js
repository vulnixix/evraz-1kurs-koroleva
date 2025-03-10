let list = []
let olElement = document.getElementById('ol');

function addElement() {
    let inputElement = document.getElementById('element');
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
        let i = inputIndex.value
        console.log('индекс',i, 'элемент массива', list[i]);

        olElement.innerText = '';
        list[i] = inputChange.value;

        for (let i = 0; i < list.length; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = list[i];
            olElement.append(liElement)
        }
    }
}