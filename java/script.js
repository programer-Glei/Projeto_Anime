let searchForm = document.querySelector('.header .flex .search-form');

let searchToggler = document.querySelector('#search-toggler');

searchToggler.onclick = () =>{
    searchForm.classList.toggle('active');
}

let header = document.querySelector('.header');

window.onscroll = () =>{
    searchForm.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');
let sideBar = document.querySelector('.side-bar');
let navbar = document.querySelector('.side-bar .navbar');

menuBtn.onclick = () =>{
    sideBar.classList.add('active');
}