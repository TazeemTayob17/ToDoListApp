document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("new-task-form-id");
    if(!form) return console.error("Form element not found");
    form.addEventListener("submit", event => {
        event.preventDefault();

        const title = document.getElementById("task-title").value;
        const description = document.getElementById("task-description").value;
        const startDate = document.getElementById("task-start-date").value;
        const endDate = document.getElementById("task-end-date").value;

        //Get existing tasks or start with an empty string
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        //Add new task to object
        tasks.push({ title, description, startDate, endDate });

        //Save back to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Redirect to index.html
        window.location.href = "../index.html"; 
    });
});

