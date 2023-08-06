// Function to add a new entry to the table
function addEntryToTable(name, email, dob) {
    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow(-1);
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const dobCell = newRow.insertCell(2);
  
    nameCell.textContent = name;
    emailCell.textContent = email;
    dobCell.textContent = dob;
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;
  
    // Check if the email is valid using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address!');
      return;
    }
  
    // Get the age from the date of birth
    const birthDate = new Date(dob);
    const ageInMs = Date.now() - birthDate.getTime();
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365);
    if (ageInYears < 18 || ageInYears > 55) {
      alert('You must be between 18 and 55 years old to register!');
      return;
    }
  
    if (!termsAccepted) {
      alert('You must accept the terms to register!');
      return;
    }
  
    // Add the new entry to the table
    addEntryToTable(name, email, dob);
  
    // Clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('terms').checked = false;
  }
  
  // Add event listener to the form submit button
  document.getElementById('registrationForm').addEventListener('submit', handleFormSubmit);
  
