// get a reference to the sms or call radio buttons
// const billItemTypeRadio = document.querySelector('.billItemTypeRadio');

//get a reference to the add button
const radioBillAddBtnElement = document.querySelector('.radioBillAddBtn');

//create a variable that will keep track of the total bill
const callTotalTwo = document.querySelector('.callTotalTwo');
const smsTotalTwo = document.querySelector('.smsTotalTwo');
const totalTwo = document.querySelector('.totalTwo');

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const callTotalsElement = document.querySelector('.callTotalTwo');
const smsTotalsElement = document.querySelector('.smsTotalTwo');
const totalCostsElement = document.querySelector('.totalTwo');



var callTotal = 0;
var smsTotals = 0;

function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }

    // var billEntered = billItemTypeRadio.value.trim();

    if (billItemType === "call") {
        callTotal += 2.75;
    }
    else if (billItemType === "sms") {
        smsTotals += 0.75;
    }

    callTotalsElement.innerHTML = callTotal.toFixed(2);
    smsTotalsElement.innerHTML = smsTotals.toFixed(2);
    var totalCosts = callTotal + smsTotals;
    totalCostsElement.innerHTML = totalCosts.toFixed(2);

    if (totalCosts >= 50) {
        // adding the danger class will make the text red
        totalCostsElement.classList.add("danger");
    }
    else if (totalCosts >= 30) {
        totalCostsElement.classList.add("warning");
    }

}

radioBillAddBtnElement.addEventListener('click', radioBillTotal);