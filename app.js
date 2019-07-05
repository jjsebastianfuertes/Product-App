class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Product name </strong> : ${product.name}
                    <strong> Product price </strong> : ${product.price}
                    <strong> Product year </strong> : ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();

    }
    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
        }

    }
    showMessage() {

    }
}

// DOM events
document.getElementById('product-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value

    const product = new Product(name, price, year);
    const ui = new UI();
    ui.addProduct(product);
    event.preventDefault();
})

document.getElementById('product-list').addEventListener('click', function (event) {
    const ui = new UI();
    ui.deleteProduct(event.target);
})