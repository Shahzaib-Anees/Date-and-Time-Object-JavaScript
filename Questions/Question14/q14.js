let monthsArray = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemmber", "December"];
let currentMonth = new Date().getMonth();
let billContainer = document.getElementById("bill-container");
let inputFields = document.getElementById("input-field");
let userNameInput = document.getElementById("consumer-name");
let user = document.getElementById("userName");
let monthContainer = document.getElementById("currentMonth");
let units = document.getElementById("unitsCount");
let unitsCharge = document.getElementById("unitCharge");
let netAmount = document.getElementById("netAmount");
let lateFine = document.getElementById("latefine");
let groosAmount = document.getElementById("grossAmount");
console.log(userNameInput);

function billGenerator() {
    let consumerName = userNameInput.value;
    if (consumerName == "") {
        alert("Incorrect Consumer Name");
        return;
    } else {
        billContainer.style.display = "flex"
        inputFields.style.display = "none"
        let month = monthsArray[currentMonth];
        let unitsUse = 410;
        let perUnitCost = 16
        let netCost = unitsUse * perUnitCost;
        let fine = 350;
        let grossCost = netCost + fine;

        // Inner Text of Elements 
        user.innerText = consumerName;
        monthContainer.innerText = month;
        units.innerText = unitsUse;
        unitsCharge.innerText = perUnitCost;
        netAmount.innerText = netCost;
        lateFine.innerText = fine;
        groosAmount.innerText = grossCost;
    }
}


