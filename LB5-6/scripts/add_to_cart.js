const STORAGE_KEY = "products";
document.addEventListener("DOMContentLoaded", () => {
    const savedProducts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    savedProducts.forEach(product => addProductToDOM(product.name, product.count));
});
function addProductToDOM(name, count) {
    const template = document.getElementById("product-template");
    const clone = template.content.cloneNode(true);
    clone.querySelector(".name-value").textContent = name;
    clone.querySelector(".count-value").textContent = count;
    const deleteButton = clone.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => {
        const productItem = deleteButton.closest(".product-item");
        productItem.remove();
        removeProductFromStorage(name);
    });
    const resultsContainer = document.querySelector(".gen-results");
    resultsContainer.appendChild(clone);
}

function submitProcessing(event) {
    event.preventDefault();
    const nameInput = document.querySelector(".name");
    const countInput = document.querySelector(".count");
    const name = nameInput.value.trim();
    const count = countInput.value.trim();

    if (!name || !count) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }
    if(!isPositiveInt(count)){
        alert('Количество должно быть целым положительным числом');
        return;
    }
    nameInput.value = '';
    countInput.value = '';
    addProductToDOM(name, count);
    saveProductToStorage(name, count);
}

function saveProductToStorage(name, count) {
    const savedProducts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    savedProducts.push({ name, count });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedProducts));
}

function removeProductFromStorage(name) {
    let savedProducts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    savedProducts = savedProducts.filter(product => product.name !== name);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedProducts));
}

function isPositiveInt(v) {
    const a = +v;
    return Number.isInteger(a) && a > 0;
}



