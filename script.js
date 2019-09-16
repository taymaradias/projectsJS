const HOUR = document.querySelectorAll("#hour");
const MINUTE = document.querySelectorAll("#minute");
const SECOND = document.querySelectorAll("#second");

function runClock(local,ind) {

    if (local=='local') {
        var date = moment();
    }
    else {
        var date = moment().tz(local);
    }

    let hr = date.hour();
    let min = date.minutes();
    let sec = date.seconds();

    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = (sec * 360 / 60);

    HOUR[ind].style.transform = "rotate(" + hrPosition + "deg)";
    MINUTE[ind].style.transform = "rotate(" + minPosition + "deg)";
    SECOND[ind].style.transform = "rotate(" + secPosition + "deg)";
}



var intervall = setInterval(runClock, 1000,'Europe/London', 0);
var intervalny = setInterval(runClock, 1000,'America/New_York', 1);
var intervalsp = setInterval(runClock, 1000,'America/Sao_Paulo', 2);
var intervalt = setInterval(runClock, 1000,'Asia/Tokyo', 3);
var intervals = setInterval(runClock, 1000,'Australia/Sydney', 4);
var intervals = setInterval(runClock, 1000,'local',5);