let skills = document.querySelector('.our-skills')
let spans = Array.from(document.querySelectorAll('.our-skills .progress span'))

let stat = document.querySelector('.stats')
let nums = Array.from(document.querySelectorAll('.stats .container .box .number'))
let started = false

let countDown = new Date('dec 31,2022 23:59:59').getTime()
let counter = setInterval(() => {
    let dateNow = new Date().getTime()
    let dateDiff = countDown - dateNow
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
    document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000))
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds
    if (dateDiff === 0) {
        clearInterval(counter)
    }
}, 1000);

window.onscroll = function () {
    if (window.scrollY >= stat.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num))
        }
        started = true
    }
    if (window.scrollY >= skills.offsetTop - 100) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }

}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent === goal) {
            clearInterval(count)
        }
    }, 2000 / goal);
}


