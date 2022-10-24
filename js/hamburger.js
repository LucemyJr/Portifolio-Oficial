const btnMobile = document.getElementById('btn-mobile')
const menuOption1 = document.getElementById('menuOption1')
const menuOption2 = document.getElementById('menuOption2')
const menuOption3 = document.getElementById('menuOption3')
const menuOption4 = document.getElementById('menuOption4')
const nav = document.getElementById('nav')

function toggleMenu(){
    nav.classList.toggle('active') 
}
function toggleMenu1(){
    nav.classList.toggle('active') 
}
function toggleMenu2(){
    nav.classList.toggle('active') 
}
function toggleMenu3(){
    nav.classList.toggle('active') 
}
function toggleMenu4(){
    nav.classList.toggle('active') 
}

btnMobile.addEventListener('click', toggleMenu)
menuOption1.addEventListener('click', toggleMenu1)
menuOption2.addEventListener('click', toggleMenu2)
menuOption3.addEventListener('click', toggleMenu3)
menuOption4.addEventListener('click', toggleMenu3)
