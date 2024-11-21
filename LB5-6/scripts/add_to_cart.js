let products = [];

function submitProcessing(event) {
    event.preventDefault();
    const nameInput = document.querySelector('.name');
    const countInput = document.querySelector('.count');
    const name = nameInput.value.trim();
    const count = countInput.value.trim();
    if (!name || !count) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    if (!/^\d+$/.test(count)) {
        alert("Ошибка: Количество должно быть числовым значением.");
        return;
    }
    nameInput.value = '';
    countInput.value = '';
    const template = document.getElementById('product-template');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name-value').textContent = name;
    clone.querySelector('.count-value').textContent = count;
    const deleteButton = clone.querySelector('.btn-delete');
    deleteButton.addEventListener('click', () => {
        const productItem = deleteButton.closest('.product-item');
        productItem.remove();
    });
    const resultsContainer = document.querySelector('.gen-results');
    resultsContainer.appendChild(clone);
}



function add_product(name, count){
    const gen_results = document.querySelector('.gen-results')
    const addedEl = document.createElement('div')
    const addedEl1 = document.createElement('div')
    addedEl.textContent = name
    addedEl.classList.add('product-name')
    addedEl1.textContent = count
    addedEl1.classList.add('product-count')
    gen_results.append(addedEl)
    gen_results.append(addedEl1)    
}

document.addEventListener('DOMContentLoaded', loadProducts)

function loadProducts(){
    const productsInLS = localStorage.getItem('products')
    if(!productsInLS){
        return
    }
    products = JSON.parse(productsInLS)
    for (const product of products)
    {
        add_product(product.name, product.count)
    }
}