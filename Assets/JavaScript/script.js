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
 
