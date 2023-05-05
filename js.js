const button = document.getElementById('randomButton');
const generatedNumbersTable = document.getElementById('generatedNumbers');
const usedNumbers = new Set();
const generatedNumbers = [];

button.addEventListener('click', generateRandomNumber);

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 90) + 1;

  while (usedNumbers.has(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 90) + 1;
  }

  usedNumbers.add(randomNumber);
  generatedNumbers.push(randomNumber);

  const numberDisplay = document.getElementById('randomNumber');
  numberDisplay.innerText = randomNumber;

  showGeneratedNumbers();

  if (usedNumbers.size === 90) {
    restartGame();
  }
}

function showGeneratedNumbers() {
  generatedNumbersTable.innerHTML = '';

  let row;
  for (let i = 0; i < 9; i++) {
    row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('td');
      const number = i * 10 + j + 1;
      if (generatedNumbers.includes(number)) {
        cell.innerText = number;
      }
      row.appendChild(cell);
    }
    generatedNumbersTable.appendChild(row);
  }
}

function restartGame() {
  usedNumbers.clear();
  generatedNumbers.length = 0;
  const numberDisplay = document.getElementById('randomNumber');
  numberDisplay.innerText = '';
  showGeneratedNumbers();
}

