// Reserve class burger into burger variable for on click handler
let burger = document.querySelector('.burger')
const links = document.querySelector('.menu')
const navLinks = document.querySelectorAll('.nav-links li')

// Event listener when click on burger menu
burger.addEventListener('click', () =>
{
  toggle()
})

let toggle = () =>
{
    burger.classList.toggle('toggle')
    links.classList.toggle('nav-active')

       // Check and add/remove animation effects for each link
       navLinks.forEach((link , index) =>
       {
           if(link.style.animation )
           {
               link.style.animation = ''
           }
           else
           {
               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .2}s`
           }
       
       })

}

let menu = document.querySelector('.menu')
let menuclick = 0
let anyclick = 0

document.addEventListener('click', e =>
{
    console.log(e.target)
})

let clickccheck = () =>
{
    if(anyclick - menuclick > 1)
    {
        menuclick = 0
        anyclick = 0
        toggle()
    }
    else
    {
        anyclick++
    }
}