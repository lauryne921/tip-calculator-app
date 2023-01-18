const bill = document.getElementById('bill'); 
const custom = document.getElementById('tipCustom'); 
const people = document.getElementById('people'); 
const resetBtn = document.getElementById('btn-reset'); 

const amountLabel = document.getElementById('amount-label'); 
const totalLabel = document.getElementById('total-label'); 


function tipAmount(valueNumber) {
   amountLabel.innerText = "$" + (bill.value * valueNumber / people.value).toFixed(2); 
}

function totalAmount(valueNumber) {
   totalLabel.innerText = "$" + ((bill.value / people.value) + (bill.value * valueNumber / people.value)).toFixed(2); 
}


function total() {
   if (document.getElementById('one').checked) {
      const valueOne = document.getElementById('one').value;
      tipAmount(valueOne); 
      totalAmount(valueOne);
   }
   else if (document.getElementById('two').checked) {
      const valueTwo = document.getElementById('two').value;
      tipAmount(valueTwo); 
      totalAmount(valueTwo);
   }
   else if (document.getElementById('three').checked) {
      const valueThree = document.getElementById('three').value;
      tipAmount(valueThree); 
      totalAmount(valueThree); 
   }
   else if (document.getElementById('four').checked) {
      const valueFour = document.getElementById(four).value;
      tipAmount(valueFour); 
      totalAmount(valueFour); 
   }
   else if (document.getElementById('five').checked) {
      const valueFive = document.getElementById('five').value;
      tipAmount(valueFive);
      totalAmount(valueFive); 
   }
   else {
      amountLabel.innerText = "$" + bill.value * (custom.value / 100) / people.value;
      totalLabel.innerText = "$" + ((bill.value / people.value) + (bill.value * (custom.value / 100) / people.value));
   }
}


resetBtn.addEventListener('click', () => {
   bill.value = ""; 
   people.value = "";
   custom.value = ""; 
   amountLabel.innerText = ""; 
   totalLabel.innerText = ""; 
   document.getElementById('one').checked = false; 
   document.getElementById('two').checked = false; 
   document.getElementById('three').checked = false; 
   document.getElementById('four').checked = false; 
   document.getElementById('five').checked = false; 
   document.getElementById('tipCustom').value = ""; 
}); 
