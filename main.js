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