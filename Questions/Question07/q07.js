let date = new Date ();
let hours = date.getHours();
console.log(hours);

if(hours < 12){
    document.write(`<div class="card">
    <h4>Printing Present Hours in Browser</h4>
    <span>Present Time is : ${date.toDateString()}  </span>
    <span> It's A.M </span>
    </div>`);
}else{
    document.write(`<div class="card">
    <h4>Printing Present Hours in Browser</h4>
    <span>Present Time is : ${date.toLocaleString()}  </span>
    <span> It's P.M </span>
    </div>`);
}