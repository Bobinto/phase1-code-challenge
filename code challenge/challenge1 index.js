function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

function main() {
    const userInput = prompt("Enter the student's mark (between 0 and 100):");
    const mark = parseFloat(userInput);

    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        const grade = calculateGrade(mark);
        alert(`The student's grade is: ${grade}`);
    } else {
        alert("Invalid input! Mark should be a number between 0 and 100.");
    }
}

main();
