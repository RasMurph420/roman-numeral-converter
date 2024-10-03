const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

// Mapping of integers to their Roman numeral representations
const romanMap = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
};

// Add event listener to the button
convertBtn.addEventListener('click', function() {
  clearOutput(); // Clear previous output before new input

  const numberStr = numberInput.value.trim();
  const number = parseInt(numberStr, 10);

  // Validate input
  if (numberStr === '') {
    outputDiv.textContent = 'Please enter a valid number';
    outputDiv.classList.add('alert'); // Add alert styling
  } else if (isNaN(number)) {
    outputDiv.textContent = 'Please enter a valid number';
    outputDiv.classList.add('alert'); // Add alert styling
  } else if (number < 1) {
    outputDiv.textContent = 'Please enter a number greater than or equal to 1';
    outputDiv.classList.add('alert'); // Add alert styling
  } else if (number >= 4000) {
    outputDiv.textContent = 'Please enter a number less than or equal to 3999';
    outputDiv.classList.add('alert'); // Add alert styling
  } else {
    const romanNumeral = convertToRoman(number);
    outputDiv.textContent = romanNumeral;
  }
});

// Function to convert integer to Roman numeral
const convertToRoman = num => {
  let romanNumeral = '';
  // Use Object.keys to iterate over the keys in reverse order
  const values = Object.keys(romanMap).map(Number).reverse();
  
  values.forEach(value => {
    while (num >= value) {
      romanNumeral += romanMap[value];
      num -= value;
    }
  });
  
  return romanNumeral;
};

// Function to clear output
const clearOutput = () => {
  outputDiv.textContent = '';
  outputDiv.classList.remove('alert'); // Remove alert styling
};
