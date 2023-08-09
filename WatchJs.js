// 12hr=360deg
// 1hr = 360/12 =30
// h hrs= 30h + m/2
// 60min=30d
// 1min=30/60=1/2
// m min = (1/2)m
// 60m = 360d
// 1m = 360/60=6d
// m m = 6m
// 60s=360d
// 1s=360/60=6d
// s s=6sd

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);
