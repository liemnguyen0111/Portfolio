const container = document.querySelector('.achievement')
const card = document.querySelector('.card')

const title = document.querySelector('.card p')
const img = document.querySelector('.card img')

$('.card').mousemove( e =>
{
 
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25
        console.log(card)
      e.target.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

$('.card').mouseenter( e =>
        {
               e.target.style.transition = "none"
               title.style.transform = 'translateZ(50px)'
               img.style.transform = 'translateZ(50px)'
        })

$('.card').mouseleave( e =>
        {
                e.target.style.transition = "all 0.5s ease"
                e.target.style.transform = `rotateY(0deg) rotateX(0deg)`

                title.style.transform = 'translateZ(0px)'
                img.style.transform = 'translateZ(0px)'
        })