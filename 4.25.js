let div = document.getElementById('container')

while (true) {
    let res = prompt('1 - голубой блок, 2 - красный блок, 3 - желтый блок, 4 - стоп игра')
    if (res === '4') {
        break;
    } else {
        let hh = document.createElement('div');

        if (res === '1') {
            hh.classList.add('block', 'blue')
            div.append(hh)
        } if (res === '2') {
            hh.classList.add('block', 'red')
            div.append(hh)
        } else if (res === '3') {
            hh.classList.add('block', 'yellow')
            div.append(hh)
    }
        }
}
