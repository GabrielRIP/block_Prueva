import './components/ButtonHamburger.js'
import './components/FloatOption.js'

const nav = document.querySelector('.nav')
const navTitle = document.querySelector('.nav__title')
const floatOption = document.querySelector('.floatOption')

const textTitle = navTitle.innerText
let time = 0
function printTextTitleNav () {
  if (time < textTitle.length) {
    navTitle.innerHTML += textTitle.charAt(time)
    time++
    setTimeout(printTextTitleNav, 150)
  }
}
navTitle.innerHTML = ''
printTextTitleNav()

function printContentBoxFloat () {
  floatOption.innerHTML = '<float-option></float-option>'
}

nav.addEventListener('isOpen', (e) => {
  const data = e.detail

  if (data === true) {
    floatOption.classList.add('openFloat')
    setTimeout(printContentBoxFloat, 400)
  } else {
    floatOption.classList.remove('openFloat')
    floatOption.innerHTML = ''
    time = 0
    navTitle.innerHTML = ''
    setTimeout(printTextTitleNav, 400)
  }
})
