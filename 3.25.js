function add() {
    let addElement = document.getElementById('i');
    let input = document.getElementById('hh')
    let vol = document.getElementById('fu')
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Укажите имя')
    }
    else {
        liElement.innerText = input.value;
        addElement.append(liElement);

    }

    if (vol.value  ) {

    }
}