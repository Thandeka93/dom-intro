// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector('.billTypeText');

//get a reference to the add button
const addToBillBtnElement = document.querySelector('.addToBillBtn');

//create a variable that will keep track of the total bill
const callTotalOne = document.querySelector('.callTotalOne');
const smsTotalOne = document.querySelector('.smsTotalOne');
const totalOne = document.querySelector('.totalOne');

//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const callsTotalElement = document.querySelector('.callTotalOne');
const smsTotalElement = document.querySelector('.smsTotalOne');
const totalCostElement = document.querySelector('.totalOne');

// these variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    var billStringType = billTypeEntered.toLowerCase();
    //var billTypeString = billTypeEntered.toUpperCase();
    // update the correct total
    if (billTypeEntered === "call" || "CALL"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms" || "SMS"){
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElement.classList.add("warning");
    }
}
addToBillBtnElement.addEventListener("click", textBillTotal);








    