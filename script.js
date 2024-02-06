const button = document.querySelector('.meme-button')
const titlee = document.querySelector('.meme-title')
const imagee = document.querySelector('.meme-image')
const authorr = document.querySelector('.meme-author')

let generated = () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response) => response.json())
    .then((data) => {
        const { author, url } = data
        titlee.innerHTML = ``
        imagee.src = url
        authorr.innerHTML = `Meme by: ${author}`
    })
}
generated()  

button.addEventListener('click', () => {
    generated()
})