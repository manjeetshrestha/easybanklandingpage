const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('#header')
const modal = document.querySelector('#menu_cont')
const body = document.querySelector('body')

btnHamburger.addEventListener('click',function(){
    console.log("I have been clicked");
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');
        header.classList.remove('open');
        modal.classList.add('hidden');
        body.classList.remove('scroll-lock');
    }
    else{
        btnHamburger.classList.add('open');
        header.classList.add('open');
        modal.classList.remove('hidden');
        body.classList.add('scroll-lock');
    }
    
})
