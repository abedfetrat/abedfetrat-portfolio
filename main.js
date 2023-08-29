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

// Set navbar active link based on which section is in view
const navLinks = document.querySelector(".primary-nav__links");
const pageSections = document.querySelectorAll("section");
pageSections.forEach((el) => addObserver(el, { rootMargin: '-50% 0% -20% 0%' }, (entry) => {
    if (entry.isIntersecting) {
        const section = entry.target.id;
        navLinks.querySelectorAll(".primary-nav__link").forEach(el => el.classList.remove("active"));
        navLinks.querySelector(`a[href='#${section}']`).classList.add("active");
    }
}));

// Animate projects and contact section when scrolled into view
scrollTrigger();

function scrollTrigger() {
    const projectSectionHeading = document.querySelector('.projects__heading');
    addObserver(projectSectionHeading, { threshold: 1.0 }, cb);
    const projects = [...document.querySelectorAll('.project')];
    projects.forEach(el => addObserver(el, { threshold: 0.2 }, cb));
    const moreBtn = document.querySelector('.projects__more');
    addObserver(moreBtn, { threshold: 1.0 }, cb);
    const contactSection = document.querySelector('#contact');
    addObserver(contactSection, { threshold: 0.6 }, cb);

    function cb(entry, observer) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            observer.unobserve(entry.target);
        }
    }
}

function addObserver(el, opt, cb) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => cb(entry, observer))
    }, opt);
    observer.observe(el);
}