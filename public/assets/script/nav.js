// Reserve class burger into burger variable for on click handler
let burger = document.querySelector('.burger')
const links = document.querySelector('.menu')
const navLinks = document.querySelectorAll('.navlinks li')
  
burger.addEventListener('click', () =>
{
  toggle()
})

let toggle = () =>
{

    if(burger.classList.toggle('toggle'))
    {
        console.log('toggle')
        links.style.display = 'flex' 
        links.style.setProperty('--nHeight', `${getElmHeight(links)}px`)
        links.style.animation = 'menu 1s ease'
    }
    else
    {
        links.style.animation = 'none'
        links.style.display = 'none'      
    }
    // links.style.display = 'flex'
    
    // console.log(getElmHeight(links))
    // navLinks1.style.setProperty('--nHeight', `${getElmHeight(links)}px`)

    // navLinks1.style.setProperty('--cHeight', `0px`)
    // navLinks1.classList.toggle('nav-active')

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

let navbar = document.querySelector('.wrapper')

navbar.addEventListener('click', e =>
{
    // console.log('toggle click click')
    burger.classList.remove('toggle')
    links.style.animation = 'none'
    links.style.display = 'none'   
})


window.addEventListener('resize', () =>
{
    console.log(window.innerWidth)
    if(window.innerWidth > 650)
    {
        burger.classList.remove('toggle')
        links.style.display = 'flex'   
    }
    else
    {
        console.log('less than 650')
        burger.classList.remove('toggle')
        links.style.animation = 'none'
        links.style.display = 'none'   
    }
})
