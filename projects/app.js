// DOM Elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const allBtn = document.getElementById('all-btn');
const activeBtn = document.getElementById('active-btn');
const completedBtn = document.getElementById('completed-btn');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    
    // Create new task element
    const taskItem = document.createElement('div');
    taskItem.className = 'task';
    
    // Create task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    // Create buttons container
    const buttonsDiv = document.createElement('div');
    
    // Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.addEventListener('click', function() {
        taskSpan.classList.toggle('completed');
    });
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✗';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    
    // Append elements
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(buttonsDiv);
    taskList.appendChild(taskItem);
    
    // Clear input
    taskInput.value = '';
}

// Filter tasks
function filterTasks(filter) {
    const tasks = document.querySelectorAll('.task');
    
    tasks.forEach(task => {
        const isCompleted = task.querySelector('span').classList.contains('completed');
        
        switch(filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'active':
                task.style.display = isCompleted ? 'none' : 'flex';
                break;
            case 'completed':
                task.style.display = isCompleted ? 'flex' : 'none';
                break;
        }
    });
}

// Event Listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

allBtn.addEventListener('click', () => filterTasks('all'));
activeBtn.addEventListener('click', () => filterTasks('active'));
completedBtn.addEventListener('click', () => filterTasks('completed'));