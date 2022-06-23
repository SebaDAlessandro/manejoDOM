import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento)=>{
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    input.value = '';
    calendar.value = '';

    const taskObj = {
        value,
        dateFormat,
    };

    const taskList = JSON.parse(localStorage.getItem('tasks')) || []
    /*tasks es el nombre (tambien llamado key o clave)que se uso para el almacenamiento cuando se definio 
    como localStorage.setItem('tasks', JSON.stringify(taskList))
    Esta linea se lee asi: si hay algo en el local Sotrage guardalo... sino, crea un array nuevo*/

    /*JSON.parse(localStorage.getItem('tasks')) hasta el punto anterior todavia conamos con un formato del tipo
    JSON con lo cual los datos son strings... con el metodo parse los volvemos al formato original*/

    /*
    Almacenando la informacion de manera termporal:
    sessionStorage: la informacion solo dura mientras no se cierre la ventana
    sessionStorage.setItem('tasks', JSON.stringify(taskObj))
    */

    taskList.push(taskObj);

    localStorage.setItem('tasks', JSON.stringify(taskList));

    const task = createTask(taskObj);
    list.appendChild(task);
}


const createTask = ({ value, dateFormat }) => {

    const task = document.createElement('li');
    task.classList.add('card');
    const taskContent = document.createElement('div');


    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    
    return task;
}
