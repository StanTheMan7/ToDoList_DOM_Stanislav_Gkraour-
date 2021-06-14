

// les element que je vais outiliser pour toDolist

let body = document.body;

//  ma priemiere section 
let header = document.createElement('header');

// mon h1 que se trouve e la interieur de header
let h1Elem = document.createElement('h1');
h1Elem.innerText ="Stan's todo list";



let myForm =  document.createElement('form');


let inputElem = document.createElement('input');
inputElem.type = 'text';
inputElem.className = 'todo-input'

let buttonElem = document.createElement('button');
buttonElem.className = 'todo-button';
buttonElem.type = 'submit'


let icon = document.createElement('i');
icon.className ='fas fa-plus-square'

let divElem = document.createElement('div')
divElem.className = 'todo-container'


let ulElem =  document.createElement('ul');
ulElem.className = 'todo-list';

let todoDiv = document.createElement('div');
todoDiv.className = 'todo';

// let btnDelete = document.createElement('button');
// todoDiv.appendChild(btnDelete)
// let btnChecked  = document.createElement('button');
// todoDiv.appendChild(btnChecked)





// les appendChild 
body.appendChild(header);
header.appendChild (h1Elem);
body.appendChild(myForm);
myForm.appendChild(inputElem);
myForm.appendChild(buttonElem);
buttonElem.appendChild(icon);
body.appendChild(divElem);
divElem.appendChild(ulElem);
ulElem.appendChild(todoDiv)





// todoDiv.appendChild(liElem);
