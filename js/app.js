// Total Expense Calculation
document.getElementById('calculate-cost').addEventListener('click',function(){
    let foodCost = parseFloat(document.getElementById('food-cost').value);
    let rentCost = parseFloat(document.getElementById('rent-cost').value);
    let clothesCost = parseFloat(document.getElementById('clothes-cost').value);
    let totalCost = foodCost + rentCost + clothesCost;
    console.log(totalCost);
    document.getElementById('total-expense').innerText = totalCost.toFixed(2);

    let totalIncome = parseFloat(document.getElementById('income').value);
    // console.log(totalIncome);
    let balance = totalIncome - totalCost;
    document.getElementById('balance').innerText = balance.toFixed(2);
})

// Savings Calculation
document.getElementById('save-btn').addEventListener('click', function(){
    let totalIncome = parseFloat(document.getElementById('income').value);
    // console.log(totalIncome)
    let savingsRate = parseFloat(document.getElementById('savings-rate').value);
    // console.log(savingsRate)
    let savingsAmount = totalIncome * (savingsRate/100);
    document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);
    let previousBalance = parseFloat(document.getElementById('balance').innerText);
    let remainingBalance = previousBalance - savingsAmount;
    // console.log(remainingBalance)
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
})