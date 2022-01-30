import './components/FloatOption.js'
import './components/ButtonHamburger.js'

const navTitle = document.querySelector('.nav__title')
const hamburger = document.querySelector('.nav__btn')
const floatOption = document.querySelector('.floatOption')

let time = 0
let textTitle = navTitle.innerText
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

let isOpen = false
hamburger.addEventListener('click', () => {
  if (!isOpen) {
    isOpen = true
    hamburger.classList.add('hamburgerOpen')
    floatOption.classList.add('openFloat')
    setTimeout(printContentBoxFloat, 400)
  } else {
    isOpen = false
    hamburger.classList.remove('hamburgerOpen')
    floatOption.classList.remove('openFloat')
    floatOption.innerHTML = ''
    time = 0
    textTitle = navTitle.innerText
    navTitle.innerHTML = ''
    setTimeout(printTextTitleNav, 400)
  }
})
