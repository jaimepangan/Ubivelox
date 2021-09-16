const mobileNav = document.getElementById('mobileNav');
const mobileNavList = document.getElementById('mobileNavList');

const aboutLi = document.getElementById('about-li')
const clientsLi = document.getElementById('clients-li')
const catalogLi = document.getElementById('catalog-li')
const contactLi = document.getElementById('contact-li')
const quoteLi = document.getElementById('quote-li')

const openList = () => {
    mobileNavList.classList.toggle('mobile-active');
    aboutLi.classList.toggle('about-li-active');
    clientsLi.classList.toggle('clients-li-active');
    catalogLi.classList.toggle('catalog-li-active');
    contactLi.classList.toggle('contact-li-active');
    quoteLi.classList.toggle('quote-li-active');
}

mobileNav.onclick = openList;