let date = new Date;
let presentYear = date.getFullYear();
console.log(presentYear);

let userAge = prompt("Enter your birth ");
let userAgeNumber = Number(userAge);
console.log(userAge);

let differentialYear = presentYear - userAgeNumber;
// console.log(differentialYear);
document.write(`<div class="card">
<h4>Printing User Birth Year in Browser</h4>
<span>Your age is <strong>${userAgeNumber}</strong></span>
<span>Your Birth year is <strong>${differentialYear}</strong></span>
</div>`)