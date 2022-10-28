let start = document.getElementById('start')

let red = document.getElementById('rouge')
let blue = document.getElementById('bleu')
let green = document.getElementById('vert')
let yellow = document.getElementById('jaune')

let button = document.getElementById('jaaj')

button.addEventListener('click', () => {
    red.style.transform = "rotate(45deg)"
    blue.style.transform = "rotate(45deg)"
    green.style.transform = "rotate(45deg)"
    yellow.style.transform = "rotate(45deg)"
})

red.addEventListener('click', () => {
    start.innerHTML ="VOUS AVEZ CLIQUÉ SUR LE CARRÉ ROUGE"
    red.style.transform = "rotate(180deg)"
})

blue.addEventListener('click', () => {
    start.innerHTML ="VOUS AVEZ CLIQUÉ SUR LE CARRÉ BLEU"
    blue.style.transform = "rotate(180deg)"
})


green.addEventListener('click', () => {
    start.innerHTML ="VOUS AVEZ CLIQUÉ SUR LE CARRÉ VERT"
    green.style.transform = "rotate(180deg)"
})


yellow.addEventListener('click', () => {
    start.innerHTML ="VOUS AVEZ CLIQUÉ SUR LE CARRÉ JAUNE"
    yellow.style.transform = "rotate(180deg)"
})










