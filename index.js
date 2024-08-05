     // JavaScript to display the current date
     const dateContainer = document.getElementById('dateContainer');
     const currentDate = new Date();
     const options = { year: 'numeric' };
     dateContainer.textContent = currentDate.toLocaleDateString('en-US', options);