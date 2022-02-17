// Total Expense Calculation
document.getElementById('calculate-cost').addEventListener('click',function(){
    let foodCost = parseFloat(document.getElementById('food-cost').value);
    let rentCost = parseFloat(document.getElementById('rent-cost').value);
    let clothesCost = parseFloat(document.getElementById('clothes-cost').value);
    let totalCost = foodCost + rentCost + clothesCost;
    console.log(totalCost);
    document.getElementById('total-expense').innerText = totalCost.toFixed(2);

    let totalIncome = parseFloat(document.getElementById('income').value);
    console.log(totalIncome);
    let balance = totalIncome - totalCost;
    document.getElementById('balance').innerText = balance.toFixed(2);
})