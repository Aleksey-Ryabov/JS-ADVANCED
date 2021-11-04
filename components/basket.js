const vue = new Vue ({
    el: '#app',
    data(){
        return {
            goodsList:[
                {id: 1, img: 'img/products/item1.jpg', name: 'mango people cardigan', price: 52},
                {id: 2, img: 'img/products/item2.jpg', name: 'mango people trench coat', price: 44},
                {id: 3, img: 'img/products/item3.jpg', name: 'mango people jacket', price: 78},
                {id: 4, img: 'img/products/item4.jpg', name: 'mango people t-shirt', price: 21},
                {id: 5, img: 'img/products/item5.jpg', name: 'mango people hoodie', price: 111},
                {id: 6, img: 'img/products/item6.jpg', name: 'mango people jacket with a zipper', price: 23},
                {id: 7, img: 'img/products/item7.jpg', name: 'mango suit jacket', price: 76},
                {id: 8, img: 'img/products/item8.jpg', name: 'mango bomber jacket', price: 98},
                {id: 9, img: 'img/products/item9.jpg', name: 'mango people t-shirt blue', price: 25}
            ],
            cart:[],
            mood:null
        }
    },

    methods: {
        addHandlerMain(id){
            const mainGood = this.goodsList.find(good => good.id === id);
            this.cart.push(mainGood);

            console.log(this.cart)
        }
    }

})