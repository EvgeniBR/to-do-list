// assign variables tha needed for the assignment
let toDoBtn = document.querySelector(`.btn`);
let listContainer = document.querySelector(`.mylist`);
let date = new Date();
let dd = String(date.getDate()).padStart(2, "0");
let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = date.getFullYear();
let hour = [date.getHours()];
let minut = [date.getMinutes()];
let second = [date.getSeconds()];

date = `loged at ${hour}:${minut} |:| ${dd}/${mm}/${yyyy}`;

let toDoItemsList = [];
//add event listeners that take the text on submit

function addAssignment() {
  let assignment = document.querySelector(`.textinput`).value;
  let importance = document.querySelector(`.importanceinput`).value;
  let tempObj = {
    todo: assignment,
    important: importance,
    time: date,
  };
  toDoItemsList.push(tempObj);

  let myAssignment = document.createElement("p");
  let editBtn = document.createElement("BUTTON");
  editBtn.classList.add(`edit`);
  editBtn.textContent = `Edit`;
  let doneBtn = document.createElement("BUTTON");
  doneBtn.classList.add(`done`);
  doneBtn.textContent = `done`;
  let deleteBtn = document.createElement("BUTTON");
  deleteBtn.classList.add(`delete`);
  deleteBtn.textContent = `delete`;
  myAssignment.textContent = `Level:${tempObj.important}|| ${tempObj.todo} || ${tempObj.time}  `;

  //inserting elemets  to HTML
  listContainer.insertAdjacentElement("afterbegin", myAssignment);
  myAssignment.insertAdjacentElement("beforeend", editBtn);
  myAssignment.insertAdjacentElement("beforeend", doneBtn);
  myAssignment.insertAdjacentElement("beforeend", deleteBtn);

  editBtn.addEventListener(`click`, addAssignment);
  doneBtn.addEventListener(`click`, addAssignment);
  deleteBtn.addEventListener(`click`, deleteAssignment);
}

function deleteAssignment() {
  let warningscreen = document.querySelector(`.warningcontainer`);
  let warning = document.querySelector(`.warning`);
  warningscreen.classList.add(`open`);
  warning.textContent = `are you sure you want to delete this assignment?`;
  let yesBtn = document.createElement("BUTTON");
  yesBtn.classList.add(`yes`);
  yesBtn.textContent = `yes`;
  let noBtn = document.createElement("BUTTON");
  noBtn.classList.add(`no`);
  noBtn.textContent = `no`;
  warning.insertAdjacentElement("beforeend", yesBtn);
  warning.insertAdjacentElement("beforeend", noBtn);

  function deleteAss(obj) {
    const index = toDoItemsList.indexOf(obj);
    if (index > 1) {
      toDoItemsList.splice(index, 1);
    } else {
      console.log(`Errororor`);
    }

    console.log(index);
    console.log(toDoItemsList);

    console.log(newtoDoItemsList);
  }
  // toDoItemsList.forEach((obj) => {
  //   deleteAss(obj);
  // });

  function closeWarningScreen() {
    warningscreen.classList.remove(`open`);
  }
  noBtn.addEventListener(`click`, closeWarningScreen);
  yesBtn.addEventListener(`click`, deleteAss);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeWarningScreen();
    }
  });
}

toDoBtn.addEventListener(`click`, addAssignment);

//assign this text to a santance after check box

//make the line disappear when checkbox is checked
