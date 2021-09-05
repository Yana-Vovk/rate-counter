const MAX_SALARY = 200;
const LOST_RATING_RATE = 0.3;
const LOST_BUDGET_RATE = 0.3;
const CTR_RATE = 0.3;
const LEADS_RATE = 0.1;

const LOST_RATING_LIMIT = 25;
const LOST_BUDGET_LIMIT = 10;
const CTR_LIMIT = 8;
const LEADS_LIMIT = 40;

let amountOfRatingSalary = MAX_SALARY * LOST_RATING_RATE;
let amountOfBudgetSalary = MAX_SALARY * LOST_BUDGET_RATE;
let amountOfCtrSalary = MAX_SALARY * CTR_RATE;
let amountOfLeadsSalary = MAX_SALARY * LEADS_RATE;

console.log(amountOfRatingSalary, amountOfBudgetSalary, amountOfCtrSalary, amountOfLeadsSalary);


const btnSubmitRef = document.querySelector("[data-action-submit]");

const ratingRef = document.querySelector("#rating-input");
const budgetRef = document.querySelector("#budget-input");
const ctrRef = document.querySelector("#ctr-input");
const leadsRef = document.querySelector("#leads-input");
const outputRef = document.querySelector("#current-salary");


btnSubmitRef.addEventListener('click', submitData);


function submitData() {
    let actualRatingSal;
    let actualBudgetSal;
    let actualCtrSal;
    let actualLeadsSal;

    if (Number(ratingRef.value) <= LOST_RATING_LIMIT) {
        actualRatingSal = amountOfRatingSalary;
    } else {
        actualRatingSal = Math.round(((LOST_RATING_LIMIT - (Number(ratingRef.value) - LOST_RATING_LIMIT)) * amountOfRatingSalary) / LOST_RATING_LIMIT);
    }

    if (Number(budgetRef.value) <= LOST_BUDGET_LIMIT) {
        actualBudgetSal = amountOfBudgetSalary;
    } else {
        actualBudgetSal = Math.round(((LOST_BUDGET_LIMIT - (Number(budgetRef.value) - LOST_BUDGET_LIMIT)) * amountOfBudgetSalary) / LOST_BUDGET_LIMIT);
    }

    if (Number(ctrRef.value) >= CTR_LIMIT) {
        actualCtrSal = amountOfCtrSalary;
    } else {
        actualCtrSal = Math.round((Number(ctrRef.value) * amountOfCtrSalary) / CTR_LIMIT);
    }

    if (Number(leadsRef.value) >= LEADS_LIMIT) {
        actualLeadsSal = amountOfLeadsSalary;
    } else {
        actualLeadsSal = Math.round((Number(leadsRef.value) * amountOfLeadsSalary) / LEADS_LIMIT);
    }

    const finalSalary = actualRatingSal + actualBudgetSal + actualCtrSal + actualLeadsSal;

    outputRef.value = finalSalary;

    console.log(actualRatingSal, actualBudgetSal, actualCtrSal, actualLeadsSal, finalSalary);
}


