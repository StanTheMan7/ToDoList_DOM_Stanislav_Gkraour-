

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
console.log(ulElem);

let divSelect = document.createElement('div');
divSelect.className = 'select';




let selectCategory = document.createElement('select');
selectCategory.className = 'filter-todo';
selectCategory.name = 'todos';
selectCategory.innerHTML = '<i class="fas fa-angle-down"></i>';

let premOption = document.createElement('option');
premOption.value = 'all';
premOption.innerHTML= 'All';

let deuxOption = document.createElement('option');
deuxOption.value = 'completed';
deuxOption.innerHTML= 'Completed';

let troiOption = document.createElement('option');
troiOption.value = 'uncompleted';
troiOption.innerHTML= 'Uncompleted';

// let btnDelete = document.createElement('button');
// todoDiv.appendChild(btnDelete)
// let btnChecked  = document.createElement('button');
// todoDiv.appendChild(btnChecked)


// les appendChild 
body.appendChild(header);
body.appendChild(divSelect);
body.appendChild(myForm);
body.appendChild(selectCategory);
body.appendChild(premOption);
body.appendChild(deuxOption);
body.appendChild(troiOption);
header.appendChild (h1Elem);
divSelect.appendChild(myForm);
divSelect.appendChild(selectCategory);
myForm.appendChild(inputElem);
myForm.appendChild(buttonElem);
selectCategory.appendChild(premOption);
selectCategory.appendChild(deuxOption);
selectCategory.appendChild(troiOption);
buttonElem.appendChild(icon);
body.appendChild(divElem);
divElem.appendChild(ulElem);




export {h1Elem , myForm, inputElem ,  buttonElem , icon, divElem ,ulElem, selectCategory, premOption, deuxOption , troiOption} ;

// todoDiv.appendChild(liElem);
