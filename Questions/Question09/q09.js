let date = new Date();
let presentMilliseconds = date.getTime();
// console.log(presentMilliseconds);
let ramadanDate = new Date("Mar 11 , 2024");
let ramadanDateMilliseconds = ramadanDate.getTime()
// console.log(ramadanDateMilliseconds);

let difference = presentMilliseconds - ramadanDateMilliseconds;

document.write(`<div class="card">
    <h4>Printing Last Ramadan Date in Browser</h4>
    <span>1st Ramadan was on ${ramadanDate.toDateString()}  </span>
    <span> ${Math.floor(difference/1000/60/60/24)} days has passed since last Ramadan </span>
    </div>`);
