let daysArray = ["Sat" , "Mon" , "Tues" , "Wed" , "Thurs" , "Fri" , "Sat"];
let date = new Date ();
let presentDay = date.getDay();
let presentDayString = daysArray[(presentDay - 1)];
document.write(`<div class="card">
<h4>Printing Present Day in Browser</h4>
<span>Present Day is : ${presentDayString}  </span>
</div>`);