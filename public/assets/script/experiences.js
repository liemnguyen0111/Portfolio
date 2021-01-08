let compListBtn = []

const companies = [
    {
        name: 'UCI - Division of Continuing Education (Bootcamp)',
        range: 'April 2020 - July 2020 * 3 mos',
        subOpening :  
        `Full-time web developer training program with key skills for web 
        development, including:`,
        description: [
            `Computer Science applied to JavaScript`,
            `Databases (MySQL, MongoDB)`,
            `Server Side Development (MERN Stack, Progressive Web Applications)
            Browser Based Technologies (HTML5, CSS, JavaScript, jQuery, Bootstrap)`,
            `Deployment/Command-Line Fundamentals (Heroku, Git)`,
            `API Interaction (API, JSON, AJAX)`,
            `Quality Assurance (Unit Testing)`,
        ],
        link: 'https://bootcamp.ce.uci.edu/coding/'
    },
    {
        name: 'POWER Engineers',
        range: 'October 2018 - March 2020 * 1 yr 6 mos',
        description: [
            `
            Drafting on substation projects that include physical and civil layout drawings as well as schematics and wiring diagrams.`,
            `Prepare new drawings and revise existing engineering drawings of basic components from specific sketches or layouts.`,
            `Responsible for adhering to company and client drafting standards and procedures.`,
            `Assist in drafting design and documentation for various projects.`,
            `Assist with tasks utilizing standard drafting detail programs.`,
            `Assist in continuous drafting detail improvement efforts.`
        ],
        link: 'https://www.powereng.com/',
        style: {
            color : 'red'
        }
    },
    {
        name: 'F.J.S. Cable Engineering, INC.',
        range: 'Febuary 2018 - Nov 2018 * 10 mos',
        description: [
            `Communicate with customers and supervisor to determine technical requirements regarding new project for preliminary cable design.`,
           `Produce drawings using computer assisted drafting systems (CAD).`,
            `Possible design in the underground environment such as manholes, handholes, and pedestals to place fiber cable through conduit and various access points.`,
            `Engineer in the public right of way and on private property for the prevention of conflict with existing facilities.`,
            `Draft plans and detailed drawings for structures, installations, and construction projects.`,
            `Review rough sketches, drawings, specifications, and other engineering data received from civil engineers to ensure that they conform to design concepts.`,
            `Gathering maps and documents (Property maps, utilities maps, and substructure maps) to prepare construction drawing per AT&T and CenturyLink standards.`,
            `Requesting substructure maps from cities if needed.`,
            `Log in new job requests from AT&T, CenturyLink. Charter and CrownCastle.`,
            `Training new employees on standards and layouts.`,
            `Verity if traffic controls are required.`,
            `Estimate quantity of underground materials and inside plants for CenturyLink.`
        ],
        link: 'https://www.fjscable.com/'
    },
    {
        name: 'Orange Coast College',
        range: 'September 2015 - December 2017 * 2 yr 3 mos',
        description: [
            `Undergraduate major in Computer Science.`
        ],
        link: 'https://prod.orangecoastcollege.edu/'
    }

]

let compCurrent = 'UCI',
    currentHeight = 0

    let eCheck = (button, index) =>
    {       
        const vLine = document.querySelector('.vertical-line2')
        let mTop = getElmTop(button)
        vLine.style.margin = `${getAllPrevBtnHeight(index) + mTop}px 0 0 0`
        changeActive(button.dataset.name,compCurrent)
        compCurrent = button.dataset.name        
    }

    
    function getElmHeight(node) {
        const list = [
            'margin-top',
            'margin-bottom',
            'border-top',
            'border-bottom',
            'padding-top',
            'padding-bottom',
            'height'
        ]
    
        const style = window.getComputedStyle(node)
        return list
            .map(k => parseInt(style.getPropertyValue(k), 10))
            .reduce((prev, cur) => prev + cur)
    }

    function getElmTop(node) {
        const list = [
            'margin-top'
        ]
    
        const style = window.getComputedStyle(node)
        return list
            .map(k => parseInt(style.getPropertyValue(k), 10))
            .reduce((prev, cur) => prev + cur)
    }

    let getAllPrevBtnHeight = (index) =>
    {
        let sum = 0
        for(let i = 0; i < index; i++)
        {
            sum += getElmHeight(compListBtn[i])
        }
        return sum
    }

let eShow = (comp) =>
{
    let compInfo = document.querySelector('.company-info')
    compInfo.innerHTML = ``
    compInfo.innerHTML = eTemplate(comp)
    let li = document.querySelectorAll('.work-description ul li')
    li.forEach((item, index) =>
    {
        item.style.opacity = '0'
        item.style.animation = `txtPlay .1s ease forwards ${index / 7 + .4}s`
    })
}    

let genCompList = (list) =>
{
    let compList = document.querySelector('.company-list')
    list.forEach((item, index) =>
    {
        let newNode = document.createElement('div')
        newNode.className = `Btn${index}`
        let name = item.name.split(' ')[0].replace(/\./g, "")
        newNode.dataset.name = name
        newNode.innerHTML = name !== 'UCI'? item.name : name
        compList.appendChild(newNode)
    })
    compCurrent = companies[0].name.split(' ')[0]
    compListBtn = document.querySelectorAll('.company-list div')
    console.log(compListBtn[0])
    eCheck(compListBtn[0],0)
    eEventListener()
}

const eTemplate = (info) =>
{
    
    let temp = info.name.split(' ')
    temp = (temp[0] === 'POWER'? `<span style='color:red'>POWER</span> Engineers` : '')

    return `

    <div class="company-title">${temp? temp : info.name}</div>
    <div class="range date">${info.range}</div>

    <div class="work-description">
        <ul>
        ${
            info.description.reduce((acc, d, i) =>
            {
                return acc += `<li> ${d} </li>`
            },'')
        }
          
        </ul>
    </div>
    
`
}


let eEventListener = () =>
{
    compListBtn.forEach( (button, index) => 
    {
        button.addEventListener('click', e =>
        {
            if(button.dataset.name != compCurrent)
            {
                let compInfo = document.querySelector('.company-info')
                compInfo.style.setProperty('--compPlay', `none`)
                let v2 = document.querySelector('.vertical-line2')
                v2.style.transition = '1s ease'    
            
                eCheck(button, index)
               
                eShow(companies[index])
                
                compInfo.style.setProperty('--currentHeight', `${currentHeight}px`)
                compInfo.style.setProperty('--newHeight', `${getElmHeight(compInfo)}px`)
               
                currentHeight = getElmHeight(compInfo)

                compInfo.style.setProperty('--compPlay', `compPlay .5s ease`)
             
            }
        })
    })
}

genCompList(companies)
eShow(companies[0])


