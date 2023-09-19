const hamburguer = document.querySelector('.hamburguer')
const sideBar = document.querySelector('.sideBar')
const closex = document.querySelector('.close')
const clo = document.querySelector('.paich')

function openAndClose(){
if(sideBar.style.display == 'none'){
    sideBar.style.display ='block'
}else{
    sideBar.style.display ='none'
}
}
 
clo.addEventListener('click',openAndClose)
closex.addEventListener('click', openAndClose)  
hamburguer.addEventListener('click', openAndClose)