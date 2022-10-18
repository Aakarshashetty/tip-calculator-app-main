const billAmount = document.querySelector(".bill");
const noOfPeople = document.querySelector(".people");
const tipButtons = document.querySelector(".tip-buttons");
let displayTip = document.querySelector(".tip-amount");
let displayTot = document.querySelector(".tot-amount");
const reset = document.querySelector(".reset");

// tipButtons.forEach(tip=>{
//     console.log(tip);
// });
tipButtons.addEventListener("click",e=>{
   
        let tip = e.target.value;
        calculateTip(tip);
});
const calculateTip = tip=>{
    let bill = Number(billAmount.value);
    tipAmount = bill*(tip/100);
    calculateTotalAmountPerPerson(tipAmount/Number(noOfPeople.value));
};
const calculateTotalAmountPerPerson = tipAmount=>{
    displayTip.innerText = `$${tipAmount.toFixed(2)}`;
    let totalPerPerson = Number(billAmount.value)/Number(noOfPeople.value);
    let totalWithTipPerPerson = totalPerPerson + tipAmount;
    // console.log(totalWithTipPerPerson.toFixed(2));
    displayTot.innerText = `$${totalWithTipPerPerson.toFixed(2)}`;
};
reset.addEventListener("click", ()=>{
    location.reload();
});