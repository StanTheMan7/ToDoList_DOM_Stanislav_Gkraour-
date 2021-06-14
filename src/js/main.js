// # Todo list 

// ### Outils
// - Github. Faites un commit pour chaque fonctionnalité réalisée. Nom du repo : js_dom_todolist

// ### Design
// - Vous trouverez un design de base dans le dossier 'exemple design'.
// - Attention, n'allez pas plus loin que le design de base au risque de perdre beaucoup de temps. La priorité est de faire toutes les fonctionnalités avant la deadline. 

// ### Consignes et fonctionnalités (voir les vidéos)
// - Avoir au minimum 2 fichiers js (import & export)
// - faire une zone de texte pour écrire une tâche. (input)
// - Pour enregistrer une tâche, passer (2 possibilités) :
//     - par un button add/ajouter
//     - par la touche 'Enter' (event.key)
// - sur la tâche en question : 
//     - un button/checkbox qui valide les tâches terminées 
//     - un button qui permet de modifier le nom de la tâche
//     - un button qui supprime la tâche
// - faire trois button pour filtrer les tâches :
//     - all/tout : au clique, toutes les tâches s'affichent.
//     - to do/à faire : au clique, les tâches non terminées s'affichent et les tâches terminées disparait
//     - done/terminé : au clique, les tâches terminées s'affichent et les non terminées disparait
// - faire un boutton "list clear" qui permet de supprimer toutes les tâches. Autrement dit , de nettoyer la liste 

// ### Bonus fonctionnalités
// - pour le mode "edit", faites en sorte de pouvoir modifier en double cliquant sur le nom de la tâche
// - pour le mode "delete", faites en sorte de demander une confirmation avant de supprimer
// - Rajoutez un mode "sombre" pour le design. (comme sur facebook)
// - faire un "drap and drog" sur les tâches. (voir sur internet)


// import "./elements.js"
import {h1Elem , myForm, inputElem ,  buttonElem , icon, divElem ,ulElem } from "./elements.js" 
/* -------------------------------------------------------------------------- */
/*                               //! Selecotors                               */
/* -------------------------------------------------------------------------- */






/* -------------------------------------------------------------------------- */
/*                             //! Event Listeners                            */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                               // ! Functions                               */
/* -------------------------------------------------------------------------- */
// let inputElem = document.querySelector('.todo-input');
// let buttonElem= document.querySelector('.todo-button');
// let ulElem = document.querySelector('.todo-list');



let addTodo = (event) => {
    event.preventDefault();
    // create divtodo
    let todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');
    // create li 
    let newTodo = document.createElement('li')
    newTodo.innerText = inputElem.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    // check mark button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
    completedButton.classList.add('completed-btn')
    todoDiv.appendChild(completedButton)
    

    let trashButton = document.createElement('button')
    trashButton.innerHTML='<i class ="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    console.log(trashButton);
    // append 

    ulElem.appendChild(todoDiv)
    // clear input
    inputElem.value = ''
    let changeButton = document.createElement('button');
    changeButton.innerHTML ='<i class="fas fa-save"></i>';
    changeButton.classList.add('change-btn')
    todoDiv.appendChild(changeButton)
    changeButton.addEventListener('dblclick',() => {
        newTodo.innerText= '';
        let newInput = document.createElement('input');
        todoDiv.appendChild(newInput);
        newInput.addEventListener('keyup', (e)=> {
            if(e.keyCode == 13 ){
                newTodo.innerText = newInput.value;
                newInput.remove()
            }
        })
    })
}

buttonElem.addEventListener('click', (event)=> {
    addTodo(event);
})


ulElem.addEventListener('click', (e)=>{
    if(e.target.classList[0] === "trash-btn" ){
        e.target.parentElement.remove()
    }else if(e.target.classList[0] ==="completed-btn"){
        e.target.parentElement.classList.toggle("completed")
    }
});






