let list = []
let ad = document.getElementById('ad')

function o() {
    let input = document.getElementById('as');

    if (input.value === ''){
        alert ('укажите значение')
    }
    else {
        list.push(input.value)

        // if (list.length > 1) {
        //     ad.innerText = ad.innerText + ', ' + input.value;
        // }
        // else {
        //     ad.innerText = input.value;
        // }

        ad.innerText = list.join(', ');
    }
}
function num() {
    let tt = document.getElementById('tt');
    if (list.length === 0){
        alert('нельзя создать пустой список')
    } else {
        let ol = document.createElement('ol');
        for (let i = 0; i < list.length; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = list[i];
            ol.append(liElement)
        }
        tt.append(ol)
    }
}
function unnum() {
    let tt = document.getElementById('tt');
    if (list.length === 0){
        alert('нельзя создать пустой список')
    } else {
        let ul = document.createElement('ul');

        for (let i = 0; i < list.length; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = list[i];
            ul.append(liElement)
        }
        tt.append(ul)
    }
}
function del() {
    let as = document.getElementById('ad')
    as.innerHTML = '';
    list = []
}