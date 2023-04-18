const daysRemainingModule = require('./daysRemainingModule');

const targetDate = process.argv[2];

const daysRemaining = daysRemainingModule.calculateDaysRemaining(targetDate);

console.log(`Faltan ${daysRemaining} días hasta el ${targetDate}`);
