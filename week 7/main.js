// get the form element
const form = document.querySelector("#form");
// get the text field
const input = document.querySelector("#task");

let ul = document.createElement('ul');
form.append(ul);


// add event listener to <form> for when the <form> gets submitted
form.addEventListener("submit", function (event) {
  // prevent the form submit from refreshing the page. By default,
  // when the form is submitted the page will do a page refresh
  event.preventDefault();

  // get value of text field
  const inputValue = input.value;
  if(inputValue.trim() === ''){
    alert("please enter a valid task");
    return;
  }

  let li = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  ul.append(li);
  li.append(checkbox);
  li.append(inputValue);
  let deleteButton = document.createElement('button');
  let editButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  editButton.innerText = 'Edit Task';
  li.append(deleteButton, editButton);
  

  console.log(
    `The form was submitted and the value of the field is: "${inputValue}"`
  );

  input.value = '';

  deleteButton.addEventListener('click', function(){
    this.parentElement.remove();
  })



// i ran out of time.  i was trying to count up if all of my boxes were checked and if so send a congratulations.  I didn't quite get there!    

checkbox.addEventListener('change',function(){
    // if item is checked remove the edit button
    if (this.checked){
      this.parentElement.style.textDecoration = 'line-through';
      editButton.remove();
    }
    //check if all checkboxes are checked
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    
    let allCompleted = true;
    console.log(allCheckboxes);
    allCheckboxes.forEach(function(check){
      // find if any boxes are NOT checked
      if(!check.checked){
        allCompleted = false;
      } 
    });
    //  supposed to only work if ALL are checked.  I was going to print it to the page but it doesn't fire right!
    if (allCompleted = true){
      console.log('Congrats you completed all of your tasks!')
    }
  
  })

  editButton.addEventListener('click', function(e){
    const editedToDo = prompt('Edit your To Do Item');
    li.childNodes[1].textContent = editedToDo;
  })
});




