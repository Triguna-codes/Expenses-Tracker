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
        alert("Invalid range of days selected! Please check your input");
        return;
    }
    let totalExpense= 0;

    let ans;
    if (l == 0) {
        ans = prefix[r];
    } else {
        ans = prefix[r] - prefix[l - 1];
    }

    
    let box = document.getElementById("output") ;
    
    
    box.className = "result-card"; 

    
    let label = "";
    let statusMessage = "";
    if (ans < 500) {
        label = "🟢 Low Spending Level";
        statusMessage = "FANTASTIC!! Everything is going absolutely fine. Continue with the smart spending 🌟";
        box.classList.add("green");
    } else if (ans < 1000) {
        label = "🟡 Medium Spending Level";
        statusMessage = "Cruising comfortably, but keep an eye on the road ahead. You're still in the safe zone. Don't lose focus ⚖";
        box.classList.add("yellow");
    } else {
        label = "🔴 High Spending Level";
        statusMessage = "⚠ Budget alert: Your spending is moving quicker than usual this period. To stay on track and avoid a tight month, consider hitting the brakes on non-essential expenses for a few days. Fix it now ⚙";
        box.classList.add("red");
    }
box.innerHTML = `<h3>Total Calculated Sum: ₹${ans}</h3>
    <p style="margin-top: 15px; font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">${label}</p>
    <p style="margin-top: 0; opacity: 0.9; font-size: 1rem;">${statusMessage}</p>`;
}


function startApp() {
    const welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.classList.add("hide-welcome");
}
