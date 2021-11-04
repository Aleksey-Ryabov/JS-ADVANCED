const footerComp = ` <footer>
<div class="product_footer">
    <div class="product_footer_content container">
        <div class="product_footer_delivery">
            <img class="product_footer_delivery_img" src="img/Forma_1.svg" alt="">
            <div class="product_footer_text">
                <h3 class="product_foote_h3">Free Delivery</h3>
                <p class="product_footer_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
        </div>
        <div class="product_footer_delivery">
            <img class="product_footer_delivery_img" src="img/percent.svg" alt="">
            <div class="product_footer_text">
                <h3 class="product_foote_h3">Sales & discounts</h3>
                <p class="product_footer_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
        </div>
        <div class="product_footer_delivery">
            <img class="product_footer_delivery_img" src="img/crown.svg" alt="">
            <div class="product_footer_text">
                <h3 class="product_foote_h3">Quality assurance</h3>
                <p class="product_footer_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
        </div>
        
    </div>
</div>
<div class="subscribeMain">
    <div class="subscribeMain_content container">
        <figure class="subscribeLeft">
                    <img class="commentImage" src="img/Layer_40.png" alt="#">
                <div class="comment">
                    <p class="commentText"> “Vestibulum quis porttitor dui! Quisque viverra nunc mi, 
                        a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                    <p class="commentName">Bin Burhan</p>
                    <p class="namePlace">Dhaka, Bd</p>
                    <div class="subscribeLeft_paggination">
                        <div class="subscribeLeft_paggination_el"></div>
                        <div class="subscribeLeft_paggination_el"></div>
                        <div class="subscribeLeft_paggination_el"></div>
                    </div>

                </div>
        </figure>
        <div class="subscribeRight">
            <div class="subscribeText">
                <p class="subscribeText_p1">Subscribe</p>
                <p class="subscribeText_p2">FOR OUR NEWLETTER AND PROMOTION</p>
            </div>

            <div class="subscribeRight__email">
                <input type="text" class="subscribeRight__email_input" placeholder="Enter Your Email">
                <a href="#" class="subscribeRight_button">Subscribe</a>
            </div>


           </div>
        </div>
    
    </div>

    <div class="container footer">
            <div class="footer_logoText">
                <div class="footer_logo">
                    <a href="#" class="header__left__logo"><img class="header__left__img" src="img/logo.png" alt="">bran <a href="" class="header__left__logo_d">d</a></a>
                </div>
                <div class="footer_text">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits. Intrinsicly syndicate an&nbsp;expanded array             of&nbsp;processes and cross-unit partnerships. 

                    Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.

                    Objectively strategize seamless relationships via resource sucking testing procedures. Proactively cultivate next-generation results for value-added methodologies. Dynamically plagiarize unique methodologies after performance based methodologies. Monotonectally empower stand-alone mindshare rather than ubiquitous opportunities. Dynamically orchestrate resource sucking scenarios after alternative synergy.

                    Compellingly envisioneer corporate methods of&nbsp;empowerment before standards compliant technologies. Objectively facilitate progressive. 
                </div>
        </div>
        <nav class="footer_company">
            <h4 class="footer_company_h4">COMPANY</h4>
            <ul>
                    <li class="footer_company_li">Home </li>
                    <li class="footer_company_li">Shop</li>
                    <li class="footer_company_li">About</li>
                    <li class="footer_company_li">How It Works</li>
                    <li class="footer_company_li">Contact</li>
            </ul>
        </nav>
        <nav class="footer_information">
            <h4 class="footer_company_h4">Information</h4>
                    <li class="footer_company_li">Tearms & Condition</li>
                    <li class="footer_company_li">Privacy Policy</li>
                    <li class="footer_company_li">How to Buy</li>
                    <li class="footer_company_li">How to Sell</li>
                    <li class="footer_company_li">Promotion</li>
            
        </nav>
            
        <nav class="footer_shop">
                <h4 class="footer_company_h4">Shop Category</h4>
                <li class="footer_company_li">Men</li>
                <li class="footer_company_li">Women</li>
                <li class="footer_company_li">Child</li>
                <li class="footer_company_li">Apparel</li>
                <li class="footer_company_li">Brows All</li>
        </nav>
    </div>
    <div class="footer_bottom">
        <div class="footer_bottom_content container">
            <h4 class="copyright">© 2017  Brand  All Rights Reserved.</h4>
            <div class="footer_socialLinks">
                    <a href="#" class="footer_bottomSocialLinkFacebookHref">
                        <div class="footer_bottomSocialLinkFacebook" >
                                <i class="fab fa-facebook-f"></i>
                        </div>
                    </a>
                    <a href="#" class="footer_bottomSocialLinkFacebookHref">
                            <div class="footer_bottomSocialLinkFacebook">
                                <i class="fab fa-twitter"></i>
                            </div>
                    </a>
                    <a href="#" class="footer_bottomSocialLinkFacebookHref" >
                        <div class="footer_bottomSocialLinkFacebook">
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href="#" class="footer_bottomSocialLinkFacebookHref" >
                        <div class="footer_bottomSocialLinkFacebook">
                            <i class="fab fa-pinterest-p"></i>
                        </div>
                    </a>
                    <a href="#" class="footer_bottomSocialLinkFacebookHref" >
                        <div class="footer_bottomSocialLinkFacebook">
                            <i class="fab fa-google-plus-g"></i>
                        </div>
                    </a>
            </div>
        </div>
    </div>
</footer>
`;

Vue.component('footer-comp',{
    template: footerComp
})