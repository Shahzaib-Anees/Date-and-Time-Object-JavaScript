let date = new Date();
let presentMilliSeconds = date.getTime();
console.log(presentMilliSeconds);

let dateAhead = new Date("May 7 ,2024 14:00")
let milliAhead = dateAhead.getTime();
console.log(milliAhead);


let differentialMilliseconds = presentMilliSeconds - milliAhead;
document.write(`<div class="card">
<h4>Printing Date in Browser</h4>
<span>Current Date : ${dateAhead}</span>
<span>${Math.round(differentialMilliseconds/1000/60/60)} hours ago, it was ${dateAhead} </span>
</div>`)