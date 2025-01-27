function addLi() {
    let addElement = document.getElementById('name');
    let input = document.getElementById('b')
    let liElement = document.createElement('g');

    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        liElement.innerText = input.value;

        addElement.append(liElement);

    }
}
