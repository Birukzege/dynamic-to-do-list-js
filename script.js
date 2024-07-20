// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Task Creation and Removal
            const newTask = document.createElement('li');
            newTask.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            removeButton.onclick = function() {
                taskList.removeChild(newTask);
            };

            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);

            taskInput.value = ''; // Clear the task input field
        } else {
            alert('Please enter a task!');
        }
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke the addTask function on DOMContentLoaded
    addTask();
});
