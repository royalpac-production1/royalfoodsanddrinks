// select all filter buttons and filterablr cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

function handleSelection(element) {
    element.classList.toggle("selected");
}

//Define the filtercards function
const filterCards = e => {
    document.querySelector(".actives").classList.remove("actives");
    e.target.classList.add("actives");
    //iterate over each filterable card
    filterableCards.forEach(card => {
        //add "hide" class to hide the card initially
        card.classList.add("hide");
        //click if the card matches the selected filter or "all" is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
            card.classList.remove("hide");
        }

    });

};

//Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));

/*============top scroll images================*/
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// javascipt for image slider manual navigatin
var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// javascript image slider autoplay navigation
var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            })

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;

            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();
//---------scroll reveal------------

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
    strings: ['Royalpac', 'About Us'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true


});


const typed2 = new Typed('.text', {
    strings: ['Royalpac is a company which has been in connection with much companies in production of beverrages , candies, snacks an much more and deals with import and export of its product within nebouring countries'],
    typeSpeed: 50,

    loop: true


});

const typed1 = new Typed('.multiple-text2', {
    strings: ['Royalpac', 'Our brands'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true


});


//cookies section
const cookieBox = document.querySelector(".cookies");
buttons = document.querySelector(".cook-button");

console.log(cookieBox, buttons);



//reply
const submitBtn = document.querySelector('.submit_btn')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.heart_icon')
const count = document.querySelector('.count')
const commensCont = document.querySelector('.comments_container')

likeIcon.addEventListener('click', likeVideo)
submitBtn.addEventListener('click', submitFeedback)

feedbackArr = {}
let positivFeedback = false
let likesCount = 0

function submitFeedback(e) {
    // get user name
    const userForm = userName.value
        //get feedback
    const commentForm = comment.value
        //if input are not empty
    if (userForm && commentForm !== '') {
        //create new feedback
        newfeedback = {
                "id": Math.floor((Math.random() * 1000) + 1),
                "userName": userForm,
                "userComment": commentForm,
                "typeoffeedback": positiveFeedback
            }
            //add new feedback to array
        feedbackArr.push(newfeedback)
        console.log(newfeedback)
    }
}

function likeVideo() {
    likeIcon.classList.toggle('liked')

    if (likeIcon.classList.toggle('liked')) {
        likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
            //set positive feedback to liked
        positivFeedback = true
    } else {
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`
            // set feedback to not liked
        positivFeedback = false
    }
}