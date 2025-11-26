// Find the Button and input box
const add_button = document.getElementById("add_button");
const task_input = document.getElementById("task_input");
const task_list = document.getElementById("task_list");

// Listen for clicks on the Button
add_button.addEventListener("click", addTask);

function addTask() {
  // Get the text from the input box
  const textValue = task_input.value.trim();

  //Only add if not emptp
  if(textValue != "") {
    //Create a new item
    const li = document.createElement("li");
    li.textContent = textValue;

    //Add the item to the list
    task_list.appendChild(li);

    //Clear the input box
    task_input.value = "";
  } else {
    alert("Please enter a task!");
  }
}
