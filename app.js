const todoInput = document.querySelector('#todo');
const ol = document.querySelector('ol');
const arr = [];


function render(){
  ol.innerHTML = '';
 

  for (let i =0 ;i<arr.length;i++){
      ol.innerHTML += `<li>${arr[i]} 
      <button onclick ="deleteTodo(${[i]})"  class="delete">Delete</button>
      <button onclick ="editTodo(${[i]})"  class="edit">Edit</button>
      </li>`
    }

}



function addTodo(){
  arr.push(todoInput.value);
  console.log(arr);
ol.innerHTML = '';
 

for (let i =0 ;i<arr.length;i++){
    ol.innerHTML += `<li>${arr[i]} 
    <button onclick ="deleteTodo(${[i]})" class="delete">Delete</button>
    <button onclick ="editTodo(${[i]})" class="edit">Edit</button>
    </li>`
  }
  todoInput.value = '';
}


function deleteTodo(index){

console.log('delete todo is ',index);
arr.splice(index,1);
render()

}

function editTodo(index){
 const updatedVal= prompt('Enter updated value');
    console.log('edit todo is ',index);
  arr.splice(index,1,updatedVal);
render()

}

































// const todoInput = document.querySelector('#todo');
// const ol = document.querySelector('ol');

// const arr = [];


// function addTodo(){
// ol.innerHTML = '';
//   arr.push(todoInput.value);
//   console.log(arr);

//    for(let i=0;i<arr.length;i++){
//   ol.innerHTML += `<li>${arr[i]} 
//   <button onclick="deleteTodo(${i})" class="delete">Delete</button>
//   <button onclick="editTodo(${i})" class="edit">Edit</button>
//   </li>`
//   }

//   todoInput.value = '';
// }

// function deleteTodo(index){

// console.log('The index number is ', index);
// arr.splice(index,1);
// ol.innerHTML ='';
// for(let i=0;i<arr.length;i++){
//   ol.innerHTML += `<li>${arr[i]} 
//   <button onclick="deleteTodo(${i})" class="delete">Delete</button>
//   <button onclick="editTodo(${i})" class="edit">Edit</button>
//   </li>`
//   }



// }
// function editTodo(index){
  
// console.log('The index number is ', index);
// const updatedVal = prompt('Enter the updated value')
// arr.splice(index,1,updatedVal);

// ol.innerHTML = '';
// for(let i=0;i<arr.length;i++){
//   ol.innerHTML += `<li>${arr[i]} 
//   <button onclick="deleteTodo(${i})" class="delete">Delete</button>
//   <button onclick="editTodo(${i})" class="edit">Edit</button>
//   </li>`
//   }

// }