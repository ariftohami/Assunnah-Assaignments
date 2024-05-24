let deposite = document.querySelector('#deposit-amount');


let expense = document.querySelector('#used-amount');

let productName = document.querySelector('#product-title');

let totalDeposite = document.querySelector('#amount');

let totalExpense = document.querySelector('#expenses-value');


let currentBalance = document.querySelector('#balance-amount');


let expenseList = document.querySelector('#list');


let depositeBtn = document.querySelector('#deposit-button');

let expenseBtn = document.querySelector('#expense-amount-button');

let depoErrorMsg = document.querySelector('#deposit-error');

currentBalance.innerHTML = 0;

let totalDepo = [];

let totalExp = [];


let depositeBtnClick = () => {

    let joma = 0;
    totalDepo.push(Number(deposite.value));

    for (let x of totalDepo) {
        joma = joma + x;
    }
    totalDeposite.innerHTML = joma;

    deposite.value = '';

    return totalDeposite.innerHTML;
    
};
 
depositeBtn.addEventListener('click', depositeBtnClick);


// এক্সপেন্স বাটন ইভেন্ট সেকশন

let expenseClick=() => {

  let khoroch = 0;
    totalExp.push(Number(expense.value))

    for (let x of totalExp) {
        khoroch = khoroch + x;
    }
    totalExpense.innerHTML = khoroch;
    expense.value = '';

    // currentBalance.innerHTML = depositeBtnClick() - totalExpense.innerHTML;

    return totalExpense.innerHTML;
}

expenseBtn.addEventListener('click', expenseClick);


expenseBtn.addEventListener('click', () => {
    currentBalance.innerHTML = depositeBtnClick() - expenseClick();
});

depositeBtn.addEventListener('click', () => {
    currentBalance.innerHTML = depositeBtnClick() - expenseClick();
});








