const darkMode = document.querySelector('#darkmode')
const body = document.getElementsByTagName('body')

const ob = {
    duration: 720,
    moonPath: 'M121 180.5C121 282.949 185.5 372 185.5 372C83.0512 372 0 288.949 0 186.5C0 84.0511 83.0512 0.99995 185.5 0.99995C194 -5.5 121 78.0511 121 180.5Z',
    sunPath: 'M371 185.5C371 287.949 287.949 371 185.5 371C83.0512 371 0 287.949 0 185.5C0 83.0512 83.0512 0 185.5 0C287.949 0 371 83.0512 371 185.5Z',
    easeType: "easeOutExpo",
    darkColor: "rgb(22,22,22)",
    lighColor: "#fff",
    toggle: false
}

let { duration, moonPath, sunPath, easeType, toggle, darkColor, lighColor } = ob

darkMode.addEventListener('click', () => {
    console.log(toggle === true ? toggle = false : toggle = true)

    const timeline = anime.timeline({
        duration: duration,
        easing: easeType,
    })
    timeline.add({
        targets: ".sun",
        d: [{
            value: toggle ? moonPath : sunPath
        }]
    })
        .add({
            targets: "#darkmode",
            rotate: toggle ? -25 : 0
        }, `-=${duration - 100}`)
        .add({
            targets: body,
            backgroundColor: toggle ? darkColor : lighColor
        }, "-=700")
})