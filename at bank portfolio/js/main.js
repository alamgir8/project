// login button handler
document.getElementById('login-button').addEventListener('click', function (){
    document.getElementById('login').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
    document.getElementById('withdraw-area').style.display = 'block';
    
    
})

// for deposit button handler

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositAmount = document.getElementById('deposit-amount').value;
    // const depositNumber = parseFloat(depositAmount);
   
    const depositNumber = getNumber('deposit-amount');
    document.getElementById('deposit-amount').value = '';

    updatedSpanBalance('currentDeposit', depositNumber);
    updatedSpanBalance('currentBalance', depositNumber);
})

//same as upper two comment section
function updatedSpanBalance(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceAmount;
    document.getElementById(id).innerText = totalBalance;
    
}

//function for deposit and withdraw button as same


//for withdraw button handler
document.getElementById('withdraw-button').addEventListener('click', function () {
  
    const amountNumber = getNumber('withdraw-amount');
    updatedSpanBalance("currentWithdraw", amountNumber);
    updatedSpanBalance('currentBalance', -1*amountNumber);
    document.getElementById('withdraw-amount').value = '';

})

function getNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}
