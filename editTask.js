const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const index = urlParams.get("editIndex");

document.addEventListener("DOMContentLoaded", () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks[index];
    const taskTitle = task["title"];
    const taskDescription = task["description"];
    const taskStartDate = task["startDate"];
    const taskEndDate = task["endDate"];

    const mainDiv = document.querySelector(".main");
    if(mainDiv){
        const display = document.createElement("div");
        display.className = "task-display";
        display.innerHTML = `
            <form class="new-task-form" id="new-task-form-id">
                <label for="task-title">Title:</label>
                <input
                    type="text"
                    class="new-task-form-field"
                    id="task-title"
                    name="task-title"
                    value="${taskTitle}"
                    required
                />

                <label for="task-description">Description:</label>
                <textarea
                    class="new-task-form-field"
                    id="task-description"
                    name="task-description"
                    required
                >${taskDescription}</textarea>

                <label for="task-start-date">Start Date:</label>
                <input
                    type="date"
                    class="new-task-form-field"
                    id="task-start-date"
                    name="task-start-date"
                    value="${taskStartDate}"
                    required
                />

                <label for="task-end-date">End Date:</label>
                <input
                    type="date"
                    class="new-task-form-field"
                    id="task-end-date"
                    name="task-end-date"
                    value="${taskEndDate}"
                    required
                />

                <input
                    type="submit"
                    class="new-task-form-submit"
                    id="new-task-submit"
                    value="Confirm"
                />
            </form>
        `;

        mainDiv.appendChild(display);
    }

    //Add event listener to the form
    const form = document.getElementById("new-task-form-id");
    if(!form) return console.error("Form element not found");
    form.addEventListener("submit", event => {
        event.preventDefault();

        const updatedTitle = document.getElementById("task-title").value.trim();
        const updatedDescription = document.getElementById("task-description").value.trim();
        const updatedStartDate = document.getElementById("task-start-date").value;
        const updatedEndDate = document.getElementById("task-end-date").value;

        const updatedTask = {
            title: updatedTitle,
            description: updatedDescription,
            startDate: updatedStartDate,
            endDate: updatedEndDate
        }

        tasks[index] = updatedTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));

        window.location.href = "index.html";
    });

});