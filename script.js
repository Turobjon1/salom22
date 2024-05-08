let h1 = document.getElementById('h1')
let body = document.querySelector('body')

let num = Math.round(Math.random()*100)

h1.style.color = 'white'

body.style.backgroundColor = 'black'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.height = '100vh'

h1.textContent = num

