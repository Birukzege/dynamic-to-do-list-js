document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Add Task function
    function addTask() {
      // Get task text from input
      const taskText = taskInput.value.trim();
  
      // Check if task input is not empty
      if (taskText !== "") {
        // Create task list item (li)
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = taskText;
  
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
  
        // Add remove button functionality
        removeButton.onclick = () => {
          taskList.removeChild(newTaskItem);
        };
  
        // Append remove button to list item
        newTaskItem.appendChild(removeButton);
  
        // Append task item to task list
        taskList.appendChild(newTaskItem);
  
        // Clear input field
        taskInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    }
  
    // Add event listener to add button
    addButton.addEventListener('click', addTask);
  
    // Add event listener for Enter key press
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });