// function popup(){
//   // alert("Hey Good Morning!!")//shows the text on popup
//   // document.querySelector("button").innertext="Hey Good Morning!!" //shows the text inside the button only 
//   document.write("hey good morning")//shows text on web page 
// };

function addTask(){
  var taskInput= document.getElementById("taskInput");
  var taskList= document.getElementById("taskList");

  if(taskInput.value.trim()===""){
    alert("please enter a text");
    return;
  }

  var li = document.createElement("li");
  li.innerHTML= taskInput.value + '<button onclick="completeTask(this)">Complete</button>  <button onclick="deleteTask(this)">delete</button>';

 taskList.appendChild(li);
 taskInput.value="";
}
 

function completeTask(element){
  var li = element.parentElement;
 li.style.textDecoration = "line-through";
}
function deleteTask(element){
  var li = element.parentElement;
  taskList.removeChild(li);
}