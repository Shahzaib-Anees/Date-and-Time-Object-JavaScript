let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let monthsArray = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemmber", "December"];

let presentMonth = monthsArray[month];

if (day < 15) {
    document.write(`<div class="card">
    <h4>Checking for Present Month Days</h4>
    <span> "First Fifteen Days of ${presentMonth}"  </span>
    </div>`);
}else{
    document.write(`<div class="card">
    <h4>Checking for Present Month Days</h4>
    <span> "Last Fifteen Days of ${presentMonth}"  </span>
    </div>`);
}