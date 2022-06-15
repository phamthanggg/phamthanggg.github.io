//CARD
const introCardList = document.querySelectorAll(".intro__card")
const introRadio = document.querySelectorAll('.intro-radio')
for (let radio of introRadio) {
     radio.onchange = function handleRadioClick() {
          for (let card of introCardList) {
               if (card.matches('.intro__card--current')) {
                    card.classList.remove('intro__card--current')
               }}
          introCardList[radio.value].classList.add('intro__card--current')
     }}

//NAVBAR1:
const bar = document.querySelector('.mobile-bar')
const closeIcon = bar.querySelector('.close')
const barIcon = bar.querySelector('.bar')
const navBar = document.querySelector('.nav-mobile')
bar.onclick = function handleNavbarMovements() {
     console.log(1)
     for (let iconElement of bar.children) {
          iconElement.classList.toggle('show')
     }
     navBar.classList.toggle('show')
}

//HEADER + NAVBAR2:
const headerContainer = document.querySelector('.header-container')
const navLinks = headerContainer.querySelectorAll(".nav__item-link")
window.onscroll = function handleHeaderMovements() {
     let height

     if (window.innerWidth >= 1024) height = '100px'
     else height = '75px'

     if (window.scrollY >= 10) {
          Object.assign(headerContainer.style, {
               height: '75px',
               backgroundColor: 'white',
               color: 'black'
          })
          for (let link of navLinks) {
               link.style.color = 'black'
          }
          if (closeIcon.matches('.close.show')) {
               closeIcon.classList.remove('show')
               barIcon.classList.add('show')
               navBar.classList.remove('show')
          }
     } else {
          Object.assign(headerContainer.style, {
               height: height,
               backgroundColor: 'transparent',
               color: 'white'
          })
          for (let link of navLinks) {
               link.style.color = 'white'
          }
     }}

const arrowIcons = document.querySelectorAll('.arrow-icon')
const cardElements = document.querySelector('.intro__cards')
let scrollAmountRight = 100
let scrollAmountLeft = -100
//right
arrowIcons[0].onclick = () => {
     cardElements.scroll({
          top: 0,
          left: scrollAmountRight,
          behavior: "smooth"
     })
     console.log('scrollAmountRight: ', scrollAmountRight)
     scrollAmountRight += 100
}
//left
arrowIcons[1].onclick = () => {
     cardElements.scroll({
          top: 0,
          left: scrollAmountLeft,
          behavior: "smooth"
     })
     scrollAmountRight -= 100
}