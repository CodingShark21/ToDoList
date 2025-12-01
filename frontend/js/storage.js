export const STORAGE_KEY = "todo_tasks";

//Save task to localStorage
function saveTasks(task_list) {
  const tasks = [];
  const items = task_list.getElementsByTagName("li");

  for(let i = 0; i < items.length; i++) {
    const text = items[i].firstChild.textContent;
    tasks.push(text);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

//Load tasks from localStorage
function loadTasks(task_list) {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.textContent = tasks[i];

    const delete_button = document.createElement("button");
    delete_button.textContent = "delete";
    delete_button.classList.add("delete-button");
    delete_button.type = "button";

    li.appendChild(delete_button);
    task_list.appendChild(li);
  }
}

export {saveTasks, loadTasks};
