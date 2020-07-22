//login button event handeler

const loginButton = document.getElementById("submit-button");
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transctionArea = document.getElementById("transction-area");
    transctionArea.style.display = "block";
});

//deposit buton event handeler

const depositButton = document.getElementById("depositButton");
depositButton.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");

    updateText("currentDeposit", depositNumber);
    updateText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})


//withdraw button event handeler
const withdrawButton = document.getElementById("withdrawButton");
withdrawButton.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");

    updateText("currentWithdraw", withdrawNumber);
    updateText("currentBalance", -1*withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateText(id, depositNumber){

    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + depositNumber;
    document.getElementById(id).innerText = totalAmount;

}















