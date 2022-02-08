let bill = document.querySelector('#bill');
let btnFive = document.querySelector('#fivePr');
let btnTen = document.querySelector('#tenPr');
let btnFifteen = document.querySelector('#fifteenPr');
let btnTwentyFive = document.querySelector('#twentyFivePr');
let btnFifty = document.querySelector('#fiftyPr');
let btnCustom = document.querySelector('#customPr');
let peopleNum = document.querySelector('#peopleNum');
let tipNum = document.querySelector('#tipNum');
let totalNum = document.querySelector('#totalNum');
let inputBill = document.querySelector('.insertBillAmount');
let inputPeoples = document.querySelector('.insertNumberOfPeople');
let btnReset = document.querySelector('#resetBtn');
let alertText = document.querySelector('#alertText');
let billAmount = 0;
let peoples = 0;
let tipAmount = 0;
let totalAmount = 0;
let tip = 0;
let tipOnly = 0;


inputBill.addEventListener('click', addBillAmount);
inputPeoples.addEventListener('click', addPeoples);
// tips buttons
btnFive.addEventListener('click', fivePercent);
btnTen.addEventListener('click', tenPercent);
btnFifteen.addEventListener('click', fifteenPercent);
btnTwentyFive.addEventListener('click', twentyFivePercent);
btnFifty.addEventListener('click', fiftyPercent);
btnCustom.addEventListener('click', customPercent)
// reset button
btnReset.addEventListener('click', () => window.location.reload());



function addBillAmount() {
  billAmount = prompt("Enter your bill here");
  let text = '';
  if (isNaN(billAmount)) {
    inputBill.style.border = '2px solid red';
    alertText.innerHTML = '(Must be a number!)';
  } else if (billAmount <= 0) {
    inputBill.style.border = '2px solid red';
    alertText.innerHTML = "(Can't be zero!)";
  } else {
    alertText.innerHTML = "";
    inputBill.style.border = '0';
  }
  bill.innerHTML = billAmount;
  calculateTotalAmount();
  calculateTipAmount();
}

function addPeoples() {
  peoples = prompt("Enter number of peoples here");
  if (peoples <= 0) {
    inputPeoples.style.border = '2px solid red';
    alertText2.innerHTML = "(Can't be zero!)";
  } else if (isNaN(peoples)) {
    inputPeoples.style.border = '2px solid red';
    alertText2.innerHTML = '(Must be a number!)';
  } else {
    alertText2.innerHTML = "";
    inputPeoples.style.border = '0';
  }
  peopleNum.innerHTML = peoples;
  calculateTotalAmount();
  calculateTipAmount();
}


function fivePercent() {
  btnFive.classList.add('active');
  btnTen.classList.remove('active');
  btnFifteen.classList.remove('active');
  btnTwentyFive.classList.remove('active');
  btnFifty.classList.remove('active');
  customPr.classList.remove('activeCustomPr');

  tip = 1.05;
  tipOnly = 0.05;
  calculateTotalAmount();
  calculateTipAmount();
}
function tenPercent() {
  btnFive.classList.remove('active');
  btnTen.classList.add('active');
  btnFifteen.classList.remove('active');
  btnTwentyFive.classList.remove('active');
  btnFifty.classList.remove('active');
  customPr.classList.remove('activeCustomPr');

  tip = 1.1;
  tipOnly = 0.1;
  calculateTotalAmount();
  calculateTipAmount();
}
function fifteenPercent() {
  btnFive.classList.remove('active');
  btnTen.classList.remove('active');
  btnFifteen.classList.add('active');
  btnTwentyFive.classList.remove('active');
  btnFifty.classList.remove('active');
  customPr.classList.remove('activeCustomPr');

  tip = 1.15;
  tipOnly = 0.15;
  calculateTotalAmount();
  calculateTipAmount();
}
function twentyFivePercent() {
  btnFive.classList.remove('active');
  btnTen.classList.remove('active');
  btnFifteen.classList.remove('active');
  btnTwentyFive.classList.add('active');
  btnFifty.classList.remove('active');
  customPr.classList.remove('activeCustomPr');

  tip = 1.25;
  tipOnly = 0.25;
  calculateTotalAmount();
  calculateTipAmount();
}
function fiftyPercent() {
  btnFive.classList.remove('active');
  btnTen.classList.remove('active');
  btnFifteen.classList.remove('active');
  btnTwentyFive.classList.remove('active');
  btnFifty.classList.add('active');
  customPr.classList.remove('activeCustomPr');

  tip = 1.5;
  tipOnly = 0.5;
  calculateTotalAmount();
  calculateTipAmount();
}
function customPercent() {
  btnFive.classList.remove('active');
  btnTen.classList.remove('active');
  btnFifteen.classList.remove('active');
  btnTwentyFive.classList.remove('active');
  btnFifty.classList.remove('active');
  customPr.classList.add('activeCustomPr');

  let customPrompt = prompt("Enter the tip % you want");
  tip = (customPrompt / 100) + 1;
  tipOnly = customPrompt / 100;
  customPr.innerHTML = customPrompt + '%';

  calculateTotalAmount();
  calculateTipAmount();
}


function calculateTotalAmount() {
  if (tip == 0) {
    totalAmount = billAmount / peoples;
  } else {
    totalAmount = (billAmount / peoples) * tip;
  }

  if (billAmount == 0) {
    totalAmount = 0;
  } else if (peoples == 0) {
    totalAmount = 0;
  }
  totalNum.innerHTML = '$' + totalAmount.toFixed(2);
}

function calculateTipAmount() {
  if (tip == 0) {
    tipAmount = 0;
  } else {
    tipAmount = (billAmount / peoples) * tipOnly;
  }

  if (billAmount == 0) {
    tipAmount = 0;
  } else if (peoples == 0) {
    tipAmount = 0;
  }
  tipNum.innerHTML = '$' + tipAmount.toFixed(2);
}
