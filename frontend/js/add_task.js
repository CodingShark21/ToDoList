import {saveTasks, loadTasks } from "./storage.js";

// Find the Button and input box
const add_button = document.getElementById("add_button");
const task_input = document.getElementById("task_input");
const task_list = document.getElementById("task_list");

//Load tasks on page load
window.addEventListerner("DOMContentLoaded", () => {
  loadTasks(task_list);
});

// Listen for clicks on the Button
add_button.addEventListener("click", addTask);

function addTask() {
  // Get the text from the input box
  const textValue = task_input.value.trim();

  //Only add if not empty
  if(textValue != "") {
    //Create a new item
    const li = document.createElement("li");
    li.textContent = textValue;

    //Create delete button
    const delete_button = document.createElement("button");
    delete_button.textContent = "delete";
    delete_button.classList.add("delete-button"); //mark it with a class
    delete_button.type = "button";

    //Add the item to the list
    li.appendChild(delete_button);
    task_list.appendChild(li);

    //Clear the input box
    task_input.value = "";

    // Save after adding
    saveTasks(task_list);
  } else {
    alert("Please enter a task!");
  }
}

export {task_list};
