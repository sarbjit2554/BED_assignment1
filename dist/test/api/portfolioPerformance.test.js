"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const portfolioPerformance_1 = require("../../src/Portfolio/portfolioPerformance");
describe('calculatePortfolioPerformance', () => {
    it('should correctly calculate profit and performance summary for profit scenario', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 12000);
        expect(result.profitOrLoss).toBe(2000);
        expect(result.performanceSummary).toBe('The portfolio has gained moderately with a profit of $2000.00.');
    });
    it('should correctly calculate loss and performance summary for a loss scenario', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 8000);
        expect(result.profitOrLoss).toBe(-2000);
        expect(result.performanceSummary).toBe('The portfolio has performed poorly with a loss of $2000.00.');
    });
    it('should handle large gains and reflect the significant gain summary', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 15000);
        expect(result.profitOrLoss).toBe(5000);
        expect(result.performanceSummary).toBe('The portfolio has gained significantly with a profit of $5000.00.');
    });
    it('should handle large losses and reflect the significant loss summary', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 4000);
        expect(result.profitOrLoss).toBe(-6000);
        expect(result.performanceSummary).toBe('The portfolio has lost significantly with a loss of $6000.00.');
    });
    it('should handle no change in value and reflect the poor performance summary', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 10000);
        expect(result.profitOrLoss).toBe(0);
        expect(result.performanceSummary).toBe('The portfolio has performed poorly with a loss of $0.00.');
    });
});
it('should correctly calculate compound interest', () => {
    const result = (0, portfolioPerformance_1.calculateCompoundInterest)(1000, 5, 5, 1); // Principal, Rate, Time, Frequency (1 = annually)
    expect(result).toBeCloseTo(1283.68, 2); // Expected value rounded to 2 decimal places
});
it('should calculate compound interest with annual compounding', () => {
    const result = (0, portfolioPerformance_1.calculateCompoundInterest)(1500, 3, 3, 1);
    expect(result).toBeCloseTo(1641.83, 2); // Expected value rounded to 2 decimal places
});
describe('calculateInvestmentGrowth', () => {
    it('should correctly calculate investment growth over time', () => {
        const result = (0, portfolioPerformance_1.calculateInvestmentGrowth)(1000, 0.05, 5); // Principal, Rate, Time
        expect(result).toBeCloseTo(1276.28, 2); // Expected value rounded to 2 decimal places
    });
    it('should calculate investment growth with higher growth rate', () => {
        const result = (0, portfolioPerformance_1.calculateInvestmentGrowth)(2000, 0.08, 10); // Principal, Growth rate, Years
        expect(result).toBeCloseTo(4310.59, 2); // Expected value rounded to 2 decimal places
    });
});
