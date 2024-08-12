//Get element 
let clock = document.querySelector('.clock');
function creanttime() {
    //get date
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let flag = "AM"
    //condition 12 hours
    if (hours == 0 ) hours = 12
    if (hours > 12) {
        hours += -12
        flag = "PM"
    }
    if (minutes <10) minutes = "0" + minutes 
    if (hours <10) hours = "0" + hours 
    if (seconds <10) seconds = "0" + seconds 
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} : ${flag}`
}

setInterval((ele) => {
    creanttime()
},1000)