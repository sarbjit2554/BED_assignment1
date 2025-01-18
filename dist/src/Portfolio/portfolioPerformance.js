"use strict";
// src/portfolio/portfolioPerformance.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePortfolioPerformance = calculatePortfolioPerformance;
exports.calculateCompoundInterest = calculateCompoundInterest;
exports.calculateInvestmentGrowth = calculateInvestmentGrowth;
// Function to calculate portfolio performance
function calculatePortfolioPerformance(initialInvestment, currentValue) {
    // Calculate profit or loss and percentage change
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    // Dynamically determine the performance summary based on the percentage change
    const performanceSummary = percentageChange > 20
        ? `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.`
        : percentageChange > 0
            ? `The portfolio has gained moderately with a profit of $${profitOrLoss.toFixed(2)}.`
            : percentageChange < -20
                ? `The portfolio has lost significantly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`
                : `The portfolio has performed poorly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`;
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}
// Function to calculate compound interest with compounding frequency
function calculateCompoundInterest(principal, rate, time, frequency) {
    const result = principal * Math.pow(1 + rate / (100 * frequency), frequency * time);
    return parseFloat(result.toFixed(2)); // Round to 2 decimal places
}
// Function to calculate investment growth
function calculateInvestmentGrowth(initialInvestment, rateOfReturn, years) {
    const result = initialInvestment * Math.pow(1 + rateOfReturn / 100, years);
    return parseFloat(result.toFixed(2)); // Round to 2 decimal places
}
