let todaysDate = new Date();
let presentMonth = todaysDate.getMonth();

let monthsArray = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemmber", "December"];

let monthName = monthsArray[(presentMonth - 1)];

document.write(`<div class="card">
<h4>Printing Present Month in Browser</h4>
<span>Present Month is : ${monthName}  </span>
</div>`);