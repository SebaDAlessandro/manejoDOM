/*immediately invoked function expression o bien por sus siglas: IIFE, 
que es tal cual, son funciones que en cuanto se declaran, se ejecutan*/
/* (()=>{

    esto tambien se previene utilizando el esquema de modulos
    imoprtante: se debe cambiar agregar a la etiqueta script del HTML el tipe='module'
 */
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector('[data-form-btn]')

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li');
    task.classList.add('card')
    input.value = '';
    const taskContent = document.createElement('div')
    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete())
    taskContent.appendChild(titleTask)
    //task.innerHTML = content;
    task.appendChild(taskContent)
    task.appendChild(deleteIcon())
    list.appendChild(task)
}

btn.addEventListener('click', createTask)

/* })() */