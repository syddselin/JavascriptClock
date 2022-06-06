let greet = document.querySelector("#greet")
let beenOnline = document.querySelector("#beenOnline")
let message = document.querySelector("#message")
let myName = window.prompt('Hey! What is your name?')
let user = document.querySelector('#myName')
let clock = document.querySelector('#time')
let calendar = document.querySelector('#date')


function currentTime() {

    let date = new Date()

    let dayNum = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let dayName = date.getDay()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    min = checkTime(min)
    sec = checkTime(sec)

    switch (dayName) {
        case dayName = 0:
            dayName = "Sunday"
            break
        case dayName = 1:
            dayName = "Monday"
            break
        case dayName = 2:
            dayName = "Tuesday"
            break
        case dayName = 3:
            dayName = "Wednesday"
            break
        case dayName = 4:
            dayName = "Thursday"
            break
        case dayName = 5:
            dayName = "Friday"
            break
        case dayName = 6:
            dayName = "Saturday"
            break
    }

    clock.innerHTML = hour + ":" + min + ":" + sec
    calendar.innerHTML = month + "." + dayNum  + "." + year + " " + dayName

    var t = setTimeout(currentTime, 1000)
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


currentTime()