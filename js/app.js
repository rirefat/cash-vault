// Total Expense Calculation
document.getElementById('calculate-cost').addEventListener('click',function(){
    let foodCost = getInputValue('food-cost');
    let rentCost = getInputValue('rent-cost');
    let clothesCost = getInputValue('clothes-cost');
    let totalCost = foodCost + rentCost + clothesCost;
    document.getElementById('total-expense').innerText = totalCost.toFixed(2);
    let totalIncome = getInputValue('income');
    let balance = totalIncome - totalCost;

    if(balance >0){
        document.getElementById('balance').innerText = balance.toFixed(2);
        document.getElementById('remaining-balance').innerText = balance.toFixed(2);
        enabledButton();
        sufficientBalance();
        onGreenAlert();
        oFFerrorNotification();
    }
    else{
        insufficientBalance();
        oFFGreenAlert();
        document.getElementById('balance').innerText = '!!';
        document.getElementById('remaining-balance').innerText = '!!';
    }
    
})


// Savings Calculation
document.getElementById('save-btn').addEventListener('click', function(){
    let totalIncome = getInputValue('income');
    let savingsRate = getInputValue('savings-rate');
    let savingsAmount = totalIncome * (savingsRate/100);
    document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);
    let previousBalance = parseFloat(document.getElementById('balance').innerText);
    let remainingBalance = previousBalance - savingsAmount;

    if(remainingBalance > 0){
        document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
        sufficientBalance();
        onGreenAlert();
    }
    else{
        document.getElementById('remaining-balance').innerText = '!!';
        insufficientBalance();
        oFFGreenAlert();
    }
    
})


// Functions for getting Input values with handling errors
function getInputValue(purpose){
    let cost = parseFloat(document.getElementById(purpose).value);
    if(cost >= 0){
        return cost;
    }
    else{
        oNerrorNotification();
        oFFGreenAlert();
        disabledButton();
    }    
}


// Removing error message
document.getElementById('error-notification').addEventListener('click',function(){
    oFFerrorNotification();
    sufficientBalance();
    onGreenAlert();
    setDefaultValue ('food-cost');
    setDefaultValue ('rent-cost');
    setDefaultValue ('clothes-cost');
    setDefaultValue ('income');
    setDefaultValue ('savings-rate');
    document.getElementById('balance').innerText = getInputValue('income');
    document.getElementById('savings-amount').innerText = '0.00';
    document.getElementById('remaining-balance').innerText = '0.00';
})


// Function for setting default input value
function setDefaultValue (purpose){
    document.getElementById(purpose).value = 0.00;
}


// Functions for enabling/disabling save button
function disabledButton(){
    document.getElementById('save-btn').setAttribute('disabled');
}
function enabledButton(){
    document.getElementById('save-btn').removeAttribute('disabled');
}


// Functions for Notifications and error messages
function oNerrorNotification(){
    document.getElementById('error-notification').style.display='block';
}
function oFFerrorNotification(){
    document.getElementById('error-notification').style.display='none';
}

function onGreenAlert(){
    document.getElementById('no-alert').style.display='block';
}
function oFFGreenAlert(){
    document.getElementById('no-alert').style.display='none';
}

function sufficientBalance(){
    document.getElementById('insufficient-balance').style.display='none';
}
function insufficientBalance(){
    document.getElementById('insufficient-balance').style.display='block';
}