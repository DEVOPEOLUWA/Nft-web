let searchForm = document.querySelector('.search-form');
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let like  = document.querySelector('.like');

like.onclick = () =>{
 let element = document.getElementById('incrementText');

let value = element.innerHTML;

++value;

document.getElementById('incrementText').innerHTML = value
}
menu.onclick = () =>{

 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
 searchForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
 searchForm.classList.toggle('active');
 navbar.classList.remove('active');
}
window.onscroll = () =>{
 searchForm.classList.remove('active');
 navbar.classList.remove('active');

}
