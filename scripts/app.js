'use strict';

let buttons = document.querySelectorAll('.products_right_product_addToCart');
let buttonCart = document.querySelector('.button');
let pricePr = document.querySelector('.basket_module_inside_ppp');
let prodName = document.querySelector('.basket_module_inside_prName');
let prodsQuantity = document.querySelector('.basket_module_inside_q');
let prodsTotalPrice = document.querySelector('.basket_module_inside_tp');
let basketButton = document.querySelector('.cart');
let basketMain = document.querySelector('.basket_module');
let basketTotalPrice = document.querySelector('.basket_module_total_basket_price');
let basketProductsCount = document.querySelector('.header__right_cart_circle');
let clickCount = 0;

    
 let basket = {
        totalPrice : 0,
        priceProduct : 0,
        quantity : 0,
        productName: '',
        markBasket:{},
    addToCart(product){
        let cardNode = product.currentTarget.parentNode;
            let productData = {
                parentEl: cardNode,
                productName: cardNode.querySelector('.products_right_product_text_p1').innerText,
                pricePerPiece : Number(cardNode.querySelector('.products_right_product_text_p2').innerText.match(/(\d+)/)[0])
            }
    
        this.getBasketData(productData);
        let markBasket = this.domBasketMarket();
        this.insertMarkInDoc(markBasket);
    },

    getBasketData(productData){
        this.totalPrice += productData.pricePerPiece;
        this.priceProduct = productData.pricePerPiece;
        this.productName = productData.productName;
        this.quantity++;
    },

    domBasketMarket(){
        return this.markBasket = {
            productName: `<p class='basket_module_inside_pr'>${this.productName}</p>`,
            totalPrice: `<p class='basket_module_inside_p'>$${this.totalPrice}</p>`,
            priceProduct: `<p class='basket_module_inside_p'>$${this.priceProduct}</p>`,
            quantity: `<p class='basket_module_inside_p'>${this.quantity}</p>`,
            basketTotalPrice: `Basket total price: &nbsp $${this.totalPrice}`
        }

    },

    insertMarkInDoc(markBasket){
            pricePr.insertAdjacentHTML('beforeend', markBasket.priceProduct);
            prodName.insertAdjacentHTML('beforeend', markBasket.productName);
            prodsQuantity.insertAdjacentHTML('beforeend', markBasket.quantity);
            prodsTotalPrice.insertAdjacentHTML('beforeend',markBasket.totalPrice);
            basketTotalPrice.innerHTML = markBasket.basketTotalPrice;
            basketProductsCount.innerHTML = this.quantity
    }

}

buttons.forEach((button)=>{
    button.addEventListener('click',(clickedButton)=>{
        clickedButton.preventDefault();
        basket.addToCart(clickedButton);
    }) 
});

basketButton.addEventListener('click',()=>{
        if(clickCount % 2 == 0){
            basketMain.style.display = 'block';
            clickCount++
        }else{
            basketMain.style.display = 'none';
            clickCount++
        }
   
});

basketMain.addEventListener('click',()=>{
    basketMain.style.display = 'none';
    clickCount++
})

