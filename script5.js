document.getElementById('find-btn').addEventListener('click', () => {
    // Get all input elements with their IDs
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const num3 = document.getElementById('num3');
    const num4 = document.getElementById('num4');

    const resultOutput = document.getElementById('result-output');
    const resultContainer = document.querySelector('.result-container');

    // Convert input values to numbers
    const numbers = [
        parseFloat(num1.value),
        parseFloat(num2.value),
        parseFloat(num3.value),
        parseFloat(num4.value)
    ];

    // Simple validation: check if any of the inputs are not a number
    if (numbers.some(isNaN)) {
        resultOutput.innerHTML = `<p style="color:red;">Please enter four valid numbers.</p>`;
        resultContainer.style.display = 'block';
        return;
    }

    // Find the maximum and minimum values using Math methods and the spread operator (...)
    const maxValue = Math.max(...numbers);
    const minValue = Math.min(...numbers);

    // Display the results using a template literal
    resultOutput.innerHTML = `
        <p><strong>Maximum Value:</strong> ${maxValue}</p>
        <p><strong>Minimum Value:</strong> ${minValue}</p>
    `;

    resultContainer.style.display = 'block';
});