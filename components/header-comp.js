const headerComp = `<header class="header">
<div class="header_content container">
     <div class="header__left">
        <a href="#" class="header__left__logo"><img class="header__left__img" src="img/logo.png" alt="">bran <a href="" class="header__left__logo_d">d</a></a>
         <form action="#" class="header__form">
             <div class="header__left__arrow">Browse</div>
             <div class="header-flex_input">
                     <input class="header-flex_inputText" type="text" placeholder="Search for Item...">
                     <a class="header-flex_input_icon" href="#"><i class="fas fa-search"></i></a>
                </div>
         </form>
     </div>
     <div class="header__right">
         <a href="#" class="cart"><img src="img/cart.svg" alt="">
            <div class="header__right_cart_circle"><span>{{count.length}}</span></div>
        </a>
         <div class="basket_module">
             <div class="basket_module_els_head">
                <div class='basket_module_inside_prName'>Product name</div>
                <div class='basket_module_inside_q'>Quantity</div>
               <div class='basket_module_inside_ppp'>Price per piece</div>
                <div class='basket_module_inside_tp'>Total Price</div>
             </div>
           <div class="basket_module_total_basket_price">Basket total price: &nbsp; 0</div>
        </div> 
        
         <a href="" class="button">My account</a>
     </div>
 </div>
<nav class="nav">
    <div class="container">
        <ul class="menu">
            <li class="navMenuList"><a href="" class="menuNav__links">Home</a></li>                 
            <li class="navMenuList">
                <a href="" class="menuNav__links">Man</a>
                <div class="drop">
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop_link">Blazers</a></li>
                            <li><a href="#" class="drop_link">Denim</a></li>
                            <li><a href="#" class="drop_link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop_link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop_link">Accessories </a></li>
                            <li><a href="#" class="drop_link">Bags/Purses</a></li>
                            <li><a href="#" class="drop_link">Swimwear/Underwear</a></li>
                            <li><a href="#" class="drop_link">Nightwear</a></li>
                            <li><a href="#" class="drop_link">Shoes</a></li>
                            <li><a href="#" class="drop_link">Beauty</a></li>

                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>                 
                        </ul>
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>              
                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                        </ul>
                        <div class="drop_flex_img">
                            <div class="drop_flex_img_text">
                                <p>Super</p>
                                <p>sale!</p>
                            </div>
                        </div>
                    </div>
            </div>
            </li>                 
            <li class="navMenuList"><a href="" class="menuNav__links">Women</a>
            <div class="drop">
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop_link">Blazers</a></li>
                            <li><a href="#" class="drop_link">Denim</a></li>
                            <li><a href="#" class="drop_link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop_link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop_link">Accessories </a></li>
                            <li><a href="#" class="drop_link">Bags/Purses</a></li>
                            <li><a href="#" class="drop_link">Swimwear/Underwear</a></li>
                            <li><a href="#" class="drop_link">Nightwear</a></li>
                            <li><a href="#" class="drop_link">Shoes</a></li>
                            <li><a href="#" class="drop_link">Beauty</a></li>

                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>                 
                        </ul>
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>              
                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                        </ul>
                        <div class="drop_flex_img">
                            <div class="drop_flex_img_text">
                                <p>Super</p>
                                <p>sale!</p>
                            </div>
                        </div>
                    </div>
            </div>
            </li>                 
            <li class="navMenuList"><a href="" class="menuNav__links">Kids</a>
            <div class="drop">
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop_link">Blazers</a></li>
                            <li><a href="#" class="drop_link">Denim</a></li>
                            <li><a href="#" class="drop_link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop_link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop_link">Accessories </a></li>
                            <li><a href="#" class="drop_link">Bags/Purses</a></li>
                            <li><a href="#" class="drop_link">Swimwear/Underwear</a></li>
                            <li><a href="#" class="drop_link">Nightwear</a></li>
                            <li><a href="#" class="drop_link">Shoes</a></li>
                            <li><a href="#" class="drop_link">Beauty</a></li>

                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>                 
                        </ul>
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>              
                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                        </ul>
                        <div class="drop_flex_img">
                            <div class="drop_flex_img_text">
                                <p>Super</p>
                                <p>sale!</p>
                            </div>
                        </div>
                    </div>
            </div>
            </li>                 
            <li class="navMenuList"><a href="" class="menuNav__links">Accoseriese</a>
            <div class="drop">
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop_link">Blazers</a></li>
                            <li><a href="#" class="drop_link">Denim</a></li>
                            <li><a href="#" class="drop_link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop_link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop_link">Accessories </a></li>
                            <li><a href="#" class="drop_link">Bags/Purses</a></li>
                            <li><a href="#" class="drop_link">Swimwear/Underwear</a></li>
                            <li><a href="#" class="drop_link">Nightwear</a></li>
                            <li><a href="#" class="drop_link">Shoes</a></li>
                            <li><a href="#" class="drop_link">Beauty</a></li>

                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>                 
                        </ul>
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>              
                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                        </ul>
                        <div class="drop_flex_img">
                            <div class="drop_flex_img_text">
                                <p>Super</p>
                                <p>sale!</p>
                            </div>
                        </div>
                    </div>
            </div>
            </li>                 
            <li class="navMenuList"><a href="" class="menuNav__links">Featured</a>
            <div class="drop drop_offset">
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop_link">Blazers</a></li>
                            <li><a href="#" class="drop_link">Denim</a></li>
                            <li><a href="#" class="drop_link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop_link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop_link">Accessories </a></li>
                            <li><a href="#" class="drop_link">Bags/Purses</a></li>
                            <li><a href="#" class="drop_link">Swimwear/Underwear</a></li>
                            <li><a href="#" class="drop_link">Nightwear</a></li>
                            <li><a href="#" class="drop_link">Shoes</a></li>
                            <li><a href="#" class="drop_link">Beauty</a></li>

                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>                 
                        </ul>
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>              
                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                        </ul>
                        <div class="drop_flex_img">
                            <div class="drop_flex_img_text">
                                <p>Super</p>
                                <p>sale!</p>
                            </div>
                        </div>
                    </div>
            </div>
            </li>                 
            <li class="navMenuList"><a href="" class="menuNav__links">Hot Deals </a>
            <div class="drop drop_offset">
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop_link">Blazers</a></li>
                            <li><a href="#" class="drop_link">Denim</a></li>
                            <li><a href="#" class="drop_link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop_link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop_link">Accessories </a></li>
                            <li><a href="#" class="drop_link">Bags/Purses</a></li>
                            <li><a href="#" class="drop_link">Swimwear/Underwear</a></li>
                            <li><a href="#" class="drop_link">Nightwear</a></li>
                            <li><a href="#" class="drop_link">Shoes</a></li>
                            <li><a href="#" class="drop_link">Beauty</a></li>

                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>                 
                        </ul>
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>              
                        </ul>
                    </div>
                    <div class="drop_flex">
                        <h3 class="drop_h3">Women</h3>
                        <ul class="drop_ul">
                            <li><a href="#" class="drop_link">Dresses</a></li>
                            <li><a href="#" class="drop_link">Tops</a></li>
                            <li><a href="#" class="drop_link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop_link">Jackets/Coats</a></li>
                        </ul>
                        <div class="drop_flex_img">
                            <div class="drop_flex_img_text">
                                <p>Super</p>
                                <p>sale!</p>
                            </div>
                        </div>
                    </div>
            </div>
            </li>
        </ul>
    </div>
</nav>
<section class="newArrivals">
    <div class="newArrivals_content container">
        <div class="newArrivals_content_left">
            <h3 class="newArrivals_content_left_h3">New Arrivals </h3>
        </div>
        <div class="newArrivals_content_right">
            <h4 class="newArrivals_content_left_h4">Home / Men / </h4>
            <p class="newArrivals_content_right_p">New Arrivals</p>
        </div>
    </div>
    
</section>
</header>`;

Vue.component('header-comp',{
    template: headerComp,
    props:['count']
})