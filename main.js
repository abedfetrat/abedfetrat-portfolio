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

// Animate projects when scrolled into view
const projects = [...document.querySelectorAll('.project')];
projects.forEach(el => addObserver(el, {threshold: 0.2}));
const moreBtn = document.querySelector('.projects__more');
addObserver(moreBtn, {threshold: 1.0});

function addObserver(el, opt) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
                observer.unobserve(entry.target);
            }
        })
    }, opt);
    observer.observe(el);
}