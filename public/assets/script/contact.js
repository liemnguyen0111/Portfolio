
document.getElementById('contact-form').addEventListener('submit', e =>
{
    e.preventDefault()
    let info = {
        firstName:   e.target.firstName.value,
        lastName:  e.target.lastName.value,
        company : e.target.company.value,
        email : e.target.email.value,
        phone:   e.target.phone.value,
        message : e.target.message.value,
    }

    
    if(!required())
    {
          document.querySelector('.loader').style.display = 'block'
    let div = document.querySelectorAll('.contact-form div')
    // div[0].innerHTML = `<img src="./assets/testimage/91.gif" alt="">`
    div[1].style.opacity = 0
        axios.post("/send", info)
        .then( () =>
            {
                document.querySelector('.loader').style.display = 'none'
                div[0].innerHTML = 'Thank you, your message has been sent !'
                div[0].style.animation = 'compPlay 1s'
                e.target.reset()
            })
        .catch( err =>
            {
                console.log(err)
            })
    }

})

let required = () =>
{
    let required = document.querySelectorAll('.required')
    let notFill = false
    required.forEach( item =>
        {
            if(item.value)
            {
                item.classList.remove('not-fill')
            }
            else
            {
                item.classList.add('not-fill')
                notFill = true
            }
            
        })

        return notFill
}
