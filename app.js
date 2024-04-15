const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__container');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menuLinks.addEventListener('click', mobileMenu);

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');

    mobileMenuButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        this.classList.toggle('is-active');
    });
});

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
}

if (window.innerWidth > 960 && scrollPos < 600 ) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
}
else if(window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
}
else if(window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
}
else if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
}
    mobileMenu();

menu.addEventListener('scroll', highlightMenu);
menu.addEventListener('click', highlightMenu); 
    
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

    document.addEventListener('DOMContentLoaded', function () {
        const mobileMenuButton = document.getElementById('mobile-menu');
        const navbarMenu = document.querySelector('.navbar__menu');

        mobileMenuButton.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');
            this.classList.toggle('is-active');
        });
    });

$('.resume-form').on('click', function(){
    $('#nameid').val('');
    $('#emailid').val('');
    $('#subjectid').val('');
    $('#messageid').val('');
})
