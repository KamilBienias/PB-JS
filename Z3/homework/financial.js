const financialData = require("./financial.json");

console.log("i): " + getFinancialObject().spentIn2014);
console.log("ii): " + getFinancialObject().earningsPerCompany);
console.log("iii): " + getFinancialObject().spendingsPerTransactionType);
console.log("iv): " + getFinancialObject().spendingsByMonth);
console.log("v): " + getFinancialObject().spendingsByDayOfWeek);

function getFinancialObject() {
  const financialObject = {
    // i) Function to calculate money spent in 2014
    spentIn2014: calculateSpentInYear(2014),
    // ii) Function to calculate earnings per company
    earningsPerCompany: calculateEarningsPerCompany(),
    // iii) Function to calculate spendings per transaction type
    spendingsPerTransactionType: calculateSpendingsPerTransactionType(),
    // iv) Function to calculate spendings by month
    spendingsByMonth: calculateSpendingsByMonth(),
    // v) Function to calculate spendings per day of the week
    spendingsByDayOfWeek: calculateSpendingsByDayOfWeek()
  };
  return financialObject;
}

// Util functions

// i)
function calculateSpentInYear(year) {
  const result = financialData.filter(
    transaction => new Date(transaction.detailsOfPayent.date).getFullYear() === year)
    .reduce((acc, transaction) => {
      return acc + parseFloat(transaction.cost);
    }, 0);
  return result.toFixed(2);
}

// ii)
function calculateEarningsPerCompany() {
  const earnings = {};
  financialData.forEach(transaction => {
    const company = transaction.detailsOfPayent.company;
    const cost = transaction.cost;
    if (!earnings[company]) {
      earnings[company] = parseFloat(cost);
    } else {
      earnings[company] += parseFloat(cost);
    }
  });
  return Object.entries(earnings);
}

// iii)
function calculateSpendingsPerTransactionType() {
  const spendings = {};
  financialData.forEach(transaction => {
    const Type = transaction.detailsOfPayent.Type;
    const cost = transaction.cost;
    if (!spendings[Type]) {
      spendings[Type] = parseFloat(cost);
    } else {
      spendings[Type] += parseFloat(cost);
    }
  });
  return Object.entries(spendings);
}

// iv)
function calculateSpendingsByMonth() {
  const spendings = {};
  financialData.forEach(transaction => {
    const month = new Date(transaction.detailsOfPayent.date).getMonth();
    if (!spendings[month]) {
      spendings[month] = parseFloat(transaction.cost);
    } else {
      spendings[month] += parseFloat(transaction.cost);
    }
  });
  return Object.entries(spendings);
}

// v)
function calculateSpendingsByDayOfWeek() {
  const spendings = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };
  financialData.forEach(transaction => {
    const dayOfWeek = new Date(transaction.detailsOfPayent.date).getDay();
    spendings[dayOfWeek] += parseFloat(transaction.cost);
  });
  return Object.entries(spendings);
}
