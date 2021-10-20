
const basketDivEl = document.querySelector('.basket');

class Products {
    constructor(id, product, price, img){
        this.id = id;
        this.product = product;
        this.price = price;
        this.img = img;
    }

    render(){
            return `
            <div class='basket_elem'>
            <div class='basket_elem_div'>
                <p class='product-img' id='${this.id}'><img class='basket_elem_img' src='${this.img}'></p>
                <p class='product-name'  id='${this.id}'>${this.product}</p>
                <p class='product-price' id='${this.id}'>${this.price} $</p>
            </div>
                <button class='product-button' id=${this.product}> Добавить в корзину ${this.product}</button>
            </div>
            `
     }
};

class ProductsList {
    constructor(products,captureElem, insertPlace) {
        this._products = products;
        this._insertEl = captureElem;
        this._insertPlace = insertPlace;
        this._cartSumm = 0;
        this._quantity = 0
    }

    getCartSumm (price){
        this._cartSumm += price;
        this._quantity ++;
    }

    renderGoodsList() {
        let productsList = this._products.map(
            product => product.render()
        ).join('');
        this._insertEl.insertAdjacentHTML(this._insertPlace, productsList);
    }

};

class CardProducts extends Products {
    constructor(title,price,insertElem,) {
        super(title, price);
        this._quantity = 1;
        this._insertElem = insertElem;
        this.totalPrice += this._price; 
        this._render = this.render();
        this.totalBasketEl = document.querySelector('.basketTotalValue');
        this.cartIconSpan = document.querySelector('.cartIconWrap_quantity');
        this.totalBasketEl.innerText = String(totalPrice);
        this.cartIconSpan.innerText = String(basketProdQuantity)
    }

    render() {
        return `<div class="basket_product">
                    <div>${this._title}</div>
                    <div class='basket_product_el'>${this._quantity}</div>
                    <div class='basket_product_el'>${this._price}</div>
                    <div class='basket_product_el'>${totalPrice}</div>
               </div>`
    }
};

const newProductsList = new ProductsList([
    new Products (1, 'Shirt', 100,'./img/shirt.jpg'),
    new Products (2, 'Shoes', 200,'./img/shoes.jpg'),
    new Products (3, 'Bomber', 500,'./img/bomber.jpg'),
    new Products (4, 'Dress', 150,'./img/dress.jpg'),
    new Products (5, 'Cap', 50,'./img/cap.jpg'),
    new Products (6, 'Down Jacket', 1000,'./img/down.jpg')
], document.querySelector('.basket'), 'afterbegin');

newProductsList.renderGoodsList();

const buttons = document.querySelectorAll('.product-button');

buttons.forEach((btn)=> {
    btn.addEventListener('click', (elem)=> {
        let wrap = elem.currentTarget.parentElement;
        let productName = wrap.querySelector('.product-name').innerText;
        let productPrice = Number(wrap.querySelector('.product-price').innerText.match(/(\d+)/)[0]);
        newProductsList.getCartSumm(productPrice);
    })
});