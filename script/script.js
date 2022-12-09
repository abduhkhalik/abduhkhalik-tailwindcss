// AOS
AOS.init();


// GSAP
gsap.from(".body-intro1 img", {
    rotationY: 360,
    duration: 1.2,
    opocity: 0,
    ease: "bounce"
});

gsap.from(".navbar", {
    duration: 1.2,
    opocity: 0,
    y: -100,
    ease: "bounce"
});

// Contact Form GoogleSpreed
const scriptURL = 'https://script.google.com/macros/s/AKfycbyNJ8RMpwOA5aHqZQsyFcoLZGVwMCvY_7YrqenR1u0k7SlWaSgEsfWujBMnHkn-buBAuw/exec'
const form = document.forms['Abduh-Khalik-Contact-Form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})