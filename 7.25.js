let list = []
let v = document.getElementById('v')

function bee() {
    let gh = document.getElementById('ch');
    let hhh = document.getElementById('ol');
    let liElement = document.createElement('li');


    if (hhh.value === '') {
        alert('укажите значение')
    }
    else {
        list.push(hhh.value)
        liElement.innerText = hhh.value;
        gh.append(liElement);
    }
}

function np() {
    let index = document.getElementById('j');
    let bv = document.getElementById('bn');
    let h = document.createElement('li');
    if (index.value === '') {
        alert('укажите индекс элемета')
    }
    let i = index.value-1
    console.log('индекс',i, 'элемент массива', list[i]);
    h.innerText = list[i];
    bv.append(h)
    if (i === -1) {
        h.innerText = list[0];
        bv.append(h)
    }
}