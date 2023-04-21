document.getElementById("budget").value = "0";
document.getElementById("budgetAmount").innerHTML = 0;

var expenseArray = [];

function addBudget() {
    var budgetValue = document.getElementById("budget").value;

    document.getElementById("budgetAmount").innerHTML = budgetValue;

    document.getElementById("budget").value = 0;

    var budgetPrice = parseInt(document.getElementById("budgetAmount").innerText);
    var expensePrice = parseInt(document.getElementById("expenseAmount").innerText);

    var balancePrice = budgetPrice - expensePrice;

    document.getElementById("balanceAmount").innerHTML = balancePrice;

    return false;
}

function addExpense() {
    var expenseTitle = document.getElementById("expenseName").value;
    var expenseAmount = document.getElementById("expense").value;
    var expenseUpdate = document.getElementById("expenseEdit").value;

    if (expenseUpdate == '') {
        var expenseDetail = {
            expenseName: expenseTitle,
            expenseAmount: expenseAmount
        }

        expenseArray.push(expenseDetail);
    }
    else {

        var expenseDetail2 = localStorage.getItem("ExpenseDetail");
        var showExpenseDetail = JSON.parse(expenseDetail2);

        for (var i = 0; i < showExpenseDetail.length; i++) {
            if (showExpenseDetail[i].expenseName == expenseUpdate) {
                showExpenseDetail[i].expenseName = expenseTitle;
                showExpenseDetail[i].expenseAmount = expenseAmount;
                document.getElementById("expenseEdit").value = '';
                document.getElementById("expenseButton").innerHTML = "Add Expense";
            }
        }

        expenseArray = showExpenseDetail;

    }

    var expenseDetail = JSON.stringify(expenseArray);
    localStorage.setItem("ExpenseDetail", expenseDetail);

    document.getElementById("expenseName").value = "";
    document.getElementById("expense").value = "";

    abc();

    return false;
}

abc();
function abc() {

    var expenseName = "";
    var expenseValue = "";
    var expenseAction = "";

    var expenPrice = [];
    var value = 0;

    var expenseDetail2 = localStorage.getItem("ExpenseDetail");
    var showExpenseDetail = JSON.parse(expenseDetail2);

    for (var i = 0; i < showExpenseDetail.length; i++) {

        var expenName = showExpenseDetail[i].expenseName;
        var expenValue = showExpenseDetail[i].expenseAmount;

        expenPrice.push(expenValue);

        value += eval(expenPrice[i]);

        expenseName += `<li>${expenName}</li>`;
        expenseValue += `<li>${expenValue}</li>`;
        expenseAction += `<li><a id="expenseUpdate" href="javascript:expenseUpdate('${expenName}')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.1 384.1">
                <path d="M0,348.1c0-83.5,0-167,0-250.5c0.2-0.3,0.5-0.6,0.5-1c2.3-18,18.9-35.3,42.9-35.1c64.9,0.3,129.7,0.1,194.6,0.1c1.3,0,2.6,0,4.8,0c-1.6,1.7-2.6,2.8-3.6,3.8c-32.5,32.5-65,65.1-97.6,97.5c-4.9,4.9-8.4,10.4-10.6,17c-4.7,14.6-9.8,29.1-14.5,43.7c-1.2,3.6-2.2,7.5-2.4,11.3c-1.1,23.7,21.6,40.6,44.6,33.3c15-4.8,29.8-10,44.8-14.8c7.1-2.3,13-6.1,18.2-11.4c32.4-32.5,64.8-64.9,97.3-97.3c1-1,2-1.9,3.5-3.3c0,2.5,0,4,0,5.5c0,44,0,88,0,132c0,21.4,0.1,42.7,0,64.1c-0.1,18.2-11.8,33.9-28.8,39.2c-2.4,0.7-4.8,1.3-7.1,2c-83.5,0-167,0-250.5,0c-0.6-0.2-1.1-0.5-1.7-0.7c-14.4-2.7-24.7-10.8-30.7-24.1C2,355.8,1.2,351.9,0,348.1z"/><path d="M296,40.6c15.9,15.9,31.6,31.6,47.6,47.5c-0.6,0.6-1.5,1.6-2.4,2.6c-45.2,45.2-90.4,90.5-135.8,135.6c-2.5,2.4-5.8,4.4-9.1,5.5c-14.3,5-28.9,9.6-43.3,14.6c-4.9,1.7-9.4,1.5-13.1-2.3c-3.8-3.8-3.8-8.3-2.1-13.2c5-14.7,9.8-29.6,14.9-44.3c0.9-2.5,2.4-5,4.2-6.9c45.6-45.7,91.3-91.4,137-137.1C294.6,41.9,295.4,41.2,296,40.6z"/><path d="M360.4,71.5c-16-16-31.6-31.7-48.4-48.5c2.1-1.7,4.7-3.5,7.1-5.7c4.1-3.8,7.9-8,12-11.9c7.3-6.9,18.1-7.3,25.4-0.5c7.8,7.3,15.4,15,22.7,22.8c6.1,6.5,6.4,16,1.3,23.1c-0.9,1.2-1.9,2.3-2.9,3.4C371.8,60.1,366,65.9,360.4,71.5z"/></svg></a>`;
        expenseAction += `<span id="expenseDelete" onclick="return expenseDelete(${expenValue})"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.9 409.8">
                <path d="M282.4,409.8c-68.3,0-136.5,0-204.8,0c-0.3-0.2-0.7-0.5-1-0.5c-17.7-3.7-28.6-15.4-30.3-33.4c-2.1-22.8-3.8-45.7-5.8-68.5c-2.3-27.5-4.6-55-6.9-82.5c-2-24.6-4.1-49.1-6.1-73.7c-0.8-10.2-1.6-20.4-2.5-30.8c103.4,0,206.5,0,309.7,0c0.1,0.6,0.2,0.9,0.2,1.3c-2.9,35.2-5.8,70.4-8.7,105.6c-4,48.1-8,96.1-11.9,144.2c-0.9,10.5-3.4,20.1-11.2,27.8C297.3,405,290.1,407.9,282.4,409.8z M96,158.7c0.1,0,0.1,0,0.2,0c1.1,18,2.1,35.9,3.3,53.9c2.8,45.5,5.7,90.9,8.5,136.4c0.5,7.8,5.5,13,12.4,12.8c7.1-0.3,11.9-5.9,11.5-13.9c-0.5-9.8-1.2-19.7-1.8-29.5c-2-32.8-4.1-65.7-6.1-98.5c-1.3-21.4-2.6-42.8-4-64.2c-0.4-6.5-5.2-11.1-11.3-11.3c-6-0.3-11.2,3.8-12.4,9.7C96,155.5,96.1,157.1,96,158.7z M264,157.3c0.3-7-4.2-12.7-11.2-13.1c-6.6-0.4-12.3,4.7-12.8,11.6c-1.4,21.9-2.7,43.9-4.1,65.8c-1.7,27.9-3.5,55.9-5.3,83.8c-0.9,14.5-1.9,29-2.6,43.5c-0.3,7.2,4.9,12.5,11.6,12.7c6.6,0.2,11.8-4.7,12.3-11.6c0.3-4.4,0.6-8.8,0.8-13.2c1.7-27.5,3.4-55.1,5.1-82.6C259.9,222.4,261.9,190.5,264,157.3z M192,253.4c0-31.3,0-62.7,0-94c0-9.6-4.4-15.2-12-15.2c-7.6,0-12,5.6-12,15.2c0,62.4,0,124.8,0,187.2c0,1.3-0.1,2.7,0.1,4c0.6,5.1,3.2,8.7,8,10.5c8.2,2.9,15.9-3.1,15.9-12.4C192,316.8,192,285.1,192,253.4z"/><path d="M0,68.2c1.6-3.5,2.8-7.2,5-10.3c4.9-7,12.1-9.7,20.4-9.7c21.9,0,43.7,0,65.6,0c1.5,0,2.9,0,5.3,0c0-5.3-0.5-10.5,0.1-15.5c2.2-19,16.3-32.2,35.5-32.4c32.1-0.4,64.3-0.4,96.4,0c20.4,0.3,35.1,15.6,35.7,36c0.1,3.7,0,7.5,0,11.8c1.5,0,2.9,0,4.3,0c22.3,0,44.5-0.1,66.8,0c17.6,0.1,29,15.8,23.3,32c-3.2,9.1-10,14.2-19.5,15.6c-1.8,0.3-3.7,0.3-5.6,0.3c-102.2,0-204.5,0-306.7,0c-10.8,0-19.2-3.9-24.2-13.8c-1-2-1.6-4.2-2.4-6.3C0,73.5,0,70.8,0,68.2z M120.1,47.9c40.2,0,80,0,119.9,0c0-3.6,0-6.9,0-10.2c-0.1-8.8-4.8-13.5-13.7-13.5c-13.6,0-27.2,0-40.8,0c-17.6,0-35.2,0-52.7,0c-7.2,0-12.3,4.5-12.7,11.1C119.9,39.4,120.1,43.5,120.1,47.9z"/></svg></span></li>`;

    }
    document.querySelector("#expenseTitleBox #expenseName").innerHTML = expenseName;
    document.querySelector("#expenseAmountBox #expenseValue").innerHTML = expenseValue;
    document.querySelector("#expenseActionBox #expenseAction").innerHTML = expenseAction;
    document.getElementById("expenseAmount").innerHTML = value;


    var budgetPrice = parseInt(document.getElementById("budgetAmount").innerText);
    var expensePrice = parseInt(document.getElementById("expenseAmount").innerText);

    var balancePrice = budgetPrice - expensePrice;

    document.getElementById("balanceAmount").innerHTML = balancePrice;
}

function expenseUpdate(p) {

    var expenseDetail2 = localStorage.getItem("ExpenseDetail");
    var showExpenseDetail = JSON.parse(expenseDetail2);

    for (var i = 0; i < showExpenseDetail.length; i++) {

        if (showExpenseDetail[i].expenseName == p) {

            document.getElementById("expenseEdit").value = showExpenseDetail[i].expenseName;

            document.getElementById("expenseName").value = showExpenseDetail[i].expenseName;
            document.getElementById("expense").value = showExpenseDetail[i].expenseAmount;

            document.getElementById("expenseButton").innerText = "Edit Expense";

        }

    }

}

function expenseDelete(price) {
    var expenseDetail2 = localStorage.getItem("ExpenseDetail");
    var showExpenseDetail = JSON.parse(expenseDetail2);

    for (var i = 0; i < showExpenseDetail.length; i++) {
        if (showExpenseDetail[i].expenseAmount == price) {
            showExpenseDetail.splice(i, 1);
        }
    }

    var expenseDetail = JSON.stringify(showExpenseDetail);
    localStorage.setItem("ExpenseDetail", expenseDetail);

    abc();
}

var expenseDetail = JSON.stringify(expenseArray);
localStorage.setItem("ExpenseDetail", expenseDetail);