document.addEventListener('DOMContentLoaded', function(){
    //Implement tasks completed functionality in localStorage
    const completed = localStorage.getItem("completedTasks");
    if(!completed){
        localStorage.setItem("completedTasks", "0");
    }

    //Add New button navigate to newTask.html
    const newTaskBtn = document.getElementById('new-task-btn');
    newTaskBtn.addEventListener("click", event => {
        event.preventDefault();
        window.location.href = "../ui/newTask.html";
    });

    //Display tasks from localStorage on index.html
    const mainDiv = document.querySelector(".main");
    if(mainDiv){
        //Remove "Add New Task"button temporarily to insert cards"
        const addBtn = document.getElementById("new-task-btn");
        if(addBtn) mainDiv.removeChild(addBtn);

        const tasks = JSON.parse(localStorage.getItem("tasks"));

        //Check if tasks exist
        if(Object.keys(tasks).length === 0){
            //Display no tasks message
            const noTasksMessage = document.createElement("p");
            noTasksMessage.textContent = "No tasks available. Please add a new task.";
            noTasksMessage.className = "no-tasks-message";
            mainDiv.appendChild(noTasksMessage);
        }
        else{
            //Display all the tasks
            tasks.forEach((task, index) => {
                const message = isUrgent(task.endDate);
                const card = document.createElement("div");
                card.className = "task-card";
                card.innerHTML = `
                    <h2 class="task-card-title">${task.title}</h2>
                    <p class="task-card-dates">
                        <span class="material-icons calendar-icon" aria-label="calendar">calendar_today</span>
                        ${formatDate(task.startDate)} - ${formatDate(task.endDate)}
                    </p>
                    <span class="material-icons chevron-icon" aria-label="details" data-index="${index}">chevron_right</span>
                    ${message !== "" ? `
                            <div class="task-card-warning">
                                <span class="material-icons warning-icon" aria-label="warning">warning</span>
                                <span class="warning-text">${message}</span>
                            </div>` : ""
                    }
                `;
                mainDiv.appendChild(card);
            });
        }

        //Re-add the "Add New Task" button at the end
        if(addBtn) mainDiv.appendChild(addBtn);
    }

    //Add click event to all chevron icons
    document.querySelectorAll(".chevron-icon").forEach(icon => {
        icon.addEventListener("click", function() {
            const idx = this.getAttribute("data-index"); //data-index: something new i learnt with this project
            window.location.href = `../ui/viewTask.html?taskIndex=${idx}`;
        })
    });
});

//Function to convert current date format to DD-MM-YYYY
export function formatDate(dateStr){
    const [year, month, day] = dateStr.split("-");
    if(!year || !month || !day){
        throw new Error(`Invalid date format: ${dateStr}`);
    }

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${parseInt(day, 10)} ${monthNames[parseInt(month, 10) - 1]} ${year}`
}

//Function to check if a task is urgent based on end date
function isUrgent(endDate){
    let message = "";
    //Get todays date
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Months are zero-based
    const currentDay = today.getDate();

    //Get end date
    const [endYear, endMonth, endDay] = endDate.split("-");

    if((currentYear > endYear) || (currentYear == endYear && currentMonth > endMonth) || (currentYear == endYear && currentDay > endDay)){
        message = "This task is overdue!";
    }else{
        if(currentYear == endYear && currentMonth == endMonth && currentDay == endDay){
            message = "Due today!";
        }
    }

    return message;
}
