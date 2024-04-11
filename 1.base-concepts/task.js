// "use strict"
// function solveEquation(a, b, c) {
//   let arr = [];
  
//   return arr;
// }

// function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
// }

"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Convert percentage to a range of 0 to 1
  let monthlyInterestRate = percent / 100 / 12;

  // Calculate the body of the loan
  let loanBody = amount - contribution;

  // Calculate the monthly payment
  let monthlyPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / ((1 + monthlyInterestRate) ** countMonths - 1)));

  // Calculate the total amount to be paid
  let totalAmount = monthlyPayment * countMonths;

  // Round the result to two decimal places
  totalAmount = Math.round(totalAmount * 100) / 100;

  return totalAmount;
}