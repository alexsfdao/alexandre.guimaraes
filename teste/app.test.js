const fs = require('fs');
const path = require('path');

describe('Testando interações com HTML', () => {
  beforeEach(() => {
  
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html;

    
    require('../app.js');
  });

  test('O resultado deve mostrar o dobro do número inserido', () => {
  
    const inputNumber = document.getElementById('inputNumber');
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');

  
    inputNumber.value = '5';

  
    calculateButton.click();

    expect(resultDiv.textContent).toBe('Resultado: 10');
  });

  test('O resultado deve ser "-" se o campo de entrada estiver vazio', () => {
    
    const inputNumber = document.getElementById('inputNumber');
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');

    
    inputNumber.value = '';

    calculateButton.click();

    expect(resultDiv.textContent).toBe('Resultado: -');
  });
});

