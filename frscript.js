/*================Scroll reveal=======================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.navbar, .logo , .text h1 , .tomy-logo-image img ,.sec h2, .about-heading h1', { origin: 'top' });
ScrollReveal().reveal('.containe h2,  .products-content-tomy, ', { origin: 'bottom' });
ScrollReveal().reveal('.main h2  img, .about-button, .about-about-image img', { origin: 'left' });
ScrollReveal().reveal('.aboutus p, .info p ', { origin: 'right' });

/*===============typed js=======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Royalpac', 'À propos de nous'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true


});


const typed2 = new Typed('.text', {
    strings: ['Royalpac est une société de fabrication d'importation et d'exportation qui s'occupe de l'importation de confiseries, de fabrication de boissons et de collations dans trois zones géographiques. Il est basé au Togo, en Nigeria et en République du Bénin car il est le leader du marché dans ces pays respectivement.'],
    typeSpeed: 50,

    loop: true


});
