let searchForm = document.querySelector('.header .flex .search-form');

let searchToggler = document.querySelector('#search-toggler');

searchToggler.onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
}
