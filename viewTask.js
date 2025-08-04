import { formatDate } from './main.js';

//Access query string from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//Retrieve individual params
const index = urlParams.get("taskIndex");

//To retrieve all params if param appears multiple times
//const paramValues = urlParams.getAll("taskIndex");

//Convert tasks from localStorage to JSON
const tasksStr = localStorage.getItem("tasks");
const tasks = JSON.parse(tasksStr);
const currentTask = tasks[index];

document.addEventListener("DOMContentLoaded", function(){
    const title = currentTask.title;
    const description = currentTask.description;
    const startDate = formatDate(currentTask.startDate);
    const endDate = formatDate(currentTask.endDate);

    const mainDiv = document.querySelector(".main");
    if(mainDiv){
        const details = document.createElement("div");
        details.className = "task-details";
        details.innerHTML = `
            <div class="task-details-icons-top">
                <span class="material-icons edit-icon" id="edit-btn" title="Edit Task" aria-label="edit">edit</span>
                <span class="material-icons delete-icon" id="delete-btn" title="Delete Task" aria-label="delete">delete</span>
            </div>
            <h2 class="task-card-title">${title}</h2>
            <p class="task-card-description">${description}</p>
            <p class="task-card-dates">
                <span class="material-icons calendar-icon" aria-label="calendar">calendar_today</span>
                ${startDate} - ${endDate}
            </p>
            <span class="material-icons complete-icon" id="complete-btn" title="Mark as Complete" aria-label="complete">check_circle</span>
        `;
        mainDiv.appendChild(details);

        //Edit button functionality
        const editBtn = document.getElementById("edit-btn");
        editBtn.addEventListener("click", () => {
            window.location.href = `editTask.html?editIndex=${index}`;
        });

        //Delete button functionality
        const deleteBtn = document.getElementById("delete-btn");
        deleteBtn.addEventListener("click", () => {
            //Remove task from localStorage
            const tasks = localStorage.getItem("tasks");
            const tasksObj = JSON.parse(tasks);
            tasksObj.splice(index,1);
            const tasksNew = JSON.stringify(tasksObj);
            localStorage.setItem("tasks", tasksNew);

            alert("Task deleted");
            window.location.href = "index.html";
        });

        //Complete button functionality
        const completeBtn = document.getElementById("complete-btn");
        completeBtn.addEventListener("click", () => {
            //Remove task from localStorage
            const tasks = localStorage.getItem("tasks");
            const tasksObj = JSON.parse(tasks);
            tasksObj.splice(index,1);
            const tasksNew = JSON.stringify(tasksObj);
            localStorage.setItem("tasks", tasksNew);

            //Increment completedTasks in localStorage
            let completedTasks = JSON.parse(localStorage.getItem("completedTasks"));
            completedTasks++;
            localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
            
            
            alert("Task completed successfully!");
            window.location.href = "index.html"; //Redirect to index.html
        });
    }
});
