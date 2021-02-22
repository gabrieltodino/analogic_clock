var second_pointer = document.querySelector('.seconds')
var minute_pointer = document.querySelector('.minute')
var hour_pointer = document.querySelector('.hour')

var date = new Date()//setting date constructor

var time
var setTime = () =>{//function to set hour values
    date = new Date()
    time = {
        hour: date.getHours(),
        minutes: date.getMinutes(),
        second: date.getSeconds()
    }
}

window.setInterval(() => {
    setTime()

    //defing seconds pointer
    let degree_sec = time.second*6 + 90
    second_pointer.style.transform = `rotate(${degree_sec}deg)`
    //defing minutes pointer
    let degree_min = time.minutes*6 + 90
    minute_pointer.style.transform = `rotate(${degree_min}deg)`
    //defing hour pointer
    let degree_hour = time.hour*30 + 90
    hour_pointer.style.transform = `rotate(${degree_hour}deg)`
}, 500);
    
