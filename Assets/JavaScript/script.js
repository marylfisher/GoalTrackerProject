//checkbox variables
const checkboxes = document.querySelectorAll('.tally-checkbox');
const countDisplay = document.getElementById('count');

//tally function
function updateCount() {
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        countDisplay.textContent = checkedCount;
}
//checkbox event listener
checkboxes.forEach(checkbox => {
    checkbox.addEventListener ('change', updateCount);
});

// initial page count
updateCount()
