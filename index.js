burger = document.querySelector('.burger')
header = document.querySelector('.header')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')

burger.addEventListener('click' , ()=>{
    header.classList.toggle('h-res')
    navbar.classList.toggle('vclass')
    logo.classList.toggle('vclass')
})
