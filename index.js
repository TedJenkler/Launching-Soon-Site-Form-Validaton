let email = document.querySelector('#email')
let submitBtn = document.querySelector('#button-submit')
let errorText = document.querySelector('#errortext')
let form = document.querySelector('#form')

form.addEventListener('submit', (e) => {

    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(email.value === "" || !email.value.match(res)){
    e.preventDefault()
    errorText.classList.remove('errortext')
    email.removeAttribute('style')
}
else {
    email.addAttribute('style')
}
})