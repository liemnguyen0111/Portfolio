const buttons = document.querySelectorAll('.projectsBtn div')
const projects = [
    {
        type: 'Project',
        name: 'ESPACE',
        date: 'May 27th, 2020',
        description: 'Space is always expanding, so our knowledge keeps growing with it. Have fun on this site because there is always more to learn about our universe!',
        techList: 'HTML CSS JS REST-API',
        link: 'https://liemnguyen0111.github.io/eSPACE/index.html'
    },
    {
        type: 'Project',
        name: 'NotFaceBook',
        date: 'June 18th, 2020',
        description: 'This app allows to post/delete a post with email and youtube with embed URL links. Your Posts are only visible with your friends. Leave Real-time comments under posts. Make friends or un-friend status are updated in real-time.',
        techList: 'HTML CSS JS NodeJS Express SQL',
        link: 'http://n0tfacebook.herokuapp.com'
    },
    {
        type: 'Project',
        name: 'C A C H E',
        date: 'July 8th, 2020',
        description: 'CACHE is an online sales, auction, and bartering app. It combines the Auction and Buy-it-Now features of eBay, along with the open offer features of Craigslist.',
        techList: 'MongoDB Express React.js Node.js',
        link: 'https://uci-cache.herokuapp.com/'
    },
    {
        type: 'Activity',
        name: 'Workout Tracker !',
        date: 'July 8th, 2020',
        description: 'Starry Station android app feature that provided users with the ability to easily filter content, pause the internet, and even create custom rules for blocking apps like Facebook and Twitter right from their phones.',
        techList: 'HTML CSS JS NodeJS Express',
        link: 'https://uci-cache.herokuapp.com/'
    }

]

let current = 'Project'
let check = (button) =>
{       
            const linerAfter = document.querySelector('.liner')
            const btn = document.querySelector(`.${button.className}`)
            linerAfter.style.setProperty('--projectBtn', `none`)
            let left = btn.getBoundingClientRect().left 
            linerAfter.style.setProperty('--left', `${left - 50}px`)
            document.querySelector(`[data-name = ${current}]`).classList.add('btn-active')
}

buttons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {      
            if(button.dataset.name != current)
            {
                const linerAfter = document.querySelector('.liner')
                const btn = document.querySelector(`.${button.className}`)
                linerAfter.style.setProperty('--projectBtn', `none`)
                linerAfter.style.setProperty('--trans', `1s ease`)
                let left = btn.getBoundingClientRect().left 
                linerAfter.style.setProperty('--projectBtn', `projectsBtn 1s`)
                linerAfter.style.setProperty('--left', `${left - 50}px`)
                changeActive(button)
                show(button.dataset.name)   
            }
           
        })
    })

const changeActive = (button) =>
{
    document.querySelector(`[data-name = ${button.dataset.name}]`).classList.add('btn-active')
    document.querySelector(`[data-name = ${current}]`).classList.remove('btn-active')
    current = button.dataset.name
}

let show = (type) =>
{
    let info = projects.filter((project, acc) =>
        {
            return project.type === type
        })

    let content = document.querySelector('.projects-container')
    content.innerHTML = ``
    info.forEach((item, index) =>
        {
            let newNode = document.createElement('div')
            newNode.style.opacity = 0
            newNode.style.animation = `play 1s ease forwards ${index / 7 + .3}s`
            newNode.innerHTML = projectTemplate(item)
            content.appendChild(newNode)
        })
    
}    

let projectTemplate = (info) =>
{
    return ` 
    <div class="project">
    <div class="icons">
        <i class="far fa-folder folder"></i>
        <i class="fas fa-external-link-alt link"></i>
    </div>
    
    <div class="project-title">${info.name}</div>
    <div class="date">${info.date}</div>
    <div class="project-description">${info.description}</div>

    <div class="tech-list">
        <p>${info.techList}</p>
    </div>
    
    </div>
    `
}


window.addEventListener('resize', ()=>
{   
    const linerAfter = document.querySelector('.liner')
    const btn = document.querySelector(`[data-name = ${current}]`)
    linerAfter.style.setProperty('--projectBtn', `none`)
    let left = btn.getBoundingClientRect().left 
    linerAfter.style.setProperty('--trans', `none`)
    linerAfter.style.setProperty('--left', `${left - 50}px`)
})

check(buttons[0])
show('Project')