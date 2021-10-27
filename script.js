

let text = document.querySelector('.text-form');
let textBtn = document.getElementById('text-form-btn');
let textBtn2 = document.getElementById('text-form-btn2');
let text2 = document.querySelector('.text-form2');
let formBtnValid = document.getElementById('form-btn-valid');
let inputs = document.querySelectorAll('input');

textBtn.addEventListener('click', ()=> {
    text.innerText = text.innerText.replace(/\'/g, "\"");
})

textBtn2.addEventListener('click', ()=> {
    text2.innerText = text2.innerText.replace(/\B'/g, ' " ');
})

let validData = [[/^[a-zA-Z]/], [/^[+][7][(][0-9]{3}[)][0-9]{3}[ -][0-9]{4}$/], [/^[a-z]{6}@[a-z]{4}[\.][a-z]{2}$/], [/^[a-zA-ZА-Яа-я]/]]


	
formBtnValid.addEventListener('click', (event)=> {
    event.preventDefault();
    inputs.forEach((input, index) => {
        if(!validate(input.value, validData[index])){
            input.value = '';
            input.placeholder = 'Некорректные данные!';
            input.style.border = '3px solid red'; 
        }else{
            input.style.color = '#222224';
            input.value = '';
            input.value = 'Форма принята';
        } 
    })
})

function validate(input, regex){
    return regex[0].test(input)
}





