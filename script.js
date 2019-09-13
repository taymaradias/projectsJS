const HOURHANDs = document.querySelector("#hour");
const MINUTEHANDs = document.querySelector("#minute");
const SECONDHANDs = document.querySelector("#second");

function runTheClock(local,HOURHAND,MINUTEHAND,SECONDHAND) {

    // var dateLocal = new Date();
    // let dt = dateLocal.getTime() + dateLocal.getTimezoneOffset()*60000 + offset*3600000;
    var date = moment().tz(local);
    let hr = date.hour();
    let min = date.minutes();
    let sec = date.seconds();

    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = (sec * 360 / 60);

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}



var interval = setInterval(runTheClock, 1000,'America/New_York',HOURHANDs,MINUTEHANDs,SECONDHANDs)
