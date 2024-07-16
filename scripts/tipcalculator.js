// tipCalculator

//collecting values form input tags
const billTotal = document.getElementById('billTotalInput');
const tip =document.getElementById('tipInput');
const numberOfPeopleDiv =document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

//get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

//** calculating the total of per person bill **
const calculateBill=()=>{
  const bill = Number(billTotal.value);
  const tipPercent = Number(tip.value/100);
  const tipAmount =bill * tipPercent
  const amount = (bill + tipAmount)/numberOfPeople

perPersonTotalDiv.innerText = `₹ ${amount.toFixed(2)}`
  return amount
}

console.log(calculateBill())


// creating increase people count function
const increasePeople=()=>{
  numberOfPeopleDiv.innerText = ++numberOfPeople
  
  //calculate the bill total while finish this
  calculateBill()
}

//creating decerease people count funtion
const decreasePeople=()=>{
  if(numberOfPeople <= 1){
    return
  }
    numberOfPeopleDiv.innerText = --numberOfPeople
  //calculate the bill total while finish this
  calculateBill()
}