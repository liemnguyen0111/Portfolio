document.getElementById('contact-form').addEventListener('submit', e =>
{
    e.preventDefault()
    console.log(
        e.target.firstName.value,
        e.target.lastName.value,
        e.target.email.value,
        e.target.phone.value,
        e.target.message.value
        )

        e.target.reset()
        let div = document.querySelectorAll('.contact-form div')
        div[0].innerHTML = 'Thank you, your message has been sent !'
        div[0].style.animation = 'compPlay 1s'
        div[1].style.opacity = 0
        console.log(div[0])
})
