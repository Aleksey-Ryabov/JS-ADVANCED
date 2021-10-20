'use strict';

const burgerSize = [
    {name: 'small', price:20, kkal: 300},
    {name: 'middle', price:30, kkal: 400},
    {name: 'big', price:50, kkal: 600 }
]

const toppings = [
    {name: 'cheese', price: 5, kkal: 50 },
    {name: 'bacon', price: 10, kkal: 100 },
    {name: 'salad', price: 5, kkal: 10 }
]

const spices = [
    {name: 'mayo', price: 5, kkal: 60 },
    {name: 'ketchup', price: 5, kkal: 20 },
    {name: 'mustard', price: 5, kkal: 30 }
]



class MiniBurger {
    constructor(toppings = 0, burgerSize = null, spices = null, totalPrice = 0, kkal = 0){
        this._toppings = toppings;
        this._burgerSize = burgerSize;
        this._spices = spices;
        this._totalPrice = totalPrice;
        this._totalCalories = kkal
    }

    addTopping(topping){
        this._toppings = topping
    }

    changeType(type){
        this._type = type
    }

    getBurgerPrice(food) {
        return this._totalPrice += food.price
    }

    getCalories(food) {
        return this._totalCalories += food.kkal;
    }
}

class MiddleBurger extends MiniBurger {
    constructor(){
        super();
    }
};

class BigBurger extends MiddleBurger {
    constructor(){
        super();
    }
};

let burgersButtons = document.querySelectorAll('button');
let formsToppings = document.querySelectorAll('.burger_form_topping');
let formsSouces = document.querySelectorAll('.burger_product_souce')
const baseBurger = new MiniBurger();
const middleBurger = new MiddleBurger();
const bigBurger = new BigBurger();

burgersButtons.forEach((button)=>{
    button.addEventListener('click',(button2)=>{
        let burgerType = burgerSize.find((burger) => burger.name === button2.target.dataset.name);
        let totalPriceEl = button2.target.parentNode.querySelector('.burgers_price');
        let totalCaloriesEl = button2.target.parentNode.querySelector('.burgers_calories');
        let sizeOfBurger = getTypeOfBurger(button2.target.dataset.name);
        sizeOfBurger.getBurgerPrice(burgerType);
        sizeOfBurger.getCalories(burgerType);
        totalPriceEl.innerText = sizeOfBurger._totalPrice;
        totalCaloriesEl.innerText = sizeOfBurger._totalCalories
    })
});

formsToppings.forEach((form)=>{
    form.addEventListener('change',(event)=>{
        let burgerType = toppings.find((topping) => topping.name === event.target.name);
        let sizeOfBurger = getTypeOfBurger(event.target.id);
        sizeOfBurger.getBurgerPrice(burgerType);
        sizeOfBurger.getCalories(burgerType);
        totalPriceEl.innerText = sizeOfBurger._totalPrice;
        totalCaloriesEl.innerText = sizeOfBurger._totalCalories
    })
})

formsSouces.forEach((form)=>{
    form.addEventListener('change',(event)=>{
        
    })
})


function getTypeOfBurger(burgerType){
    switch(burgerType){
        case 'small':
            return baseBurger;
        case 'middle':
            return middleBurger;
        case 'big':
            return bigBurger
    }
}