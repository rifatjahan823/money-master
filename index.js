//get total income and expenses

function incomeExpense(){
  //expenses area calculator
  let foodInput = document.getElementById("food-input");
  let foodValue = parseInt(foodInput.value);
  foodInput.value=""
  let rentInput = document.getElementById("rent-input");
  let rentValue = parseInt(rentInput.value);
  rentInput.value=""
  let clotheInput = document.getElementById("clothe-input");
 let clotheValue = parseInt(clotheInput.value);
 clotheInput.value=""
 let sumExpense =foodValue+rentValue+clotheValue;

//expenses balance
let totalExpenses = document.getElementById("total-expenses");
let totalExpensesValue = totalExpenses.innerText

   if(sumExpense>0){
       totalExpenses.innerText=sumExpense
   }

  //income add
   let income = document.getElementById("income-input");
   let incomeValue = parseInt(income.value)
   income.value=""
   let balance  = document.getElementById("balance");
     if(foodValue>0 && rentValue>0 && clotheValue>0 && totalExpensesValue<incomeValue &&  sumExpense<incomeValue){
      balance.innerText=incomeValue-sumExpense;
        } 
        else if( sumExpense>0 &&  totalExpensesValue>incomeValue || sumExpense>incomeValue){
          totalExpenses.innerText="0"
          balance.innerText="0 "
         alert("your totalexpenses is grater than your balance ")
        }
        else if(sumExpense==incomeValue){
          balance.innerText=incomeValue-sumExpense;
          totalExpenses.innerText="0"
          balance.innerText="0 "
          alert("your balance and expenses same ")
        }
        else if(totalExpensesValue>incomeValue || sumExpense>incomeValue || incomeValue<0){
          balance.innerText=" 0";
          alert("please give positive number all input")
        }
        else{
          totalExpenses.innerText="0"
          balance.innerText="0 "
          alert("please fill all input and give positive number")
        } 
} 

//get sum of parcent
function parcentAdd(){
  let totalIncome = document.getElementById("balance");
  let totalValue = totalIncome.innerText;

  let parcentInput = document.getElementById("parcent-input");
  let parcentValue = parcentInput.value;
  parcentInput.value=""

  let totalParcent = document.getElementById("saving-amount");
      
  let totalsum = Math.floor(totalParcent.innerText=  (parcentValue* totalValue)/100)

//remaing balance add

let remaining = document.getElementById("remaining balance")
if(totalsum<=totalValue && parcentValue>0){
  remaining.innerText=totalValue-totalsum
}
else if(parcentValue<=0){
alert("please give positive number")
}

else{
  totalParcent.innerText="0"
  remaining.innerText="0"
  alert("saving amount is grater than your balance")
}
}

//add all clickable button
document.getElementById("calculator").addEventListener("click",function(){
incomeExpense()

})
document.getElementById("save-btn").addEventListener("click",function(){
 
  parcentAdd()
})