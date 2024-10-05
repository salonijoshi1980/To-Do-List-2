// Get the task list and input field
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-written');

// Function to add a new task
function addTask() {
  const task = taskInput.value;
  if (task !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span>${task}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

// Function to edit a task
function editTask(event) {
    // Get the task element
    const task = event.target.parentNode;
    
    // Get the task text element
    const taskText = task.querySelector('span');
    
    // Create a new input element
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskText.textContent;
    
    // Replace the task text with the input element
    task.replaceChild(editInput, taskText);
    
    // Add an event listener to the input element to save the changes
    editInput.addEventListener('blur', () => {
      // Get the new task text
      const newTaskText = editInput.value;
      
      // Create a new text node with the new task text
      const newText = document.createTextNode(newTaskText);
      
      // Replace the input element with the new text node
      task.replaceChild(newText, editInput);
    });
}
  
  // Function to create a new task element
function createTask(taskText) {
    // Create a new task element
    const task = document.createElement('div');
    
    // Create a new span element for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    // Create a new button element for the edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editTask);
    
    // Add the task text and edit button to the task element
    task.appendChild(taskSpan);
    task.appendChild(editButton);
    
    // Return the task element
    return task;
}

  
  // Function to delete a task
  function deleteTask(event) {
    const task = event.target.parentNode;
    taskList.removeChild(task);
}


// Add event listeners to the add task button and task list
document.querySelector('.btn').addEventListener('click', addTask);
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-btn')) {
    editTask(event);
  } else if (event.target.classList.contains('delete-btn')) {
    deleteTask(event);
  }
});


