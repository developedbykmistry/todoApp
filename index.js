const input = document.getElementById('input');
let todo = document.querySelector('.todo');
let todoTask =  document.querySelector('.todo-task'); 
let todoList = document.querySelector('.todos');

let count = 0;

input.addEventListener('keypress', (e) => {
    if(e.key == "Enter" && input.value != "") {
        updateTodos()
    }
})

var taskLeft = document.getElementById('tasks-left');

function refresh() {
    taskLeft.innerHTML = `${count} todo's left`;
}

function updateTodos() {
    let paraBox = document.createElement("div");
    paraBox.className = "todo";
    var paragraph = document.createElement("p")
    paragraph.className = "todo-task";
    paragraph.innerHTML = input.value;
    paraBox.appendChild(paragraph)
    todoList.appendChild(paraBox);
    input.value = "";
    count = count + 1;
    refresh();
    paraBox.addEventListener('click', () => {
      paragraph.style.textDecoration = "line-through";
        paraBox.style.opacity = 0.6;
    })
    paraBox.addEventListener('dblclick', () => {
      paraBox.style.display = "none";
      count = count - 1;
      refresh();
    })

}

let clearAll = document.querySelector('.clear-todos');

clearAll.addEventListener('click', () => {
    todoList.innerHTML = ""
});
