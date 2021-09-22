const moonPath = 'M121 180.5C121 282.949 185.5 372 185.5 372C83.0512 372 0 288.949 0 186.5C0 84.0511 83.0512 0.99995 185.5 0.99995C194 -5.5 121 78.0511 121 180.5Z'
const sunPath = 'M371 185.5C371 287.949 287.949 371 185.5 371C83.0512 371 0 287.949 0 185.5C0 83.0512 83.0512 0 185.5 0C287.949 0 371 83.0512 371 185.5Z'

const darkMode = document.querySelector('#darkmode')
const body = document.getElementsByTagName('body')
let toggle = false;

darkMode.addEventListener('click', () => {
    console.log(toggle === true ? toggle = false : toggle = true)
    const timeline = anime.timeline({
        duration: 720,
        easing: "easeOutExpo",
    })
    timeline.add({
        targets: ".sun",
        d: [{
            value: toggle ? moonPath : sunPath
        }]
    }).add({
        targets: darkMode,
        rotate: toggle ? -25 : 0
    }, "-=620 ").add({
        targets: body,
        backgroundColor: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    }, "-=700")
})