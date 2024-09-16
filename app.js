document.getElementById('calculateButton').addEventListener('click', function() {
  const inputNumber = document.getElementById('inputNumber').value;
  const resultDiv = document.getElementById('result');

  if (inputNumber === '') {
    resultDiv.textContent = 'Resultado: -';
    return;
  }

  const number = parseFloat(inputNumber);
  if (!isNaN(number)) {
    resultDiv.textContent = `Resultado: ${number * 2}`;
  } else {
    resultDiv.textContent = 'Resultado: -';
  }
});
