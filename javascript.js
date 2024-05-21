function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        ${taskText}
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    taskItem.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);

    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
