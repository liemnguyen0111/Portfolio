let text = `I'm a Software Engineer & Designer`
// text.style.opacity = 0
// text.innerHTML = `<span>I</span><span>'</span><span>m</span><span> </span>` 
// text = 'I am a Software Engineer & Designer'
// console.log(text)
text.split('').forEach((t, index) =>
    {
        let newNode = document.createElement('span')
        let newNode1 = document.createElement('div')
        newNode1.style.animation = `textPlay .2s ease-in-out forwards ${index / 7 + .3}s`
        newNode1.style.opacity = 0
        newNode1.innerHTML = t
        newNode = newNode1
        document.querySelector('.third-line').appendChild(newNode)
    })
// info.forEach((item, index) =>
// {
//     let newNode = document.createElement('div')
//     newNode.style.opacity = 0
//     newNode.style.animation = `play 1s ease forwards ${index / 7 + .3}s`
//     newNode.innerHTML = pTemplate(item)
//     content.appendChild(newNode)
// })