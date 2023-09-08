const scriptURL = 'https://script.google.com/macros/s/AKfycbxvr7oMmdTSqrPG6xKY6zNe9__Z9UjdoLS_yEGh9SMAcohasUag0TuCmnvpau94Ea2PRA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thanks for subscribing"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})