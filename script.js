document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create a new button for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Setting class using className

        // Set onclick event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        // Append the remove button to the task
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask function on DOMContentLoaded
    addTask();
});
