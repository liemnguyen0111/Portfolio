const buttons = document.querySelectorAll('.projectsBtn div')

let check = (button) =>
{
            
            const linerBefore = document.querySelector('.liner')
            const body = document.body.getBoundingClientRect()
            const btn = document.querySelector(`.${button.className}`)
            linerBefore.style.setProperty('--projectBtn', `none`)
            let left = btn.getBoundingClientRect().left - body.left
            linerBefore.style.setProperty('--left', `${left - 50}px`)
}

check(buttons[0])
buttons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {
            const linerBefore = document.querySelector('.liner')
            const body = document.body.getBoundingClientRect()
            const btn = document.querySelector(`.${button.className}`)
            linerBefore.style.setProperty('--projectBtn', `none`)
            linerBefore.style.setProperty('--trans', `1s ease`)
            let left = btn.getBoundingClientRect().left - body.left
            linerBefore.style.setProperty('--projectBtn', `projectsBtn 1s`)
            linerBefore.style.setProperty('--left', `${left - 50}px`)
        })
    })


