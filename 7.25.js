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