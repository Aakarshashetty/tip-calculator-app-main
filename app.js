const billAmount = document.querySelector(".bill");
const noOfPeople = document.querySelector(".people");
const tipButtons = document.querySelector(".tip-buttons");
let displayTip = document.querySelector(".tip-amount");
let displayTot = document.querySelector(".tot-amount");
const reset = document.querySelector(".reset");
const custom = document.querySelector(".custom");
const errorMsg = document.querySelector(".error");

let people = Number(noOfPeople.value);
let bill = Number(billAmount.value);
const calculateTotalAmountPerPerson = tipAmount=>{
    displayTip.innerText = `$${tipAmount.toFixed(2)}`;
    let totalWithTipPerPerson = (bill/people) + tipAmount;
    displayTot.innerText = `$${totalWithTipPerPerson.toFixed(2)}`;
};
const calculateTip = tip=>{  
    tipAmount = bill*(tip/100);
    if(people>0){
        calculateTotalAmountPerPerson(tipAmount/people);
    }
    else{
        errorMsg.innerText = "Can't be zero";
    }
};


tipButtons.addEventListener("click",e=>{
        let tip = e.target.value;
        calculateTip(tip);
});
custom.addEventListener("input",e=>{
    let customTip = e.target.value;
    calculateTip(customTip);
 });
reset.addEventListener("click", ()=>{
    location.reload();
});