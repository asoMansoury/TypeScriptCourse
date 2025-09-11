"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    var { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial amount cannot be negative.";
    }
    if (duration <= 0) {
        return "Duration cannot be negative.";
    }
    if (expectedReturn <= 0) {
        return "Expected return cannot be negative.";
    }
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContribution - initialAmount;
        totalContribution = totalContribution + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${(i + 1).toString()}`,
            totalAmount: total,
            annualContribution,
            totalInterestEarned
        });
    }
    return annualResults;
} //=> result[]
function printResults(results) {
    //print (output) the result data
    if (typeof results === 'string') {
        console.error(results);
        return;
    }
    ;
    for (const yearEndResult of results) {
        console.log(`Year: ${yearEndResult.year}`);
        console.log(`Total Amount: $${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Annual Contribution: $${yearEndResult.annualContribution.toFixed(0)}`);
        console.log(`Total Interest Earned: $${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('-----------------------------');
    }
}
const invertmentData = {
    initialAmount: 5000, // Initial investment amount
    annualContribution: 500, // Annual contribution
    expectedReturn: 0.08, // Expected return of 5%
    duration: 10 // Duration in years
};
const results = calculateInvestment(invertmentData);
printResults(results);
//# sourceMappingURL=calculator.js.map