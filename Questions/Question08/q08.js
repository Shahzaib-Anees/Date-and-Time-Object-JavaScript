let systemGeneratedNum = Math.floor(Math.random() * 10)+1;
let userInputNum = +prompt("Guess the Number between 1 to 10 :");

if(userInputNum === systemGeneratedNum){
    document.write(`<div class="card">
    <h4>Printing Random Number Value</h4>
    <span>Random Number : ${systemGeneratedNum}</span>
    <span> Your Input : ${userInputNum}</span>
    <span> Congratulations💥! You have Guess the correct Number</span>
    </div>`);
}else {
    document.write(`<div class="card">
    <h4>Printing Random Number Value</h4>
    <span>Random Number : ${systemGeneratedNum}</span>
    <span> Your Input : ${userInputNum}</span>
    <span> Sorry😪! Your Guess is Incorrect</span>
    </div>`);
}