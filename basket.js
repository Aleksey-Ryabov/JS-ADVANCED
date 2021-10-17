
const basketDivEl = document.querySelector('.basket');

const basketElements = [
    {id: 1, product: 'Shirt', price: 100, img:'./img/shirt.jpg'},
    {id: 2, product: 'Shoes', price: 200, img:'./img/shoes.jpg'},
    {id: 3, product: 'Bomber', price: 500, img:'./img/bomber.jpg'},
    {id: 4, product: 'Dress', price: 150, img:'./img/dress.jpg'},
    {id: 5, product: 'Cap', price: 50, img:'./img/cap.jpg'},
    {id: 6, product: 'Down Jacket', price: 1000, img:'./img/down.jpg'}
]

const getBasket = ()=> {
    let newBasketArr = basketElements.map((elem)=> {
        return `
        <div class='basket_elem'>
        <div class='basket_elem_div'>
            <p id='${elem.id}'><img class='basket_elem_img' src='${elem.img}'></p>
            <p id='${elem.id}'>${elem.product}</p>
            <p id='${elem.id}'>${elem.price} $</p>
        </div>
            <button id=${elem.product}> Добавить в корзину ${elem.product}</button>
        </div>
        `
    }).join('')
    basketDivEl.innerHTML = newBasketArr 
};
getBasket();

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=> {
    button.addEventListener('click', ()=> {
        alert(`Товар ${button.id} , Добавлен в корзину`)
    })
})
