// var count = 1;
// function addTask(){
//     //This creates a new <label> element.
//     var label = document.createElement('label');

//     //This sets the text inside the label to "Box-" followed by the value of count.
//     label.innerText = "Box-"+count;

//     //This creates an ID based on the count value and assigns it to the label.
//     label_id = "Box-"+count;
//     label.setAttribute('id', label_id);

//     var br1 = document.createElement('br');

//     //These lines append the label and the line break
//     document.body.appendChild(label);
//     document.body.appendChild(br1);

//     //input-box
//     var inp = document.createElement('taskInput');
//     inp.setAttribute("type", "text");
//     var input_id = "input-"+count;
//     inp.setAttribute("id", input_id);
//     var br2 = document.createElement('br');
//     document.body.appendChild(inp);
//     document.body.appendChild(br2);

//     //delete box
//     //This creates a new <button> element.
//     var delete_button = document.createElement('button');

//     //This sets the text inside the button to "Delete".
//     delete_button.innerText = "Delete";
    
//     var delete_button_id = 'delete-button-' + count;
//     delete_button.setAttribute('id', delete_button_id);

//     //This sets the onclick attribute of the button to call the delete_input function with the count value as an argument when the button is clicked.
//     var delete_input = "delete_input("+count+")";
//     delete_button.setAttribute('onclick', delete_input);
//     document.body.appendChild(delete_button);

//     document.body.appendChild(br2);
//     count++;
// }
// function delete_input(input_id){
//     var n1 = 'Box-'+ input_id;
//     document.getElementById(n1).remove();
//     var n2 = 'input-'+ input_id;
//     document.getElementById(n2).remove();
//     var n3 = 'delete-button-' + input_id;
//     document.getElementById(n3).remove();
// }


// function addTask(){
//     var newTask = document.createElement('li');
//     var taskList = document.getElementById('taskList')
//     taskList.appendChild(newTask)
//     newTask.textContent= document.getElementById('inputTask').value 
//     deleteTask(newTask)
// }
// function deleteTask(newTask){
//     var delete_button = document.createElement('button')
//     delete_button.textContent = "delete"
//     newTask.appendChild(delete_button)
//     delete_button.onclick = function(){
//         newTask.remove()
//     }
// }

function addTask(){
    alert("Please enter a task");
    return;

}