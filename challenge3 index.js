const taxRates = [
    { min: 0, max: 24587, rate: 0.1 },
    { min: 24588, max: 43795, rate: 0.15 },
    { min: 43796, max: 61905, rate: 0.20 },
    { min: 61906, max: 81905, rate: 0.25 },
    { min: 81906, max: 10000000, rate: 0.30 }
];

const nhifRates = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    { min: 8000, max: 11999, rate: 400 },
    { min: 12000, max: 14999, rate: 500 },
    { min: 15000, max: 19999, rate: 600 },
    { min: 20000, max: 24999, rate: 750 },
    { min: 25000, max: 29999, rate: 850 },
    { min: 30000, max: 34999, rate: 900 },
    { min: 35000, max: 39999, rate: 950 },
    { min: 40000, max: 44999, rate: 1000 },
    { min: 45000, max: 49999, rate: 1100 },
    { min: 50000, max: 59999, rate: 1200 },
    { min: 60000, max: 69999, rate: 1300 },
    { min: 70000, max: 79999, rate: 1400 },
    { min: 80000, max: 89999, rate: 1500 },
    { min: 90000, max: 99999, rate: 1600 },
    { min: 100000, max: 109999, rate: 1700 },
    { min: 110000, max: 119999, rate: 1800 },
    { min: 120000, max: 129999, rate: 1900 },
    { min: 130000, max: 139999, rate: 2000 },
    { min: 140000, max: 149999, rate: 2100 },
    { min: 150000, max: 159999, rate: 2200 },
    { min: 160000, max: 169999, rate: 2300 },
    { min: 170000, max: 179999, rate: 2400 },
    { min: 180000, max: 189999, rate: 2500 },
    { min: 190000, max: 199999, rate: 2600 },
    { min: 200000, max: 209999, rate: 2700 },
    { min: 210000, max: 219999, rate: 2800 },
    { min: 220000, max: 229999, rate: 2900 },
    { min: 230000, max: 239999, rate: 3000 },
    { min: 240000, max: 249999, rate: 3100 },
    { min: 250000, max: 10000000, rate: 3200 }
];

const nssfRate = 0.06;

function calculatePayee(grossSalary) {
    let tax = 0;
    let remainingSalary = grossSalary;

    for (const rate of taxRates) {
        if (remainingSalary <= 0) break;

        const taxableAmount = Math.min(remainingSalary, rate.max - rate.min);
        tax += taxableAmount * rate.rate;
        remainingSalary -= taxableAmount;
    }

    return tax;
}

function calculateNhifDeductions(grossSalary) {
    for (const rate of nhifRates) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            return rate.rate;
        }
    }
    return 0;
}

function calculateNssfDeductions(grossSalary) {
    return grossSalary * nssfRate;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhifDeductions = calculateNhifDeductions(grossSalary);
    const nssfDeductions = calculateNssfDeductions(grossSalary);

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return netSalary;
}

const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

if (!isNaN(basicSalary) && !isNaN(benefits) && basicSalary >= 0 && benefits >= 0) {
    const netSalary = calculateNetSalary(basicSalary, benefits);
    console.log(`Net Salary: KES ${netSalary}`);
} else {
    console.log("Invalid input! Salary and benefits should be non-negative numbers.");
}
