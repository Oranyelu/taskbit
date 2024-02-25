

function welcomeUser() {
  const userName = document.getElementById("user-name").value;
  if (userName === "") {alert("name field must not be empty");}
  else{
    const greetinigMessage = 'Welcome ${userName}, Lets create some task';
    alert(greetinigMessage);
  }
}


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if(inputBox.value === ''){
    alert("Please enter a task!");
  }
   else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    //createDeleteButton(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

   
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI"){
      event.target.classList.toggle("check");
      saveData();
    } 
    else if(event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
