console.log("start to do list");

// what we trigger, its the button
// what is the content,, input value(string)
// what is the new child,,li
// the new created li ,,,innertext=inputvalue
// what is the append?,,,ol

// new feature : important check -> text list change to red
// DOM for checkbox
// check the value
// value === true, add new style at newLiDOM, color =red

// new feature to append multiple child in the same time
// input by using prompt, input text
// each task is sepparate using ","
// hello worl= 1 task
// hello world, hello mars=2 task
// convert string into task
// loop,itterate array of task
// create new li
// append ol to inser li

let btnSubmitDOM = document.querySelector("#btnSubmit");
let inputChildDOM = document.querySelector("#inputChild");
let listBasketDOM = document.querySelector("#listBasket");
let importantCheckboxDOM = document.querySelector("#importantCheckbox");
let styleDOM = document.querySelector("#stylingOl");

// // add task insert in the prompt
// initialiseMultipleTasks ();
// function initialiseMultipleTasks() {
//   let promptTask = prompt("Insert your prompt(s) here");
//   if (promptTask === null) return;

//   let taskArray = promptTask.split(",");
//   for (let i = 0; i < taskArray.length; i++) {
//     let value = taskArray[i].trim();
//     let newLiDOM = document.createElement("li");
//     newLiDOM.innerText = value;
//     listBasketDOM.appendChild(newLiDOM);
//   }
// }

// add new task when press button
// btnSubmitDOM.addEventListener("click", newTask);
// document.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {

//     newTask;
//     console.log(newTask);
//   }
// });
// function newTask() {
//   // safeguard
//   if (inputChildDOM.value === "") return;
//   //   create new li using js
//   let newLiDOM = document.createElement("li");
//   newLiDOM.innerText = inputChildDOM.value;

//   let isImportant = importantCheckboxDOM.checked; //boolean
//   if (isImportant) {
//     // positive statement, add color style to new li

//     newLiDOM.style.color = "red";
//   }

//   // get the parent and append a child in it
//   // parent:listBasketDOM
//   // child: newLiDOM

//   listBasketDOM.appendChild(newLiDOM);
//   resetForm();
// }

// function resetForm() {
//   inputChildDOM.value = "";
//   importantCheckboxDOM.checked = false;
// }
btnSubmitDOM.addEventListener("click", newTask);
window.addEventListener("keydown", keyDownPressed);
function keyDownPressed(e) {
  if (e.code === "Enter") {
    newTask();
  }
}
function newTask() {
  // safeguard
  if (inputChildDOM === " ") return;
  // display hidden div
  styleDOM.style.display = "block";

  // create new div for list
  newListDiv = document.createElement("div");
  newListDiv.style.display = "flex";

  // create list
  newList = document.createElement("li");
  newList.style.listStyle = "decimal inside";
  newList.style.marginRight = "10px";

  // create paragraph for list
  newTaskDOM = document.createElement("span");
  newTaskDOM.classList.add("newTask");
  newTaskDOM.innerText = inputChildDOM.value;
  console.log(newTaskDOM.innerText);

  // create div for button : edit and delete
  newBtnDiv = document.createElement("div");

  // create edit button
  newEditDOM = document.createElement("button");
  newEditDOM = document.createElement("i");
  newEditDOM.classList.add("bi");
  newEditDOM.classList.add("bi-pencil-square");
  newEditDOM.onclick = editTask;
  newEditDOM.style.display = "inline-block";

  // create delete button
  newDltDOM = document.createElement("button");
  newDltDOM = document.createElement("i");
  newDltDOM.classList.add("bi");
  newDltDOM.classList.add("bi-file-x-fill");
  newDltDOM.onclick = dltTask;
  newDltDOM.style.display = "inline-block";
  // append child inside parent
  newBtnDiv.appendChild(newEditDOM);
  newBtnDiv.appendChild(newDltDOM);

  newList.appendChild(newTaskDOM);
  newListDiv.appendChild(newList);
  newListDiv.appendChild(newBtnDiv);

  listBasketDOM.appendChild(newListDiv);

  // change style for list
  listBasketDOM.style.fontSize = "2rem";
  listBasketDOM.style.color = "darkblue";
  listBasketDOM.style.display = "flex";
  listBasketDOM.style.flexDirection = "column";

  // using checkbox to change color based on important event
  let isImportant = importantCheckboxDOM.checked; //boolean
  if (isImportant) {
    // positive statement, add color style to new li

    newList.style.color = "red";
  }
  resetForm();
}

function editTask() {
  listNode = this.parentNode.parentNode;
  editedTask = prompt("Edit your task");
  listNode.querySelector(".newTask").innerText = editedTask;
}
function dltTask() {
  listNode = this.parentNode.parentNode;
  listNode.remove();
}
function resetForm() {
  inputChildDOM.value = "";
  importantCheckboxDOM.checked = false;
}
