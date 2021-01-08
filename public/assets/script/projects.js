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
        description: 'As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.',
        techList: 'HTML CSS JS NodeJS Express',
        link: 'https://uci-cache.herokuapp.com/'
    }

]

let current = 'Project'

buttons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {      
            if(button.dataset.name != current)
            {
                const linerAfter = document.querySelector('.liner')
                const btn = document.querySelector(`.${button.className}`)
                linerAfter.style.setProperty('--projectBtnAfter', `none`)
                linerAfter.style.setProperty('--trans', `1s ease`)
                let left = btn.getBoundingClientRect().left 
                linerAfter.style.setProperty('--projectBtnAfter', `projectBtnAfter 1s ease-out`)
                linerAfter.style.setProperty('--left', `${left - 50}px`)
                changeActive(button.dataset.name,current)
                current = button.dataset.name
                pShow(button.dataset.name)   
            }
           
        })
    })

const changeActive = (button, c) =>
{
    document.querySelector(`[data-name = ${c}]`).classList.remove('btn-active')
    document.querySelector(`[data-name = ${button}]`).classList.add('btn-active')
}

let pShow = (type) =>
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
            newNode.innerHTML = pTemplate(item)
            content.appendChild(newNode)
        })
    
}    

let pTemplate = (info) =>
{
    return ` 
    <div class="project">
    <div class="icons">
        <i class="far fa-folder folder"></i>
        <a target='_blank' href='${info.link}'><i class="fas fa-external-link-alt link"></i></a>
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

let pCheck = () =>
{       
    const linerAfter = document.querySelector('.liner')
    const btn = document.querySelector(`[data-name = ${current}]`)
    linerAfter.style.setProperty('--projectBtnAfter', `none`)
    let left = btn.getBoundingClientRect().left 
    linerAfter.style.setProperty('--trans', `none`)
    linerAfter.style.setProperty('--left', `${left - 50}px`)    

}

window.addEventListener('resize', ()=>
{   
    pCheck()
})

pCheck()
pShow('Project')