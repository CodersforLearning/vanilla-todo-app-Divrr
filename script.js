var todoList = [];
var archiveList = [];

function addTodo() {
    const item = document.getElementById("addTodo").value;
    todoList.push(item);
    showTodo();
}

function removeTodo(name){
    const item = todoList.indexOf(name);
    todoList.splice(item, 1);
    showTodo();
}

function removeArchivedTodo(name){
    const item = archiveList.indexOf(name);
    archiveList.splice(item, 1);
    showArchive();
}

function showTodo(Id){
    ul = document.getElementById("todoList");
    ul.innerHTML = ""
    for (let i=0; i< todoList.length; i++){
        ul.innerHTML += "<li><button onclick='removeTodo(\"" + todoList[i] + "\")'>🗑️</button> <button onclick='archiveTodo(\"" + todoList[i] + "\")'>✔️</button> " + todoList[i] + " </li>";
    }
}

function showArchive(){
    ul = document.getElementById("doneList");
    ul.innerHTML = ""
    for (let i=0; i< archiveList.length; i++){
        ul.innerHTML += "<li><button onclick='removeArchivedTodo(\"" + archiveList[i] + "\")'>🗑️</button> <button onclick='unarchiveTodo(\"" + archiveList[i] + "\")'>✖</button> " + archiveList[i] + " </li>";
    }
}

function archiveTodo(name){
    const item = todoList.indexOf(name);
    archiveList.push(todoList[item]);
    todoList.splice(item, 1);
    showTodo();
    showArchive();
}

function unarchiveTodo(name){
    const item = archiveList.indexOf(name);
    todoList.push(archiveList[item]);
    archiveList.splice(item, 1);
    showTodo();
    showArchive();
}