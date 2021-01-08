var hours = document.getElementById('hour')
var mins = document.getElementById('minute')
var secs = document.getElementById('second')
var mss = document.getElementById('milisecond')

var startbtn = document.getElementById('start')
var pausebtn = document.getElementById('pause')
var resumebtn = document.getElementById('resume')
var resetbtn = document.getElementById('reset')

var dt = 1

var timer

startbtn.addEventListener('click', function () {
    startbtn.setAttribute('disabled', 'true')
    pausebtn.removeAttribute('disabled')
    var ms = 0
    var sec = 0
    var min = 0
    var hour = 0
    dt = 1
    timer = setInterval(() => {

        ms += dt;
        if (ms == 100) {
            ms = 0
            sec += 1
            if (sec > 59) {
                sec = 0
                min += 1
                if (min > 59) {
                    min = 0
                    hour += 1
                }
            }
        }
        mss.innerText = ms.toString().padStart('2', "0")
        secs.innerText = sec.toString().padStart('2', "0")
        mins.innerText = min.toString().padStart('2', "0")
        hours.innerText = hour.toString().padStart('2', "0")
    }, 10);


});

pausebtn.addEventListener('click', function () {
    dt = 0;
    pausebtn.classList.toggle('hide')
    resumebtn.classList.toggle('hide')
})

resumebtn.addEventListener('click', function () {
    dt = 1
    pausebtn.classList.toggle('hide')
    resumebtn.classList.toggle('hide')
})

resetbtn.addEventListener('click', function () {
    clearInterval(timer)
    startbtn.removeAttribute('disabled')
    pausebtn.setAttribute('disabled', 'true')
    pausebtn.classList.remove('hide')
    resumebtn.classList.add('hide')

    mss.innerText = '00'
    secs.innerText = '00'
    mins.innerText = '00'
    hours.innerText = '00'
})