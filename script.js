let expenses = [];
let prefix = [];

function addExpense() {
    let val = Number(document.getElementById("expenseInput").value);

    if (val <= 0) {
        alert("Please enter a valid expense!");
        return;
    }

    expenses.push(val);

    buildPrefix();

    document.getElementById("list").innerHTML = "[" + expenses.join(", ") + "]";
    document.getElementById("prefixList").innerHTML = "[" + prefix.join(", ") + "]";

    document.getElementById("expenseInput").value = "";
}

function buildPrefix() {
    prefix = [];
    
    prefix[0] = expenses[0];
    
    for (let i = 1; i < expenses.length; i++) {
        prefix[i] = prefix[i - 1] + expenses[i];
    }
}

function findTotal() {
    let startDay = Number(document.getElementById("startDay").value);
    let endDay = Number(document.getElementById("endDay").value);

    let l= startDay-1;
    let r= endDay-1;

    if (l < 0 || r >= expenses.length || l > r) {
        alert("Invalid range index selected!");
        return;
    }

    let ans;
    if (l == 0) {
        ans = prefix[r];
    } else {
        ans = prefix[r] - prefix[l - 1];
    }

    
    let box = document.getElementById("output");
    
    
    box.className = "result-card"; 

    
    let label = "";
    if (ans < 500) {
        label = "🟢 Low Spending Level";
        box.classList.add("green");
    } else if (ans < 1000) {
        label = "🟡 Medium Spending Level";
        box.classList.add("yellow");
    } else {
        label = "🔴 High Spending Level";
        box.classList.add("red");
    }

    
    box.innerHTML = "Total Expense = ₹" + ans + "<br><small>" + label + "</small>";
}


function startApp() {
    const welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.classList.add("hide-welcome");
}
