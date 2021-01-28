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
      
        

      /*=================================for delete section start=========================================*/

         //for delete first section 
         document.getElementById('delete-button').addEventListener('click', function () {
            document.getElementById('first-section').style.display = 'none';    
            })
            //for delete second section
            document.getElementById('delete-button-2').addEventListener('click', function () {
            document.getElementById('second-section').style.display = 'none';
            })
   
   /*=====================================for delete section end====================================*/
            
   
   
   
   /*==================for add,reduce quantity and price button for phone stat here==========================*/
   
            //for add button with subtotal and total change value for phone
            document.getElementById('add-button').addEventListener('click', function () {
            updatedPriceAfterAdd('100', 'add-reduce', 'totalPrice', 'sub-total', 'tax', 'total',  Math.round(1*1.1), Math.round(1*1219.1), 1*1219, 1*25);
            })
   
         //reduce button with subtotal and total value change for phone
            document.getElementById('reduce-button').addEventListener('click', function () {
            updatedPriceAfterReduce('0', 'add-reduce', 'totalPrice', 'sub-total', 'tax', 'total',  Math.round(-1*1.2), Math.round(-1*1219.2), 1*1219, -1*24);
            })
   
   /*======================for add,reduce quantity and price button for phone end here ========================*/
   
   
   
   
   /*=======================for add,reduce quantity and price button for phone cover stat here=================*/
   
         //for add button with subtotal and total change value for casing/phone cover
            document.getElementById('add-button-2').addEventListener('click', function () {
            updatedPriceAfterAdd('100', 'add-reduce-2', 'totalPrice-2', 'sub-total', 'tax', 'total',  Math.round(1*1.2), Math.round(1*59.2), 1*59, 1*1);
            })
   
         //reduce button with subtotal and total value change for casing/phone cover
            document.getElementById('reduce-button-2').addEventListener('click', function () {
            updatedPriceAfterReduce('0', 'add-reduce-2' ,'totalPrice-2', 'sub-total', 'tax', 'total', Math.round(-1*1.1), Math.round(-1*59.1), 1*59, -1*1);
            })
   /*=========================================for add,reduce quantity and price button for phone cover end here===================================*/
   
   
   
   //=====Second Method with function for quantity, per price and total price changing
   
   /*=======================function for add,reduce quantity and price button for phone & phone cover start here===============================*/
   
   function updatedPriceAfterAdd(max, id, id2, id3, id4, id5, num1, num2, num3, num4) {
            document.getElementById(id).value = parseInt(document.getElementById(id).value) + num1;
         if (document.getElementById(id).value >= parseInt(max)) {
            document.getElementById(id).value = max;  
            }
   
            document.getElementById(id2).innerText = parseInt(document.getElementById(id2).innerText) + num2;
         if (document.getElementById(id2, id3, id4, id5).innerText >= 0 ) {
            document.getElementById(id2, id3, id4,id5).innerText + num2;document.getElementById(id3).innerText + num3; document.getElementById(id4).innerText * (2/100); document.getElementById(id5).innerText  + num3;
            document.getElementById(id3).innerText = parseInt(document.getElementById(id3).innerText.replace(',', '')) + num3;
            document.getElementById(id4).innerText = parseInt(document.getElementById(id4).innerText) + Math.round(num3*(2/100));
            document.getElementById(id5).innerText = parseInt(document.getElementById(id5).innerText.replace(',', '')) + num3 + Math.round(num3*(2/100)) ;
            }
            }
   
   function updatedPriceAfterReduce(min, id, id2, id3, id4, id5, num1, num2, num3, num4) {
            document.getElementById(id).value = parseInt(document.getElementById(id).value) + num1;
         if (document.getElementById(id).value <= parseInt(min)) {
            document.getElementById(id).value = min;
            }
   
            document.getElementById(id2).innerText = parseInt(document.getElementById(id2).innerText) + num2;
         if (document.getElementById(id2).innerText <= -1 ) {
            document.getElementById(id2).innerText = 0;
            return; 
            } 
           
            const subAmount = document.getElementById(id3).innerText;
            const subTotal = parseInt(subAmount.replace(',', '')) - num3;
            document.getElementById(id3).innerText = subTotal;
   
            const taxAmount = document.getElementById(id4).innerText;
            const taxNumber = parseInt(taxAmount);
            const totalTax = Math.round(subTotal*(2/100));
            document.getElementById(id4).innerText = Math.round(totalTax);
   
            const Total = subTotal + taxNumber + num4;
            document.getElementById(id5).innerText = Total;
            return;
             
            }
   /*========================function for add,reduce quantity and price button for phone & phone cover end here===============================*/


   function kilometerToMeter(distance) {
      if(distance>0) {
      var meter = distance*1000;
      console.log("Meter = "+meter);
      }
      else {
      console.log("Distance shouldn't negative number,please provdie the correct number.");
      }
      console.log(10);
   }