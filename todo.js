let input = document.getElementById("inpbox");
let msg = document.getElementById("notask");

let container = document.getElementById("listtasks");
function taskinput() {
    if (input.value === "") {
        msg.innerHTML = "Enter the task first....";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 1000);
        return;
    }

    let tasks = document.createElement("div");
    tasks.classList.add("taskname");
    let new_tasks = input.value.toLowerCase();
    
    let duplicate = false;
    container.querySelectorAll(".taskname").forEach((tasks) => {
        if (tasks.textContent.toLowerCase() === new_tasks){
            msg.innerHTML = "Task already exists!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 1000);
            duplicate = true;
            return;
        }
    })

    if (!duplicate) {
        tasks.innerHTML = new_tasks
        container.appendChild(tasks);
    }
    input.value="";
}