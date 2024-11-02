const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById('output');

const valToRoman = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];

function checkUsersInput(){
  const num = parseInt(numberInput.value, 10);
  
  if (isNaN(num)) {
    output.innerText = "Please enter a valid number";
    return false;
  } else if (num <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return false;
  } else if (num > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return false;
  }
  return true;
}

function convertUsersNumber(num){
  for (const {value, symbol} of valToRoman){
    if (num >= value){
      return symbol + convertUsersNumber(num - value);
    }
  }
  return "";
}

function fullCheck() {
  output.innerText = "";

  if (checkUsersInput()) {
    const num = parseInt(numberInput.value, 10);
    output.innerText = convertUsersNumber(num);
  }
}

convertButton.addEventListener('click', fullCheck);