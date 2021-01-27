//It is long version of shopping cart javascript,it's not adding but here it store just future inquiry.

/*=================================for delete section start=========================================*/
 //for delete first section 
         document.getElementById('delete-button').addEventListener('click', function () {
            document.getElementById('first-section').style.display = 'none';
         })
         //for delete two section
         document.getElementById('delete-button-2').addEventListener('click', function () {
            document.getElementById('second-section').style.display = 'none';
         })
/*=====================================for delete section end====================================*/


/*==========================for add,reduce quantity and price button for phone start here=================*/

         //for add button with subtotal and total change value for phone
         document.getElementById('add-button').addEventListener('click', function () {
            const addQuantity = document.getElementById('add-reduce').value;
            const addNumber = parseFloat(addQuantity);
            const totalQuantity = addNumber + 1;

             document.getElementById('add-reduce').value = totalQuantity;

            const price = document.getElementById('totalPrice').innerText;
            const actualPrice = parseFloat(price) + 1219;
            document.getElementById('totalPrice').innerText = actualPrice;
            
           const subAmount = document.getElementById('sub-total').innerText;
           const subTotal = parseFloat(subAmount.replace(',', '')) + 1219;
           document.getElementById('sub-total').innerText = subTotal;

           const taxAmount = document.getElementById('tax').innerText;
           const taxNumber = parseFloat(taxAmount);
           const totalTax = subTotal * (2/100);
           document.getElementById('tax').innerText = Math.round(totalTax);

           const Total = subTotal + taxNumber + 25;
           document.getElementById('total').innerText = Total;  
      })

      //reduce button with subtotal and total value change for phone
      document.getElementById('reduce-button').addEventListener('click', function () {
         const reduceQuantity = document.getElementById('add-reduce').value;
         const reduceNumber = parseFloat(reduceQuantity);
         const quantity = reduceNumber - 1;

         document.getElementById('add-reduce').value = quantity;

         const price = document.getElementById('totalPrice').innerText;
         const actualPrice = parseFloat(price) - 1219;
         document.getElementById('totalPrice').innerText = actualPrice;
            
         const subAmount = document.getElementById('sub-total').innerText;
         const subTotal = parseFloat(subAmount.replace(',', '')) - 1219;
         document.getElementById('sub-total').innerText = subTotal;

         const taxAmount = document.getElementById('tax').innerText;
         const taxNumber = parseFloat(taxAmount);
         const totalTax = subTotal * (2/100);
         document.getElementById('tax').innerText = Math.round(totalTax);

         const Total = subTotal + taxNumber - 25;
         document.getElementById('total').innerText = Total;
      })
/*==========================for add,reduce quantity and price button for phone end here=================*/




/*==========================for add,reduce quantity and price button for phone cover start here=================*/

      //for add button with subtotal and total change value for casing/phone cover
      document.getElementById('add-button-2').addEventListener('click', function () {
         const Quantity = document.getElementById('add-reduce-2').value;
         const Number = parseFloat(Quantity);
         const totalQuantity = Number + num1;

         document.getElementById('add-reduce-2').value = totalQuantity;

         const price = document.getElementById('totalPrice-2').innerText;
         const actualPrice = parseFloat(price) + num2;
         document.getElementById('totalPrice-2').innerText = actualPrice;

         const subAmount = document.getElementById('sub-total').innerText;
         const subTotal = parseFloat(subAmount.replace(',', '')) + num3;
         document.getElementById('sub-total').innerText = subTotal;

         const taxAmount = document.getElementById('tax').innerText;
         const taxNumber = parseFloat(taxAmount);
         const totalTax = subTotal * (2/100);
         document.getElementById('tax').innerText = Math.round(totalTax);

         const Total = subTotal + taxNumber + num4;
         document.getElementById('total').innerText = Total;
      })

      //reduce button with subtotal and total value change for casing/phone cover
      document.getElementById('reduce-button-2').addEventListener('click', function () {
         const Quantity = document.getElementById('add-reduce-2').value;
         const Number = parseFloat(Quantity);
         const totalQuantity = Number - 1;

         document.getElementById('add-reduce-2').value = totalQuantity;

         const price = document.getElementById('totalPrice-2').innerText;
         const actualPrice = parseFloat(price) - 59;
         document.getElementById('totalPrice-2').innerText = actualPrice;
            
         const subAmount = document.getElementById('sub-total').innerText;
         const subTotal = parseFloat(subAmount.replace(',', '')) - 59;
         document.getElementById('sub-total').innerText = subTotal;

         const taxAmount = document.getElementById('tax').innerText;
         const taxNumber = parseFloat(taxAmount);
         const totalTax = subTotal * (2/100);
         document.getElementById('tax').innerText = Math.round(totalTax);

         const Total = subTotal + taxNumber - 1;
         document.getElementById('total').innerText = Total;
      })

/*==========================for add,reduce quantity and price button for phone cover end here=================*/
      
        

      


     