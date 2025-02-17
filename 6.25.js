function fivenul() {
    let output_nul = document.getElementById('output_nul');
    for (let q = 0; q < 5; q++){
        output_nul.innerText = output_nul.innerText + ' ' + q;
    }
}
function fiveone() {
    let output_one = document.getElementById('output_one');
    for (let w = 1; w < 6; w++){
        output_one.innerText = output_one.innerText + ' ' + w;
    }
}
function tennul() {
    let output_ten_nul = document.getElementById('output_ten_nul');
    for (let e = 0; e < 10; e++){
        output_ten_nul.innerText = output_ten_nul.innerText + ' '+ e;
    }
}
function tenone() {
    let output_ten_one = document.getElementById('output_ten_one');
    for (let r = 1; r < 11; r++){
        output_ten_one.innerText = output_ten_one.innerText+ ' ' + r;
    }
}
function tennultwo() {
    let output_ten_nul_two = document.getElementById('output_ten_nul_two');
    for (let t = 0; t < 19; t+=2  ){
        output_ten_nul_two.innerText = output_ten_nul_two.innerText+ ' ' + t;
    }
}
function tenonetwo() {
    let output_ten_one_two = document.getElementById('output_ten_one_two');
    for (let y = 1; y < 21; y+=2 ){
        output_ten_one_two.innerText = output_ten_one_two.innerText+ ' ' + y;
    }
}

function twentyred() {
    let output_twenty_red = document.getElementById('output_twenty_red');
    for (let u = 1; u < 21; u++ ){
        let span = document.createElement('span');
        span.innerText = ' '+u;
        if (u % 2 ===0){
            span.style.color = 'red';
        }
        output_twenty_red.append(span)
        // текст
        // стиль если надо
        // добавить спан в общий спан через append

    }
}

