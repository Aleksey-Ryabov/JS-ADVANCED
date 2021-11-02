const vue = new Vue ({
    el: '#app',
    data: {
        goods: [],
        search: '',

    },

    computed:{
        filteredProducts(){
            return this.goods.filter(elem=>{
                return elem.productName.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    },

    mounted() {
        fetch('https://gist.githubusercontent.com/Aleksey-Ryabov/d71006fe4caa1c9151c7c47d16a5b139/raw/e0dab955b383a34bc5692c30297d3262261d5830/catalogProducts.json')
        .then((response) => response.json())
        .then((data) => {
            this.goods = data;
            console.log(this.goods)
        })
    }

})