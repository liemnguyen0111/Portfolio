const carouselSlide = document.querySelector('.carousel-slide')
const carouselImage = document.querySelectorAll('.carousel-slide a')
const images = document.querySelectorAll('.carousel-slide a img')
const feturbulence = document.querySelector('feturbulence')

// Buttons
let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')

// Counter
let counter = 1
let size = carouselImage[0].clientWidth

carouselSlide.style.transform = `translateX(${-size * counter}px)`

// Auto slide
let auto = null
let autoRun = () =>
{
    clearInterval(auto)
    auto = setInterval(() => {
        counter++

        if(counter > carouselImage.length)
        {
            counter = 1
        }

        carouselSlide.style.transition = 'transform 0.4s ease-in-out'
        carouselSlide.style.transform = `translateX(${-size * counter}px)`
    }, 4000);
}

autoRun()

let temporaryStop = () =>
{
    setTimeout(() => {
        autoRun()
    }, 2000);
}

prevBtn.addEventListener('click', e =>
{

    temporaryStop()
    if(counter <= 0) return

    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter--
    carouselSlide.style.transform = `translate(` + (-size * counter) + 'px'
})

nextBtn.addEventListener('click', e =>
{

    temporaryStop()
    if(counter >= carouselImage.length - 1) return

    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter++
    carouselSlide.style.transform = `translate(` + (-size * counter) + 'px'
})

carouselSlide.addEventListener('transitionend', () =>
{
    if(carouselImage[counter].id && carouselImage[counter].id === 'lastClone')
    {
        carouselSlide.style.transition = 'none'
        counter = carouselImage.length - counter
        carouselSlide.style.transform = `translate(` + (-size * counter) + 'px'
    }

    if(carouselImage[counter].id && carouselImage[counter].id === 'firstClone')
    {
        carouselSlide.style.transition = 'none'
        counter = carouselImage.length - 2
        carouselSlide.style.transform = `translate(` + (-size * counter) + 'px'
    }
})


window.addEventListener('resize', ()=>

{   
    // carouselSlide.style.transition = 'none'
    size = carouselImage[0].clientWidth
    carouselSlide.style.transform = `translate(` + (-size * counter) + 'px'
})