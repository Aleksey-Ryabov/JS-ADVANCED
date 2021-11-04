const itemComp = ` 
        <section class="products_right_product">
        <a href="#"><img class="products_right_product_img" :src="good.img" alt=""></a>
        <div class="products_right_product_text">
            <a href="#"><p class="products_right_product_text_p1">{{good.name}}</p></a>
            <p class="products_right_product_text_p2">$ {{good.price}}</p>
        </div>
        <div class="products_right_product_addToCart">
            <a href="#" class="promo__goods__addToCart_img"><img src="img/cart2white.svg" alt=""></a>   
            <a href="#" v-on:click="addHandler" class="promo__goods__addToCart_text">Add to Cart</a>
        </div>
        <div class="products_right_product_sync">
            <a class="products_right_product_sync_a" href="#"><i class="fas fa-sync-alt"></i></a>
        </div>
        <div class="products_right_product_like">
        <a class="products_right_product_like_a" href=""><i class="far fa-heart"></i></a>
        </div>
        </section>
`;

Vue.component('item-comp',{
    template: itemComp,
    props: ['good'],
    methods: {
        addHandler(){
            this.$emit('add', this.good.id)
        }
    }
})