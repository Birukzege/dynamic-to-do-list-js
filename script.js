document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from Local Storage on page load
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get tasks from Local Storage or initialize an empty array
    loadTasks();
  
    // Add Task function
    function addTask(taskText, save = true) { // Add optional save parameter
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
          // Remove task from tasks array
          tasks.splice(tasks.indexOf(taskText), 1);
          // Update Local Storage
          localStorage.setItem('tasks', JSON.stringify(tasks));
        };
  
        //Append remove button to list item
      newTaskItem.appendChild(removeButton);

      // Append task item to task list
      taskList.appendChild(newTaskItem);

      // Clear input field
      taskInput.value = "";

      // Save task to Local Storage
      if (save) { // Only save if the save parameter is true
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    } else {
      alert("Please enter a task!");
    }
  }

  // Load tasks from Local Storage and display them
  function loadTasks() {
    tasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving them again
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