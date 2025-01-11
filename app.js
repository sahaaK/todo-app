const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }
  const listItem = document.createElement('li');

  listItem.innerHTML = `
    <span>${taskText}</span>
    <div>
      <input type="checkbox" class="task-complete">
      <button class="delete-btn">&times;</button>
    </div>
  `;

  // Mark task as complete
  listItem.querySelector('.task-complete').addEventListener('change', (e) => {
    if (e.target.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });

  // Delete task
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    listItem.remove();
  });

  taskList.appendChild(listItem);
  taskInput.value = '';
  taskInput.focus();
});
