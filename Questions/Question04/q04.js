let weekDays= ["Saturaday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" ]; 
let fundayArray = ["Saturaday" , "Sunday"];
let date = new Date();
let day = date.getDay();
let presentDay = weekDays[day];
console.log(presentDay);

if(fundayArray.includes(presentDay)){
    document.write(`<div class="card">
    <h4>Printing Present Day in Browser</h4>
    <span>Present Day is : ${presentDay}  </span>
    <span>Hurrah! It's Funday </span>
    </div>`);
}else{
    document.write(`<div class="card">
    <h4>Printing Present Day in Browser</h4>
    <span>Present Day is : ${presentDay}  </span>
    <span>It's a Working Day </span>
    </div>`);
}