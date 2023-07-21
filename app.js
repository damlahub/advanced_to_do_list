let todoForm=document.querySelector("#todoForm");
let results=document.querySelector("#results");

EventListeners();
function EventListeners(){
    todoForm.addEventListener("submit", ToDoAdd)
}
function ToDoAdd(e){
    e.preventDefault();
    GetValue();
}
function GetValue(){
    let todoInput=document.querySelector("#todoInput").value.trim();
    let resultLi=document.createElement("li");
    resultLi.classList.add("result");
    resultLi.innerHTML=`
    <button type="button" id="done"><img id="empty" src="Images/empty.png"></button>
    <p>${todoInput}</p>
    <button type="button" id="btn-remove">X</button>`;
    results.append(resultLi);
}