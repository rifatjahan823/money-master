//get total income and expenses

function incomeExpense(){
    //expenses area calculator
    let foodInput = document.getElementById("food-input");
    let foodValue = parseInt(foodInput.value);
   
    let rentInput = document.getElementById("rent-input");
    let rentValue = parseInt(rentInput.value);
   
    let clotheInput = document.getElementById("clothe-input");
   let clotheValue = parseInt(clotheInput.value);
   
   let sumExpense =foodValue+rentValue+clotheValue;
    //income add
     let income = document.getElementById("income-input");
     let incomeValue = parseInt(income.value)
  
     let balance  = document.getElementById("balance");
       if(sumExpense>0){
           balance.innerText=incomeValue-sumExpense;
          }
    //expenses balance
    let totalExpenses = document.getElementById("total-expenses");
       if(sumExpense>0){
           totalExpenses.innerText=sumExpense
       }
  }
  //get sum parcent
  function parcentAdd(){
    let totalExpenses = document.getElementById("balance");
    let totalValue = totalExpenses.innerText;
  
    let parcentInput = document.getElementById("parcent-input");
    let parcentValue = parcentInput.value;
  
    let totalParcent = document.getElementById("saving-amount");
        
  
    let totalsum = totalParcent.innerText=  (parcentValue* totalValue)/100
  
  //remaing balance add
  
  document.getElementById("remaining balance").innerText=totalValue-totalsum
   
  }
  
  
  document.getElementById("calculator").addEventListener("click",function(){
  incomeExpense()
  
  })
  document.getElementById("save-btn").addEventListener("click",function(){
  
    parcentAdd()
  })
  