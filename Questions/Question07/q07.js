let userInputWeigth = prompt("Enter your Weight in Kilograms");
if (userInputWeigth.includes("")||userInputWeigth.includes("kg") || userInputWeigth.includes("kgs") || userInputWeigth.includes("kilograms")) {
    let siteUserWeight = +userInputWeigth.slice(0, 2);
    document.write(`<div class="card">
    <h4>Printing User Input in Browser</h4>
    <span>The weight of user is ${siteUserWeight} kilograms </span>
    </div>`);
}

