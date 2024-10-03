const inputNum = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRomanNum = () => {
  
  let num = parseFloat(inputNum.value); 

  if (isNaN(num) || inputNum.value.trim() === "") {
    output.innerHTML = "Please enter a valid number";
    output.classList.add("error");
    output.style.display = "block"; 
    return;
  }

  num = Math.floor(num);

  if (num < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    output.classList.add("error");
    output.style.display = "block"; 
    return;
  }

  if (num > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    output.classList.add("error");
    output.style.display = "block"; 
    return;
  }

  const romanSymbols = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
  ];

  const romanValues = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];

  let romanNumeral = "";

  /* ITERATION AND CONVERSION
    Loop Logic:
    -The loop goes through each value in romanValues.
    -Inside the loop, the while statement checks if the input number (num) is greater than or equal to the current romanValues[i].
    -If true, the corresponding Roman symbol (romanSymbols[i]) is appended to the romanNumeral string, and the input number (num) is reduced by the value of romanValues[i].
    -This repeats until the number is smaller than the current romanValues[i], and then the loop moves to the next Roman numeral.
  */
  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i]) {
      romanNumeral += romanSymbols[i];
      num -= romanValues[i];
    }
  }

  inputNum.value = "";
  output.classList.remove("error"); 
  output.style.display = "block"; 
  output.innerHTML = romanNumeral;
}

convertBtn.addEventListener("click", convertToRomanNum);