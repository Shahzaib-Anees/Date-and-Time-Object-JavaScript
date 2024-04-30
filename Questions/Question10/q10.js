let presentDate = new Date();
let presentMilliseconds = presentDate.getTime();
// console.log(presentMilliseconds);
let referenceDate = new Date ("Dec 05 ,2015");
// console.log(referenceDate);

let difference = presentMilliseconds - referenceDate ;

document.write(`<div class="card">
    <h4>Printing Passed Seconds since Referenced Date in Browser</h4>
    <span>On reference Date ${referenceDate}</span>
    <span>${Math.floor(difference/1000)} seconds has passed since beginning of 2015</span>
    </div>`);