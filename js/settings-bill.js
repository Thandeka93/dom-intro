// get a reference to the sms or call radio buttons
//const billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings');

// get refences to all the settings fields
const callCostSetting = document.querySelector('.callCostSetting');
const smsCostSetting = document.querySelector('.smsCostSetting');
const warningLevelSetting = document.querySelector('.warningLevelSetting');
const criticalLevelSetting = document.querySelector('.criticalLevelSetting');

//get a reference to the add button
const addBtn = document.querySelector('.addBtn');

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
const callTotalSettings = document.querySelector('.callTotalSettings');
const smsTotalSettings = document.querySelector('.smsTotalSettings');
const totalSettings =document.querySelector('.totalSettings');

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const theCallTotalElement = document.querySelector('.callTotalSettings');
const theSmsTotalsElement = document.querySelector('.smsTotalSettings');
const theTotalCostElement = document.querySelector('.totalSettings');



var callCost = 0;
    var smsCost = 0;
    var warningLevel = 0;
    var criticalLevel = 0;

function forSettings(){
    callCost = Number(callCostSetting.value);
    smsCost = Number(smsCostSetting.value);
    warningLevel = warningLevelSetting.value;
    criticalLevel = criticalLevelSetting.value;
    document.querySelector(".addBtn").disabled = false;
    
 }
 updateSettings.addEventListener("click", forSettings);


var theCallTotal = 0;
var theSmsTotal = 0;

function billSettingsTotal (){
  
    var radioBtnChecked = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (radioBtnChecked) {
        var  billItemTypeWithSettings = radioBtnChecked.value
    }


    if ( billItemTypeWithSettings === "call") {
        theCallTotal += callCost;
    }
    else if (billItemTypeWithSettings === "sms") {
        theSmsTotal += smsCost;
    }
    
    theCallTotalElement.innerHTML = theCallTotal.toFixed(2);
    theSmsTotalsElement.innerHTML = theSmsTotal.toFixed(2);
    var theTotalCost = theCallTotal + theSmsTotal;
    theTotalCostElement.innerHTML = theTotalCost.toFixed(2);

    if (theTotalCost >= criticalLevel ) {
        theTotalCostElement.classList.remove("warning");
        // adding the danger class will make the text red
        theTotalCostElement.classList.add("danger");
        document.querySelector(".addBtn").disabled = true;
    }
    else if (theTotalCost >= warningLevel && theTotalCost < criticalLevel) {
        theTotalCostElement.classList.remove("danger");
        theTotalCostElement.classList.add("warning");
    }

    }
    
addBtn.addEventListener('click', billSettingsTotal);

