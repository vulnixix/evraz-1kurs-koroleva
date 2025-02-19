let list = []

function o() {
    let ad = document.getElementById('ad')
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
    let ol = document.getElementById('tt');
    if (ad.innerText === ''){
        alert('нельзя создать пустой список')
    } else
        for (let i = 0; i < list.length; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = list[i];
            ol.append(liElement)
        }

}
function unnum() {
    let ul = document.getElementById('gg');
    if (ad.innerText === ''){
        alert('нельзя создать пустой список')
    } else
        for (let i = 0; i < list.length; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = list[i];
            ul.append(liElement)
        }
}
function del() {
    let as = document.getElementById('ad')
    as.innerHTML = '';
}