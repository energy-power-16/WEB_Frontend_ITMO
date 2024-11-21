let products = [];

function submitProccessing(ev)
{
    ev.preventDefault()
    const product_form = document.querySelector('.add-product-form')
    const input_name = product_form.querySelector('.name')
    const input_count = product_form.querySelector('.count')
    const name = input_name.value
    const count = input_count.value 
    add_product(name,count)
    const product = {
        name: name,
        count: count,
    };
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
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