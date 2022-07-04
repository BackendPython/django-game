let menu_diamond = document.querySelector('.diamond-text')
let sliderMenu = document.querySelector('.slider-menu')
let menu_level = document.querySelector('.level-text')
let menu_arena = document.querySelector('.menu-arena')
let menu_coin = document.querySelector('.coin-text')
let menuSound = document.querySelector('.menuSound')
let downCards5 = document.querySelectorAll('.boxes')
let startSound = document.querySelector('#start')
let battleBtn = document.querySelector('.couche2')
let setClass = document.querySelectorAll('.set')
let down = document.querySelector('.down-cards')
let fullBox = document.querySelector('.full')
let battleStart = false // if true start battle
let startgame = false // if true start game
let menu = false // if true menu start


// start game
function start(){
    if (startgame==false) {
        startSound.play()
        fullBox.classList.add('fullScreen')
        document.body.removeEventListener('click', start)
        startgame = true
        setTimeout(() => {
            fullBox.classList.remove('fullScreen')
            menu = true
        }, 6000);
    }
}
start()
// end start

let checking = setInterval(() => {
    if(menu == true){
        menuSound.play()
        down.style.display = 'flex'
        menu_arena.style.display = 'grid'
        sliderMenu.style.display = 'flex'
        fullBox.style.backgroundImage = 'url(/static/files/images/menu-back.jpg)'
        downCards5.forEach(item => {
            item.addEventListener('click', function(){
                    setClass.forEach(set =>{
                        set.classList.remove('set')
                    })
                    item.classList.add('set')
            })
        })
    }
    if (menu==true) {
        battleBtn
    }
}, 10);