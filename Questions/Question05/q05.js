function coinValueTeller() {
    let randomNumber = Math.floor(Math.random() * 3);
    let coinValue = randomNumber + 1 ;
    console.log(coinValue);
    if (coinValue === 1) {
        document.write(`<div class="card">
    <h4>Printing Random Coin Value</h4>
    <span> ${coinValue} </span>
    <span> Random Coin Value : Tails  </span>
    </div>`);
    } else if (coinValue === 2) {
        document.write(`<div class="card">
    <h4>Printing Random Coin Value</h4>
    <span> ${coinValue} </span>
    <span> Random Coin Value : Heads  </span>
    </div>`);
    } else {
        console.log("Wrong Coin Value");
    }
}


coinValueTeller();
coinValueTeller();
coinValueTeller();

