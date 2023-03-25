document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.querySelector('title');
  pageTitle.innerText = "Task Lister Lite";
});
const taskForm = document.querySelector('#create-task-form');
const taskInput = document.querySelector('#new-task-description');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskList = document.querySelector('#tasks');
  const taskItem = document.createElement('li');
  taskItem.innerText = taskInput.value;
  taskList.appendChild(taskItem);
  taskInput.value = '';

})