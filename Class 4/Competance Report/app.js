const taskInput=document.getElementById("task");
let c=0;

// add Function
function addTask(){
let task=document.getElementById("task").value;
console.log("Adding..." + task);
displayTask(task);
clearInput();
c++;
}

// display function
function displayTask(newTask){
    document.getElementById("task-list").innerHTML += ` <li id="${c}">${newTask} <button onclick="deleteTask(${c});">Delete</button></li>`;
}

// clear function
function clearInput(){
    taskInput.value="";
    taskInput.focus();
}

// delete function
function deleteTask(taskID){
    console.log("Deleting task..." + taskID);
    document.getElementById(taskID).remove();

}

function clearList(clearList){
    document.getElementById("task-list").innerHTML = "";
}
