// script.js

// Function to display the current date and time
function displayDateTime() {
    const now = new Date();
    const options = { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const utcDateTime = now.toLocaleString('sv-SE', options);
    document.getElementById('dateTime').innerHTML = `Current Date and Time (UTC): ${utcDateTime}`;
}

// Function to update the menu based on user input
function updateMenu() {
    const menuItem = document.getElementById('menuItem').value;
    const menuDiv = document.getElementById('menu');
    const newItem = document.createElement('div');
    newItem.innerText = menuItem;
    menuDiv.appendChild(newItem);
    document.getElementById('menuItem').value = '';
}

// Event listener for date/time display
window.onload = function() {
    displayDateTime();
};

// Example action when button is clicked
document.getElementById('addMenuButton').onclick = function() {
    updateMenu();
};