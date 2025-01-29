function addLi() {
    let addElement = document.getElementById('name');
    let input = document.getElementById('b')
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Укажите имя')
    }
    else {
        liElement.innerText = input.value;
        addElement.append(liElement);
    }
}

function addOm() {
    let addElement = document.getElementById('u');
    let input = document.getElementById('s')
    let OmElement = document.createElement('li');

    if (input.value === '') {
        alert('Укажите город')
    }
    else {
        OmElement.innerText = input.value;
        addElement.append(OmElement);
    }
}
