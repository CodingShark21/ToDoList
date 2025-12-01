import {task_list} from "./add_task.js";

// Event delegation: listen on the list, catch clicks on delete buttons
task_list.addEventListener("click", function(event) {
  if(event.target.classList.contains("delete-button")) {
    console.log("Delete button clicked");
    const li = event.target.parentElement;
    li.remove();

    // Save after deleting
    saveTasks(task_list);
  }
});
