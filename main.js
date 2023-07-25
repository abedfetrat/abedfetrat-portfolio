// Add background to navbar when scroll past certain threshold
const nav = document.querySelector('.primary-nav');
const offset = nav.offsetTop;
window.onscroll = () => {
    if (window.scrollY > offset) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};