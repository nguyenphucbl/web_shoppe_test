let modal = document.querySelector('.modal');
let btnRegister = document.querySelector('.header__navbar-item.register');
let btnLogin = document.querySelector('.header__navbar-item.login');
let closeModalOverlay = document.querySelector('.modal__overlay');
let btnsCloseModal = document.querySelectorAll('.auth-form__controls-back');
let formRegister = document.querySelector('.auth-form__register');
let formLogin = document.querySelector('.auth-form__login')
function toggleModal() {
    modal.classList.toggle('active-modal')
}
if (!formLogin.classList.contains('disable')){

    btnRegister.addEventListener('click', function() {
        
        toggleModal()
        formLogin.classList.add('disable');
        formRegister.classList.remove('disable');
    });
}
if(!formRegister.classList.contains('disable')) {

    btnLogin.addEventListener('click', function() {
        toggleModal()
        formRegister.classList.add('disable');
        formLogin.classList.remove('disable');
    });
}
closeModalOverlay.addEventListener('click', function () {
    modal.classList.toggle('active-modal')
})
for(let btnCloseModal of btnsCloseModal){

    btnCloseModal.addEventListener('click',toggleModal);
}
