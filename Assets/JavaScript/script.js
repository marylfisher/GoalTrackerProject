// CHECKBOX TALLY CODE


// checkbox variables

const checkboxes = document.querySelectorAll('.tally-checkbox');
const countDisplay = document.getElementById('count');

// tally function

function updateCount() {
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        countDisplay.textContent = checkedCount;
}
// checkbox event listener

checkboxes.forEach(checkbox => {
    checkbox.addEventListener ('change', updateCount);
});

// initial page count

updateCount()


// TALLY LOCAL STORAGE CODE


// function to count checked boxes and the tally

function updateTallyAndSave() {
    const checkboxes = document.querySelectorAll('.tally-checkbox');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    localStorage.setItem('checkboxTally', checkedCount); // saves tally to local storage

    document.getElementById('count').textContent = checkedCount; // Updates the tally display
}
// restores tally from localStorage when opening page

function restoreTally() {
    const savedTally = localStorage.getItem('checkboxTally');
    if (savedTally !== null) {
      document.getElementById('count').textContent = savedTally;
    } else {
      document.getElementById('count').textContent = 0; // defaults to 0 if nothing is saved
    }
  }

// change event for checkboxes

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateTallyAndSave);
});

// restores tally when opening page

restoreTally();


//--------------------------------------------------//


//CHECKBOX LOCAL STORAGE CODE

// saveState function

function saveState(checkbox) {
    const isChecked = checkbox.checked; // boolean
    localStorage.setItem(checkbox.id, isChecked);
}

// restoreState function

function restoreState() {
    const checkboxes = document.querySelectorAll('.tally-checkbox');
    checkboxes.forEach(checkbox => {
      const savedState = localStorage.getItem(checkbox.id);
      if (savedState !== null) {
        checkbox.checked = JSON.parse(savedState); // converts string back to boolean
      }
    });
  }

  // event listener for checkbox state change

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => saveState(checkbox));
    });

// restores checkboxes when page is loaded

    restoreState();


 // Function to save a single goal to localStorage 

function saveGoal(goal) {
  const savedGoals = JSON.parse(localStorage.getItem("goals")) || []; 
  savedGoals.push(goal); // add new goal
  localStorage.setItem("goals", JSON.stringify(savedGoals)); // save updated goals back to localStorage 
}

// Function to restore goals 

function restoreGoals() {
  const savedGoals = JSON.parse(localStorage.getItem("goals")) || []; 
  const goalTracker = document.getElementById("goal-tracker");

  // update number of goals saved 
  goalTracker.textContent = `${savedGoals.length}/5`;

  // log the saved goals to the console 
  console.log(savedGoals);
}

// event listener for submit 

document.querySelectorAll(".input-group").forEach(form => {
  form.addEventListener("submit", event => {
      event.preventDefault();

      // Get the input field and its value 

      const inputField = form.querySelector("input[type='text']");
      const goal = inputField.value.trim();

      if (goal) {
          saveGoal(goal); // Save the goal to localStorage 
          restoreGoals(); // Refresh the goal display 
          inputField.value = ""; // Clear the input field for new input 
      }
  });
});

// Restore goals and display the count on page load 
restoreGoals();
