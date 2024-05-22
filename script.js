const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#ham-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


//klik diluar sidebar buat ngilangin nav

const hamburger = document.querySelector('#ham-menu');
document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})