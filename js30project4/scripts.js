//Daniel Mason 04/20/2025
//Adapted from https://javascript30.com/ 10 Hold Shift And Check Checkboxes
//I added a button to add additional html elements using a the text box and button.
  //I added a remove checked item function for things that have been completed, things that were added by mistake or things that were not necessary for that day.

const checkboxes=document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function handleCheck(e){
  
let inBetween = false;
   if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
        if(checkbox=== this || checkbox === lastChecked) {
            inBetween = !inBetween;
        }
        if(inBetween){
            checkbox.checked=true;
        }
    })
   } 
   lastChecked = this;
}
checkboxes.forEach(checkbox=>checkbox.addEventListener('click',handleCheck));

//created an add item button to add more tasks to the list.

const addButton = document.querySelector('.entry input[type="button"]');
const taskInput = document.querySelector('.entry input[type="text"]');
const inbox = document.querySelector('.inbox');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.innerHTML = `
    <input type="checkbox">
    <p>${taskText}</p>
  `;

  inbox.appendChild(newItem);
  

  newItem.querySelector('input[type="checkbox"]').addEventListener('click', handleCheck);

  taskInput.value = '';
});

//Created a remove checked boxes to be able to remove items you don't want in your list
const removeButton = document.getElementById('removeChecked');

removeButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.inbox .item');
  items.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      item.remove();
    }
  });
});