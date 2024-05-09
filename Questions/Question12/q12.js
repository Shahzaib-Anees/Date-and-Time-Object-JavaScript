let daysArray = ["Sat", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
let monthsArray = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemmber", "December"];

let presentDate = new Date();
let presentYear = presentDate.getFullYear();
let presentDay = presentDate.getDay();
let Day = daysArray[(presentDay)];
let presentMonth = presentDate.getMonth();
let Month = monthsArray[(presentMonth)];
let presentDates = presentDate.getDate();
console.log(presentDates);
let presentHour = presentDate.getHours();
let presentMin = presentDate.getMinutes();
let presentSeconds = presentDate.getSeconds();
console.log(presentYear);

let definedDate = new Date("May 09 , 2024 4:09");
let definedMilliSeconds = definedDate.getTime();
console.log(definedMilliSeconds);

let definedYear = Math.floor(definedMilliSeconds / 1000 / 60 / 60 / 24 / 30 / 365);
let beforeCenturyDate = definedYear * 100;

let differentialYear = presentYear - beforeCenturyDate;
console.log(differentialYear);

document.write(`<div class="card">
    <h4>Printing the 100 years back Date in Browser</h4>
    <span> Current Date : ${presentDate}</span>
    <span>100 years back , it was " ${Day + " " + Month + " " + "0" + presentDates + " " + differentialYear} ${presentHour + ":" + presentMin + ":" + presentSeconds} GMT+0500 (Pakistan Standard Time)"</span>
    </div>`);

