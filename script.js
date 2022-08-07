const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dataEl = document.getElementById('date-picker');

// Set the Date Input Min with Today's date
const today = new Date().toISOString().split('T')[0];
dataEl.setAttribute('min', today);
