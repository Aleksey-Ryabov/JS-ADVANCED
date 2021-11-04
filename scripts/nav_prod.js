'use strict';


let inputPriceFrom = document.querySelector('.products_right_head_price_text_p');
let productsLeftButtons = document.querySelectorAll('.products_left_nav');


productsLeftButtons.forEach((button)=>{
	button.addEventListener('click',(event)=>{
		if(event.currentTarget.nextElementSibling.style.display == 'none' || event.currentTarget.nextElementSibling.style.display == ''){
			event.currentTarget.nextElementSibling.style.display = 'flex';
		}else{
			event.currentTarget.nextElementSibling.style.display = 'none'
		}
	})
})