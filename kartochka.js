let listDOM = document.getElementById('list');
let inputName = document.getElementById('name');
let selectCategory = document.getElementById('category');
let selectColor = document.getElementById('color');
let inputPrice = document.getElementById('price');
let inputCount = document.getElementById('count');
let inputDiscount = document.getElementById('discount');
let inputDescription = document.getElementById('description');
let inputPickUpPoint = document.getElementById('pick-up-point');
let form = document.getElementById('form');
let buttonAdd = document.getElementById('button-add');
let buttonEdit = document.getElementById('button-edit');
let titleAdd = document.getElementById('title-add')
let titleEdit = document.getElementById('title-edit')

let products = [];

let currentEditProduct = null;

let color = {
    'white': 'Белый',
    'black': 'Черный',
    'red': 'Красный',
    'blue': 'Синий',
    'purple': 'Фиолетовый',
    'brown': 'Коричневый',
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
    'card': 'Карта',
    'cash': 'Наличные',
}

function discount2(item) {
    let field = document.getElementById('discountDom')

    if (item) {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'flex', 'important')
    } else {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'none', 'important')
    }
}

function addTovar() {
    event.preventDefault();
    // находим активный радио-инпут, который выбран
    let discountChoose = document.querySelector('input[name=discount]:checked');

    // достаем все чекбоксы особенностей и генерируем текст
    let specialsText = '';
    let specialsValues = [];
    let specials = document.querySelectorAll('input[name=specials]:checked');

    for (let i = 0; i < specials.length; i++) {
        specialsValues.push(specials[i].value);
    }

    let paymentChoose = document.querySelector('input[name=payment]:checked');

    let product = {
        name: inputName.value,
        category: selectCategory.value,
        specials: specialsValues,
        description: inputDescription.value,
        discountChoose: discountChoose.value,
        discount: inputDiscount.value,
        price: inputPrice.value,
        count: inputCount.value,
        PickUpPoint: inputPickUpPoint.value,
        color: selectColor.value,
        paymentChoose: paymentChoose.value,
    };
    let productIndex = products.push(product) - 1;

    addTovarCard(product, productIndex)

    localStorage.setItem('object', JSON.stringify(products));
}

function addTovarCard(tovar, index) {
    // создаем контейнер для товара
    let cardTovar = document.createElement('div');
    cardTovar.classList.add('tovar');

    // создаем html наполнение для блока с ценой
    let price = ``;

    // проверим, а есть ли в discountChoose.value значение
    if (tovar.discountChoose === 'true') {
        // inputDiscount
        let disc = +tovar.price * +tovar.discount / 100;
        let newPrice = +tovar.price - disc;
        price = `<div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old">${tovar.price} руб.</div>
                        <div>${newPrice} руб.</div>
                    </div>
                </div>`;
    } else {
        price = `<div class="tovar-price">Цена: ${tovar.price} руб.</div>`;
    }

    // достаем все чекбоксы особенностей и генерируем текст
    let specialsText = '';

    for (let i = 0; i < tovar.specials.length; i++) {
        specialsText += ' ' + specialsObj[tovar.specials[i]];
    }

    let paymentText = '';

    for (let i = 0; i < tovar.payment; i++) {
        paymentText += ' ' + paymentObj[tovar.payment[i]];
    }

    let card = `<div class="tovar-name">${tovar.name}</div>
            <div class="tovar-category">${categories[tovar.category]}</div>
            <div class="tovar-color">${color[tovar.color]}</div>
            <div class="tovar-specials">Особенности: ${specialsText}</div>
            <div class="tovar-description">Описание: ${tovar.description}</div>
            <div class="tovar-pick-up-point">Пункт выдачи: ${tovar.PickUpPoint}</div>
            <div class="tovar-payment">Оплата: ${tovar.paymentChoose}</div>
            <div class="tovar-price-count">
                ${price} 
                <div class="count">Количество: ${tovar.count} шт.</div>
            </div>
            <div class="tovar-close">
                <button onclick="closeEl(${index})">X</button>
            </div>
            <div class="tovar-edit">
                <button onclick="edit(${index})">Редактировать</button>
            </div`;

    cardTovar.innerHTML = card;
    listDOM.append(cardTovar);

    form.reset();
}

function edit(productIndex) {
    currentEditProduct = productIndex;

    buttonAdd.classList.add('hide');
    buttonEdit.classList.remove('hide');
    titleAdd.classList.add('hide');
    titleEdit.classList.remove('hide');

    let product = products[productIndex];
    inputName.value = product.name;
    inputPrice.value = product.price;
    inputCount.value = product.count;
    inputDiscount.value = product.discount
    inputDescription.value = product.description;
    selectCategory.value = product.category;
    selectColor.value = product.color;
    inputPickUpPoint.value = product.PickUpPoint;


    // ищем нужный инпут радио с нужным value значением, чтобы его отметить как выбранный
    let radio = document.querySelector(`input[name=discount][value=${product.discountChoose}]`);
    if (radio) {
        radio.checked = true;
    }

    for (let i = 0; i < product.specials.length; i++) {
        // ищем нужный инпут чекбокс с нужным value значением, чтобы его отметить как выбранный
        let specialValue = product.specials[i];
        let checkbox = document.querySelector(`input[name=specials][value=${specialValue}]`);
        if (checkbox) {
            checkbox.checked = true;
        }
    }

    // ищем нужный инпут радио с нужным value значением, чтобы его отметить как выбранный
    let radioPaymet = document.querySelector(`input[name=payment][value=${product.paymentChoose}]`);
    if (radioPaymet) {
        radioPaymet.checked = true;
    }

    for (let i = 0; i < product.payment; i++) {
        // ищем нужный инпут чекбокс с нужным value значением, чтобы его отметить как выбранный
        let paymentValue = product.specials[i];
        let notcheckbox = document.querySelector(`input[name=payment][value=${paymentValue}]`);
        if (notcheckbox) {
            notcheckbox.checked = true;
        }
    }
}


// обновление товара в массиве товаров после его редактирования
function editTovar() {

    event.preventDefault();

    buttonAdd.classList.remove('hide');
    buttonEdit.classList.add('hide');
    titleAdd.classList.remove('hide');
    titleEdit.classList.add('hide');

    let product = products[currentEditProduct];
    currentEditProduct = null;

    // находим активный радио-инпут, который выбран
    let discountChoose = document.querySelector('input[name=discount]:checked');

    let paymentChoose = document.querySelector('input[name=payment]:checked')

    // достаем все чекбоксы особенностей и генерируем текст
    let paymentValue = [];
    let payment = document.querySelectorAll('input[name=payment]:checked');

    for (let i = 0; i < payment; i++) {
        paymentValue.push(payment[i].value);
    }

    // достаем все чекбоксы особенностей и генерируем текст
    let specialsValues = [];
    let specials = document.querySelectorAll('input[name=specials]:checked');

    for (let i = 0; i < specials.length; i++) {
        specialsValues.push(specials[i].value);
    }

    product.name = inputName.value;
    product.category = selectCategory.value;
    product.specials = specialsValues;
    product.description = inputDescription.value;
    product.discountChoose = discountChoose.value;
    product.discount = inputDiscount.value;
    product.price = inputPrice.value;
    product.count = inputCount.value;
    product.color = selectColor.value;
    product.paymentChoose = paymentChoose.value;
    product.PickUpPoint = inputPickUpPoint.value;


    form.reset();

    localStorage.setItem('object', JSON.stringify(products));

    buildAgain();
}

// полностью очищаем список продуктов и строим его заново, вызывая функцию построения карточки товара
function buildAgain() {
    listDOM.innerText = '';

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        addTovarCard(product, i)
    }
}

function closeEl(productIndex){
    //console.log('close productIndex', productIndex)
    // currentCloseProduct = productIndex;
    // event.preventDefault()

    products.splice(productIndex, 1)

    localStorage.setItem('object', JSON.stringify(products));

    buildAgain();

}

products = JSON.parse(localStorage.getItem('object'));
buildAgain();