// Function to classify grade based on a single mark (reusable)
const getGrade = (marks) => {
    let grade;
    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70) {
        grade = 'B';
    } else if (marks >= 60) {
        grade = 'C';
    } else if (marks >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade;
};

// Function to provide a remark based on the grade
const getGradeRemark = (grade) => {
    switch (grade) {
        case 'A+':
            return 'Excellent! You are a top performer.';
        case 'A':
            return 'Great work! Keep it up.';
        case 'B':
            return 'Good job! You passed with a solid grade.';
        case 'C':
            return 'Satisfactory performance. Room for improvement.';
        case 'D':
            return 'You passed, but barely. Study harder.';
        case 'F':
            return 'You failed. Please try again.';
        default:
            return 'Invalid grade.';
    }
};

document.getElementById('calculate-btn').addEventListener('click', () => {
    // Get all input elements with the class 'subject-marks'
    const marksInputs = document.querySelectorAll('.subject-marks');
    let totalMarks = 0;
    const grades = [];
    const gradeOutput = document.getElementById('grade-output');
    const resultContainer = document.querySelector('.result-container');

    // --- User Input & Validation with a For Loop ---
    let isValid = true;
    for (let i = 0; i < marksInputs.length; i++) {
        const marks = parseInt(marksInputs[i].value);

        // Validate each subject's marks
        if (isNaN(marks) || marks < 0 || marks > 100) {
            isValid = false;
            break; // Stop the loop if invalid input is found
        }
        totalMarks += marks;
        grades.push({ subject: `Subject ${i + 1}`, marks: marks });
    }

    if (!isValid) {
        gradeOutput.innerHTML = `<p style="color:red;">Please enter a valid number (0-100) for all subjects.</p>`;
        resultContainer.style.display = 'block';
        return;
    }

    // Calculate average marks
    const averageMarks = totalMarks / marksInputs.length;
    
    // --- Conditionals (if-else & switch-case) ---
    const overallGrade = getGrade(averageMarks);
    const overallRemark = getGradeRemark(overallGrade);

    // Prepare the HTML output using template literals
    let outputHTML = `
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}</p>
        <p><strong>Overall Grade:</strong> ${overallGrade}</p>
        <p><strong>Remark:</strong> ${overallRemark}</p>
        <hr>
        <h3>Individual Grades:</h3>
        <ul>`;

    // Looping to display individual subject grades
    for (let i = 0; i < grades.length; i++) {
        const subjectGrade = getGrade(grades[i].marks);
        outputHTML += `<li>${grades[i].subject}: ${grades[i].marks} -> Grade: ${subjectGrade}</li>`;
    }

    outputHTML += `</ul>`;
    
    gradeOutput.innerHTML = outputHTML;
    resultContainer.style.display = 'block';
});