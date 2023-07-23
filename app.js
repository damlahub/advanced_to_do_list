let todoSub = document.querySelector("#todoSub");
let results = document.querySelector("#results");
let deleteAll = document.querySelector("#delete-all");
let counter = 0;

EventListeners();
LoadTodosFromLocalStorage();
function EventListeners() {
  todoSub.addEventListener("click", ToDoAdd);
  deleteAll.addEventListener("click", DeleteAllToDo);
}
function ToDoAdd(e) {
  e.preventDefault();
  GetValue();
  todoInput.value="";
}
function GetValue() {
  let todoInput = document.querySelector("#todoInput").value.trim();
  let resultLi = document.createElement("li");
  resultLi.classList.add("result");
  counter++;
  console.log("getvalue" + counter);
  resultLi.id = counter;
  localStorage.setItem(`counter`, JSON.stringify(counter));
  localStorage.setItem(`todoInput${counter}`, JSON.stringify(todoInput));
  console.log(resultLi);
  if (todoInput) {
    resultLi.innerHTML = `
    <p>${JSON.parse(localStorage.getItem(`todoInput${counter}`))}</p>
    <button type="button" class="btn-remove" data-id="${counter}">X</button>
  `;
    results.append(resultLi);
    InfoToast();
  }
  else{
    DangerToast();
  }

  //will be deleted
  let removeBtn = resultLi.querySelector(".btn-remove");
  removeBtn.addEventListener("click", ToDoRemove);

  let todoText = resultLi.querySelector(`p`);
  todoText.id=counter;
  todoText.addEventListener("click", function () {
    this.classList.toggle("full-text");
  });
}
function LoadTodosFromLocalStorage() {
  for (counter = 1; counter <= localStorage.length; counter++) {
    let todoInput = JSON.parse(localStorage.getItem(`todoInput${counter}`));
    if (todoInput !== null) {
      let resultLi = document.createElement("li");
      let isFull = "empty";
      resultLi.classList.add("result");
      resultLi.id = counter;
      console.log("yinelle" + resultLi.id);
      resultLi.innerHTML = `
          <p>${todoInput}</p>
          <button type="button" class="btn-remove" data-id="${counter}">X</button>
        `;
      results.append(resultLi);
      //will be deleted
      let removeBtn = resultLi.querySelector(".btn-remove");
      removeBtn.addEventListener("click", ToDoRemove);

    }
  }
}
function ToDoRemove() {
  let todoID = this.getAttribute("data-id");
  localStorage.removeItem(`todoInput${todoID}`);
  let todoToRemove = document.getElementById(todoID);
  if (todoToRemove) {
    todoToRemove.remove();
  }
}
function DeleteAllToDo() {
  localStorage.clear();
}
function DangerToast() {
  Toastify({
    text: "Please enter a value.",
    duration: 3000, // 3 saniye sonra otomatik olarak kaybolacak
    close: true, // Kapatma düğmesini göster
    gravity: "top", // Yerçekimi (top, bottom, left, right)
    position: "right", // Konum (top-left, top-center, top-right, etc.)
    backgroundColor: "linear-gradient(to right, rgb(0, 128, 0), rgb(2, 176, 2))", // Arkaplan rengi
    stopOnFocus: true, // Kullanıcı tıkladığında durdur
  }).showToast();
}
function InfoToast() {
  Toastify({
    text: "To-do added",
    duration: 3000, // 3 saniye sonra otomatik olarak kaybolacak
    close: true, // Kapatma düğmesini göster
    gravity: "top", // Yerçekimi (top, bottom, left, right)
    position: "right", // Konum (top-left, top-center, top-right, etc.)
    backgroundColor: "linear-gradient(to right, rgb(0, 128, 0), rgb(2, 176, 2))", // Arkaplan rengi
    stopOnFocus: true, // Kullanıcı tıkladığında durdur
  }).showToast();
}