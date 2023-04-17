// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings');

// get refences to all the settings fields


//get a reference to the add button
const addBtn = document.querySelector('.addBtn');

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


function billSettings (){
  
    alert('clicked')
    
}
addBtn.addEventListener('click', billSettings);
updateSettings.addEventListener("click", billSettings);
