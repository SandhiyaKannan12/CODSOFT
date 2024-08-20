document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = null;
                display.textContent = '0';
            } else if (value === '=') {
                if (operator && previousInput) {
                    try {
                        // Evaluate the expression and update display
                        const result = eval(`${previousInput} ${operator} ${currentInput}`);
                        display.textContent = result;
                        currentInput = result;
                        previousInput = '';
                        operator = null;
                    } catch (e) {
                        display.textContent = 'Error';
                    }
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
