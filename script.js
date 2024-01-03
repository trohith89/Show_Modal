'use strict';


let btnOpenModal = document.querySelectorAll('.show-modal');
let btnCloseModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');



for(let i=0; i<btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

btnCloseModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})