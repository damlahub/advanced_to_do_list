let todoSub = document.querySelector("#todoSub");
let deleteAll = document.querySelector("#todoDeleteAll");
let results = document.querySelector("#results");
let counter = 0;

EventListeners();
function EventListeners() {
    todoSub.addEventListener("click", ToDoAdd)
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
    resultLi.id = counter;
    localStorage.setItem(`todoInput${counter}`, JSON.stringify(todoInput));
    console.log(resultLi);
    resultLi.innerHTML = `
      <button type="button" id="done"><img src="Images/${isFull}.png"></button>
      <p>${JSON.parse(localStorage.getItem(`todoInput${counter}`))}</p>
      <button type="button" id="btn-remove">X</button>
    `;
    results.append(resultLi);
    //localStorage.clear();
}