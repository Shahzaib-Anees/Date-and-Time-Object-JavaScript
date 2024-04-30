let date = new Date();
let presentDate = date.toString();
let millSeconds = date.getTime();
console.log(millSeconds);

document.write(`<div class="card">
    <h4>Displaying Date and Time in Browser</h4>
    <span> Current Date : ${presentDate}  </span>
    <span> Elapsed Milliseconds since "Jan 1 , 1970" : ${millSeconds}  </span>
    <span> Elapsed Minutes since "Jan 1 , 1970" : ${(millSeconds / 1000 / 60)}  </span>
    </div>`);