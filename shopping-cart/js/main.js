
//for add section with price change
document.getElementById('add-button').addEventListener('click', function () {
    const addQuantity = document.getElementById('add-reduce').value;
    const addNumber = parseFloat(addQuantity);
    const totalQuantity = addNumber + 1;

    document.getElementById('add-reduce').value = totalQuantity;
    

    const price = document.getElementById('totalPrice').innerText;
    const actualPrice = parseFloat(price);
    const totalPrice = actualPrice + 1219;

    document.getElementById('totalPrice').innerText = totalPrice;
    
 })

 //for reduce section with price change
 document.getElementById('reduce-button').addEventListener('click', function () {
    const reduceQuantity = document.getElementById('add-reduce').value;
    const reduceNumber = parseFloat(reduceQuantity);
    const quantity = reduceNumber - 1;
    
    document.getElementById('add-reduce').value = quantity;

    const price = document.getElementById('totalPrice').innerText;
    const actualPrice = parseFloat(price);
    const totalPrice = actualPrice - 1219;

    document.getElementById('totalPrice').innerText = totalPrice;


 })