let todoSub = document.querySelector("#todoSub");
let results = document.querySelector("#results");
let deleteAll = document.querySelector("#delete-all");
let counter = 0;

EventListeners();
LoadTodosFromLocalStorage();
function EventListeners() {
    todoSub.addEventListener("click", ToDoAdd);
}
function ToDoAdd(e) {
    e.preventDefault();
    GetValue();
}
function GetValue() {
    let todoInput = document.querySelector("#todoInput").value.trim();
    let resultLi = document.createElement("li");
    let isFull = "empty";
    resultLi.classList.add("result");
    counter++;
    console.log("getvalue"+counter);
    resultLi.id = counter;
    localStorage.setItem(`todoInput${counter}`, JSON.stringify(todoInput));
    console.log(resultLi);
    resultLi.innerHTML = `
      <button type="button" class="done"><img src="Images/${isFull}.png"></button>
      <p>${JSON.parse(localStorage.getItem(`todoInput${counter}`))}</p>
      <button type="button" class="btn-remove" data-id="${counter}">X</button>
    `;
    results.append(resultLi);
    //localStorage.clear();

    let removeBtn=resultLi.querySelector(".btn-remove");
    removeBtn.addEventListener("click",ToDoRemove);

    deleteAll.addEventListener("click",DeleteAllToDo);

}
function LoadTodosFromLocalStorage() {
    for (let i = 1; i <= localStorage.length; i++) {
      let todoInput = JSON.parse(localStorage.getItem(`todoInput${i}`));
      if (todoInput !== null) {
        let resultLi = document.createElement("li");
        let isFull = "empty";
        resultLi.classList.add("result");
        resultLi.id = i;
        console.log("yinelle"+resultLi.id);
        resultLi.innerHTML = `
          <button type="button" class="done"><img src="Images/${isFull}.png"></button>
          <p>${todoInput}</p>
          <button type="button" class="btn-remove" data-id="${counter}">X</button>
        `;
        results.append(resultLi);
        //will be deleted
        let removeBtn=resultLi.querySelector(".btn-remove");
        removeBtn.addEventListener("click",ToDoRemove);
        deleteAll.addEventListener("click",DeleteAllToDo);
      }
    }
}
function ToDoRemove(){
  let todoID = this.getAttribute("data-id");
  localStorage.removeItem(`todoInput${todoID}`);
  let todoToRemove = document.getElementById(todoID);
  if (todoToRemove) {
    todoToRemove.remove();
}
}
function DeleteAllToDo(){
  localStorage.clear();
}