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
    



    
   

    //for counting deposit amount
    // const currentDepositAmount = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDepositAmount);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;
    


    //for counting total balance after deposit
    // const currentBalance = document.getElementById('balanceAmount').innerText;
    // const currentBalanceAmount = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceAmount;
    // document.getElementById('balanceAmount').innerText = totalBalance;


   

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
    // const withdrawAmount = document.getElementById('withdraw-amount').value;
    // const withdrawNumber = parseFloat(withdrawAmount);
    // document.getElementById('withdraw-amount').value = '';
    const amountNumber = getNumber('withdraw-amount');
    updatedSpanBalance("currentWithdraw", amountNumber);
    updatedSpanBalance('currentBalance', -1*amountNumber);
    document.getElementById('withdraw-amount').value = '';


    // for counting withdraw amount
    // const currentWithdrawAmount = document.getElementById('currentWithdraw').innerText;
    // const currentDepositNumber = parseFloat(currentWithdrawAmount);
    // const totalWithdraw = amountNumber + currentDepositNumber;
    // document.getElementById('currentWithdraw').innerText = totalWithdraw;
    


    // // for counting total balance after deposit
    // const currentBalance = document.getElementById('balanceAmount').innerText;
    // const currentBalanceAmount = parseFloat(currentBalance);
    // const totalBalance = currentBalanceAmount - withdrawNumber;
    // document.getElementById('balanceAmount').innerText = totalBalance;

})

function getNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}
