var todoList = [];

const node = document.getElementsByClassName("input");
console.log(node)
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTodo()
    }
});

function addTodo() {
    const item = document.getElementById("addTodo").value;
    todoList.push(item);
    showTodo();
}

function showTodo(){
    ul = document.getElementById("todoList");
    ul.innerHTML = ""
    for (let i=0; i< todoList.length; i++){
        ul.innerHTML += "<li>" + todoList[i] + "</li>";
    }
}