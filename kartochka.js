let listDOM = document.getElementById('list');
let inputName = document.getElementById('name');
let selectCategory = document.getElementById('category');
let selectColor = document.getElementById('color');
let inputPrice = document.getElementById('price');
let inputCount = document.getElementById('count');
let inputDiscount = document.getElementById('discount');
let inputDescription = document.getElementById('description');
let inputPickUpPoint = document.getElementById('pick-up-point');

let colors = {
    'white' : 'Белый',
    'black' : 'Черный',
    'red' : 'Красный',
    'blue' : 'Синий',
    'purple' : 'Фиолетовый',
    'brown' : 'Коричневый',
}

let categories = {
    'clothes': 'Одежда',
    'shoes': 'Обувь',
    'tools': 'Инструменты',
}

let specialsObj = {
    'bu': 'Б/У',
    'fragile': 'Хрупкое',
}

let paymentObj = {
    'card' : 'Карта',
    'cash' : 'Наличные',
}

function discount(item) {
    let field = document.getElementById('discountDom')

    if (item) {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'flex', 'important')
    }
    else {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'none', 'important')
    }
}

function addTovar() {
    // находим активный радио-инпут, который выбран
    let discountChoose = document.querySelector('input[name=discount]:checked');

    // создаем контейнер для товара
    let cardTovar = document.createElement('div');
    cardTovar.classList.add('tovar');

    // создаем html наполнение для блока с ценой
    let price = ``;

    // проверим, а есть ли в discountChoose.value значение
    if (discountChoose.value === 'true') {
        // inputDiscount
        let disc = +inputPrice.value * +inputDiscount.value / 100;
        let newPrice = +inputPrice.value - disc;
        price = `<div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old">${ inputPrice.value } руб.</div>
                        <div>${ newPrice } руб.</div>
                    </div>
                </div>`
    }
    else {
        price = `<div class="tovar-price">Цена: ${ inputPrice.value } руб.</div>`;
    }

    // достаем все чекбоксы особенностей и генерируем текст
    let specialsText = '';
    let specials = document.querySelectorAll('input[name=specials]:checked');

    for (let i = 0; i < specials.length; i++) {
        // console.log(specials[i].value, specialsObj[specials[i].value]);
        specialsText += ' ' + specialsObj[specials[i].value];
    }

    let paymentText = '';
    let payment = document.querySelectorAll('input[name=payment]:checked');

    for (let i = 0; i < payment.length; i++) {
        // console.log(specials[i].value, specialsObj[specials[i].value]);
        paymentText += ' ' + paymentObj[payment[i].value];
    }



    let card = `<div class="tovar-name">${ inputName.value }</div>
            <div class="tovar-category">${ categories[selectCategory.value] }</div>
            <div class="tovar-color">${colors[selectColor.value]}</div>
            <div class="tovar-specials">Особенности: ${ specialsText }</div>
            <div class="tovar-description">${ inputDescription.value }</div>
            <div class="tovar-pick-up-point">${ inputPickUpPoint.value }</div>
            <div class="tovar-payment">${ paymentText }</div>
                ${ price }
                <div class="count">Количество: ${ inputCount.value } шт.</div>
            </div>
            <div class="tovar-close">X</div>`

    cardTovar.innerHTML = card;
    listDOM.append(cardTovar);
}
