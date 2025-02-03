function add() {
    let addElement = document.getElementById('i');
    let input = document.getElementById('hh');
    let vol = document.getElementById('ru');

    if (input.value === '') {
        alert('Укажите имя')
    } else if (vol.value === '') {
        alert('укажите количество')
    } else {
        for (let i = 0; i < +vol.value; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = input.value;
            addElement.append(liElement);
        }
    }
}

function acdb() {
    let y = document.getElementById('v');
    let m = document.getElementById('nn');
    let nm = document.getElementById('fu');


    if (m.value === '') {
        alert('укажите город')
    } else if (nm.value === '') {
        alert('укажите количество')
    } else {
        for (let i = 0; i < + nm.value; i++){
            let p = document.createElement('li');
            p.innerText = m.value;
            y.append(p)
        }

    }
}



