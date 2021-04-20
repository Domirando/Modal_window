'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const CloseModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
const OpenModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
for (let i = 0; i < btnsOpenModal.length; i++) 
    btnsOpenModal[i].addEventListener('click', OpenModal)

btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);
document.addEventListener('keydown', function(e){
  if (e.key==='Escape' && !modal.classList.contains('hidden')) {
      CloseModal();
    }
})