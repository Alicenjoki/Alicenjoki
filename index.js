const timer = 'Jun 16, 2023 00:00:00';

function countdown(){
    const newDate = new Date(timer).getTime();
    const currentDate = new Date().getTime();
    const gap = newDate - currentDate;

    //how the time actually works

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculatng the shift

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    

    document.querySelector('#days').innerText = textDay;
    document.querySelector('#hours').innerText = textHour;
    document.querySelector('#minutes').innerText = textMinute;
    document.querySelector('#seconds').innerText = textSecond;
}
countdown();
setInterval(countdown, 1000);

