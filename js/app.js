// Total Expense Calculation
document.getElementById('calculate-cost').addEventListener('click',function(){
    let foodCost = getInputValue('food-cost');
    let rentCost = getInputValue('rent-cost');
    let clothesCost = getInputValue('clothes-cost');
    let totalCost = foodCost + rentCost + clothesCost;
    document.getElementById('total-expense').innerText = totalCost.toFixed(2);
    let totalIncome = getInputValue('income');
    let balance = totalIncome - totalCost;
    document.getElementById('balance').innerText = balance.toFixed(2);

    document.getElementById('save-btn').removeAttribute('disabled');
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
        document.getElementById('insufficient-balance').style.display='none';
        document.getElementById('no-alert').style.display='block';
    }
    else{
        document.getElementById('insufficient-balance').style.display='block';
        document.getElementById('no-alert').style.display='none';
    }
    
})


// Functions for getting Input values with handling errors
function getInputValue(purpose){
    let cost = parseFloat(document.getElementById(purpose).value);
    if(cost >= 0){
        return cost;
    }
    else{
        document.getElementById('error-notification').style.display='block';
        document.getElementById('no-alert').style.display='none';
    }    
}


// Removing error message
document.getElementById('error-notification').addEventListener('click',function(){
    document.getElementById('error-notification').style.display='none';
    document.getElementById('no-alert').style.display='block';
    setDefaultValue ('food-cost');
    setDefaultValue ('rent-cost');
    setDefaultValue ('clothes-cost');
    setDefaultValue ('income');
    setDefaultValue ('savings-rate');
    document.getElementById('balance').innerText = getInputValue('income');
    document.getElementById('savings-amount').innerText = '0.00';
    document.getElementById('remaining-balance').innerText = '0.00';

    document.getElementById('save-btn').setAttribute('disabled');
})


// Function for setting default input value
function setDefaultValue (purpose){
    document.getElementById(purpose).value = 0.00;
}