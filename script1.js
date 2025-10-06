// Variable Declarations: Using const for fixed prices
const APPLE_PRICE = 60;
const ORANGE_PRICE = 50;

// Get the DOM elements
const appleQuantityInput = document.getElementById('apple-quantity');
const orangeQuantityInput = document.getElementById('orange-quantity');
const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');
const billOutput = document.getElementById('bill-output');
const resultContainer = document.querySelector('.result-container');

// Function to calculate and display the bill
const calculateBill = () => {
    // Get the quantities from the input fields
    const appleQuantity = parseInt(appleQuantityInput.value);
    const orangeQuantity = parseInt(orangeQuantityInput.value);

    // Calculate the total cost for each item
    const appleTotal = appleQuantity * APPLE_PRICE;
    const orangeTotal = orangeQuantity * ORANGE_PRICE;

    // Calculate the grand total
    const grandTotal = appleTotal + orangeTotal;

    // ES6+ Feature: Template Literals for a clean output string
    let outputHTML = `
        <p><strong>Apples:</strong> ${appleQuantity} x Rs.${APPLE_PRICE} = Rs.${appleTotal}</p>
        <p><strong>Oranges:</strong> ${orangeQuantity} x Rs.${ORANGE_PRICE} = Rs.${orangeTotal}</p>
        <hr>
        <p><strong>Total Bill:</strong> Rs.${grandTotal}</p>
    `;
    
    // Check if both quantities are zero
    if (appleQuantity === 0 && orangeQuantity === 0) {
      outputHTML = `<p>Please add some items to your bill.</p>`;
    }

    billOutput.innerHTML = outputHTML;
    resultContainer.style.display = 'block';
};

// Function to clear all quantities and the bill display
const clearBill = () => {
    appleQuantityInput.value = 0;
    orangeQuantityInput.value = 0;
    billOutput.innerHTML = '';
    resultContainer.style.display = 'none';
};

// Event Listeners: Trigger functions when buttons are clicked
calculateBtn.addEventListener('click', calculateBill);
clearBtn.addEventListener('click', clearBill);