// 1. Create empty arrays to store our data
let expenses = [];
let prefix = [];

// 2. This function runs when you click "Add Expense"
function addExpense() {
    let val = Number(document.getElementById("expenseInput").value);

    // Make sure the user typed a real number greater than 0
    if (val <= 0) {
        alert("Please enter a valid expense!");
        return;
    }

    // Add the value to our core expenses array
    expenses.push(val);

    // Run our calculator helper to rebuild the prefix array
    buildPrefix();

    // Show the arrays clearly on the screen so you can see your homework working
    document.getElementById("list").innerHTML = "[" + expenses.join(", ") + "]";
    document.getElementById("prefixList").innerHTML = "[" + prefix.join(", ") + "]";

    // Reset the input field so it's clean for the next entry
    document.getElementById("expenseInput").value = "";
}

// 3. This function creates the Prefix Sum Array
function buildPrefix() {
    prefix = []; // Reset the prefix array
    
    // Set the very first item (Index 0)
    prefix[0] = expenses[0];

    // Loop through the rest of the items and add them up cumulatively
    for (let i = 1; i < expenses.length; i++) {
        prefix[i] = prefix[i - 1] + expenses[i];
    }
}

// 4. This function calculates the spending between two indices instantly
function findTotal() {
    let l = Number(document.getElementById("l").value);
    let r = Number(document.getElementById("r").value);

    // Stop if the user typed something impossible
    if (l < 0 || r >= expenses.length || l > r) {
        alert("Invalid range index selected!");
        return;
    }

    // Apply the magic Prefix Sum O(1) formula!
    let ans;
    if (l == 0) {
        ans = prefix[r];
    } else {
        ans = prefix[r] - prefix[l - 1];
    }

    // Get our result box from the HTML page
    let box = document.getElementById("output");
    
    // Clear out any old colors from previous checks
    box.className = "result-card"; 

    // Decide a label and color code based on the total spending
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

    // Display the clean final text into our beautiful card!
    box.innerHTML = "Total Expense = ₹" + ans + "<br><small>" + label + "</small>";
}

// 6. This function hides the welcome screen with a smooth fade
function startApp() {
    const welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.classList.add("hide-welcome");
}
