function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var task = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
    task.appendChild(taskText);
  
    var deleteButton = document.createElement("span");
    deleteButton.innerHTML = "&#x2716;";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
      task.remove();
    };
    task.appendChild(deleteButton);
  
    task.onclick = function() {
      task.classList.toggle("completed");
    };
  
    taskList.appendChild(task);
    taskInput.value = "";
  }
  