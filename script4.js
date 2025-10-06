// Global scope variable (accessible everywhere)
const APP_TITLE = "Number Palindrome Checker";

// 1. Function Declaration (The traditional way)
function reverseNumber(num) {
    // Local scope: 'reversed' is only available inside this function
    let reversed = 0;
    
    // Convert number to string to handle the logic simply
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    
    // The parseInt function will convert the string back to a number
    // It will also handle negative numbers by ignoring the '-'
    reversed = parseInt(reversedStr);
    
    return reversed;
}

// 2. Function Expression (assigning a function to a variable)
const isPalindrome = function(originalNum) {
    // This function checks if a number is a palindrome
    // A palindrome is a number that reads the same backward as forward (e.g., 121)
    
    // We can use our function declaration 'reverseNumber' here,
    // which shows how functions can call other functions.
    const reversedNum = reverseNumber(originalNum);
    
    return originalNum === reversedNum;
};

// 3. Arrow Function (Modern, concise syntax)
const displayResults = (originalNum, reversedNum, isPal) => {
    // This function uses template literals to format the output
    const outputDiv = document.getElementById('result-output');
    
    const outputHTML = `
        <p><strong>Original Number:</strong> ${originalNum}</p>
        <p><strong>Reversed Number:</strong> ${reversedNum}</p>
        <p><strong>Is Palindrome:</strong> ${isPal ? 'Yes' : 'No'}</p>
    `;
    
    outputDiv.innerHTML = outputHTML;
};

// --- Main Logic with Error Handling ---
document.getElementById('process-btn').addEventListener('click', () => {
    const numberInput = document.getElementById('number-input');
    const resultContainer = document.querySelector('.result-container');
    const outputDiv = document.getElementById('result-output');
    
    // Error Handling: Use a try-catch block for robust input validation
    try {
        const userInput = numberInput.value.trim();
        
        // Throw an error if the input is not a number or is empty
        if (userInput === '' || isNaN(userInput)) {
            // Throwing a custom error message
            throw new Error('Please enter a valid number.');
        }

        const originalNum = parseInt(userInput);
        
        // Demonstrate a closure (advanced topic for viva)
        // A closure is a function that remembers variables from its outer scope.
        // The 'counter' variable is created once and 'increment' keeps a reference to it.
        const createCounter = () => {
            let counter = 0;
            return () => {
                counter++;
                console.log(`Closure counter: ${counter}`);
            };
        };
        const increment = createCounter();
        
        // Call the closure to show it's working
        increment(); 

        // Invoke the functions
        const reversed = reverseNumber(originalNum);
        const isPal = isPalindrome(originalNum);
        
        // Display results
        displayResults(originalNum, reversed, isPal);
        resultContainer.style.display = 'block';

        // Demonstrate a local vs. global scope
        let message = "Processing complete."; // Local scope
        console.log(message);
        console.log(`Global App Title: ${APP_TITLE}`); // Accessing global variable

    } catch (error) {
        // Catch the error and display a user-friendly message
        outputDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        resultContainer.style.display = 'block';
    }
});