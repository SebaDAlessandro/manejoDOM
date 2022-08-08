import { displayTasks } from "./readTasks.js";

const deleteIcon = (id)=>{
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click',()=>deleteTask(id))
    return i;
}

const deleteTask = (id)=>{
    const li = document.querySelector('[data-list]')
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex(item => item.id === id);
    tasks.splice(index,1);
    /*splice necesita para eliminar un elemento: la posicion como 1er paramtro y la cantidad (en entero)
    de elementos a eliminar*/
    li.innerHTML='';//borramos todas las tareas
    localStorage.setItem('tasks', JSON.stringify(tasks))//cargamos el local storage con los datos filtrados
    displayTasks();//carga todo el local storage en la pagina
}

export default deleteIcon;