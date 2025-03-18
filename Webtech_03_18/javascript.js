document.getElementById("AddToList").addEventListener("click", () => {
    AddTodo();
})

function AddTodo() {
    let input = document.getElementById("ToDoInput");
    let text = input.value.trim();
    if (text === "") return;
    
    let li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", ()=> {
        li.classList.toggle("completed");
    })
    
    document.getElementById("ToDoList").appendChild(li);
    input.value = "";
}