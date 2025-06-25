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
