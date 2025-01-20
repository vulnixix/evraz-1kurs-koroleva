function a() {
    document.getElementById("body").style.backgroundColor = 'white';
    document.getElementById("body").style.color = 'black';

}

function b() {
    document.getElementById("body").style.backgroundColor = 'black';
    document.getElementById("body").style.color = 'white';
}

function c() {
    document.getElementById("body").style.backgroundColor = 'gray';
    document.getElementById("body").style.color = 'black';
}

function d() {
    document.getElementById("body").style.backgroundColor = 'yellow';
    document.getElementById("body").style.color = 'black';
}

function e() {
    document.getElementById("body").style.backgroundColor = 'blue';
    document.getElementById("body").style.color = 'white';
}

function r() {
    let vk  = document.getElementById('vk');
    vk.innerHTML = Number(vk.innerText) - 10;

}

function k() {
    let vk  = document.getElementById('vk');
    vk.innerHTML = Number(vk.innerText) - 1;

}

function m() {
    let vk  = document.getElementById('vk');
    vk.innerHTML = Number(vk.innerText) + 1;

}

function t() {
    let vk  = document.getElementById('vk');
    vk.innerHTML = Number(vk.innerText) + 10;

}

let mb = +input1.value;
let answer = ''

if (mb % 2 ===0) {
    answer = "да"
}


