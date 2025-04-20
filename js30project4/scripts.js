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
  
  // Add event listener to the new checkbox
  newItem.querySelector('input[type="checkbox"]').addEventListener('click', handleCheck);

  taskInput.value = '';
});

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