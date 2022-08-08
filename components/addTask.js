import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (evento)=>{
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    /*
    Para darle formato a la fecha debemos importar una libreria (moment) y es lo primero que traemos 
    en nuestro HTML
     <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js"></script>
    */
    const dateFormat = moment(date).format('DD/MM/YYYY');

    if(value === '' || date === ''){
       return swal("Oops!", "Debe cargar una tarea y una fecha válida", "error");
    }

    input.value = '';
    calendar.value = '';

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4(),
    };

    list.innerHTML = '';//inicializamos la lista vacia... si hay algo en el local storage se carga

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

    displayTasks()

}


export const createTask = ({ value, dateFormat, complete, id }) => {

    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');

    const check = checkComplete(id)

    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle('far');
        check.classList.toggle('completeIcon');
    }

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

/*     const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
 */
    task.appendChild(taskContent);
/*     task.appendChild(dateElement);
 */    task.appendChild(deleteIcon(id));
    
    return task;
}
