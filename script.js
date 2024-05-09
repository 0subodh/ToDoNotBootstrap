// State variable
let taskList = [];

// Reading from the Form
function handleOnSubmit(form) {
  // FormData() constructor creates a new FormData object
  const newForm = new FormData(form);
  const task = newForm.get("task");
  const hours = newForm.get("hours");

  const object = {
    task,
    hours,
    id: randomIdGenerator(),
  };

  // Storing Form data in state Variable
  taskList.push(object);
  displayEntryList();
  console.log(taskList);
}

// Update the Entry List Table
function displayEntryList() {
  const entryElement = document.getElementById("entryList");
  let entryList = "";

  taskList.map((item, index) => {
    entryList += `<tr>
    <td scope="row">${index + 1}</th>
    <td>${item.task}</td>
    <td>${item.hours} hours</td>
    <td>
      <button class="btn btn-danger">
        <i onclick="handleDelete('${item.id}')" class="fa-solid fa-trash"></i>
      </button>
      <button class="btn btn-success">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </td>
    </tr>`;
  });

  entryElement.innerHTML = entryList;
}

function randomIdGenerator() {
  const characters =
    "asdfghjklzxcvbnmqwertyuiopASDFGHJKLZXCVBNMQWERTYUIOP0123456789";

  let id = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
}

// Delete an item from the list
function handleDelete(id) {
  if (window.confirm("Are you sure you want to delete the item?")) {
    taskList = taskList.filter((element) => element.id !== id);
    displayEntryList();
  }
}
