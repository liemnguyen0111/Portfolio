const menu = document.querySelector('.menu')
let open = false
document.addEventListener('click', e =>
{
        e.preventDefault()
        if(e.target.name === 'menu')
        {
                console.log('clicked')
                if(open)
                {
                        open = false
                        menu.style.display = 'none'
                }
                else
                {
                        open = true
                        menu.style.display = 'block'
                }
                
        }
        else
        {
                open = false
                menu.style.display = 'none'
        }
})