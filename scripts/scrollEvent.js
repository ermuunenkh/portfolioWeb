const headerHeight = document.querySelector('header').offsetHeight;

const homeLink = document.querySelector('a[href="#home"]');
const homeSection = document.querySelector('#home');

const multiplier = 1.5;

homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionTop = homeSection.getBoundingClientRect().top;
    const offset = sectionTop - headerHeight * multiplier;
    window.scrollBy({
        top: offset,
        behavior: 'smooth'
    });
});

const aboutLink = document.querySelector('a[href="#about"]');
const aboutSection = document.querySelector('#about');

aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const offset = sectionTop - headerHeight * multiplier;
    window.scrollBy({
        top: offset,
        behavior: 'smooth'
    });
});

const experienceLink = document.querySelector('a[href="#experience"]');
const experienceSection = document.querySelector('#experience');

experienceLink.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionTop = experienceSection.getBoundingClientRect().top;
    const offset = sectionTop - headerHeight * multiplier;
    window.scrollBy({
        top: offset,
        behavior: 'smooth'
    });
});

const certificateLink = document.querySelector('a[href="#certificate"]');
const certificateSection = document.querySelector('#certificate');

certificateLink.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionTop = certificateSection.getBoundingClientRect().top;
    const offset = sectionTop - headerHeight * multiplier;
    window.scrollBy({
        top: offset,
        behavior: 'smooth'
    });
});

const contactLink = document.querySelector('a[href="#contact"]');
const contactSection = document.querySelector('#contact');

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionTop = contactSection.getBoundingClientRect().top;
    const offset = sectionTop - headerHeight * multiplier;
    window.scrollBy({
        top: offset,
        behavior: 'smooth'
    });
});