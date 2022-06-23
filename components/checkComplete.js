const checkComplete = (id)=>{
    const i = document.createElement('i');
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click', (event)=> completeTask(event, id))
    return i;
}

const completeTask = (evento,id)=>{
    const element = evento.target
    /*  
    element.classList.remove('far')
    element.classList.add('fas');
    element.classList.add('completeIcon') 
    con TOGGLE podemos verificar: si una clase no esta => se agrega... de lo contrario se quita
    */
    element.classList.toggle('fas');
    element.classList.toggle('far');
    element.classList.toggle('completeIcon');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex(item => item.id === id);
    tasks[index].complete = !tasks[index].complete;
    localStorage.setItem('tasks', JSON.stringify(tasks))
 console.log(tasks)
}

export default checkComplete;