//SELECTOR SECTION
const todoInput= document.querySelector(".todoinput");
const todoButton= document.querySelector(".todobutton");
const todoList =document.querySelector(".list");

//EVENT LISTNER SECTION
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//FUNCTIONS SECTION
function addTodo(event){
    event.preventDefault();//Preventing form submission
    //CREATING To-Do DIV
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //CREATING LIST ITEMS
    const newTodo=document.createElement('li');
     newTodo.innerText=todoInput.value;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);
     //CHECK BUTTON
     const completedButton=document.createElement('button');
     completedButton.innerHTML='<i class="fas fa-check"></i>';
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);
     //DELETE BUTTON
     const deleteButton=document.createElement('button');
     deleteButton.innerHTML='<i class="fas fa-trash"></i>';
     deleteButton.classList.add("delete-btn");
     todoDiv.appendChild(deleteButton);
     
     //APPEND TO LIST
     todoList.appendChild(todoDiv);
     //CLEARING INPUT BOX VALUE
     todoInput.value=" ";
}
function deleteCheck(e)
{
    const item=e.target;
    if(item.classList[0]==="delete-btn")
    {
      const todo=item.parentElement;
      todo.remove();
    }
    if(item.classList[0]==="complete-btn") 
    {
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    } 
}
