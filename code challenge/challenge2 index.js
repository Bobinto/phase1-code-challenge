function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
    }

    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}

function main() {
    const userInput = prompt("The speed of the car:");
    const speed = parseInt(userInput);

    if (!isNaN(speed) && speed >= 0) {
        calculateDemeritPoints(speed);
    } else {
        console.log("Invalid input! Speed should be a non-negative number.");
    }
}

main();
