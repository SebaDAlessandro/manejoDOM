/*immediately invoked function expression o bien por sus siglas: IIFE, 
que es tal cual, son funciones que en cuanto se declaran, se ejecutan*/
(()=>{

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
    taskContent.appendChild(checkComplete())
    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerText = value;
    taskContent.appendChild(titleTask)
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML = content;
    task.appendChild(taskContent)
    list.appendChild(task)
}

btn.addEventListener('click', createTask)

const checkComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',completeTask)
    return i;
}

const completeTask = (evento)=>{
    const element = evento.target
    /*  
    element.classList.remove('far')
    element.classList.add('fas');
    element.classList.add('completeIcon') 
    con TOGGLE podemos verificar: si una clase no esta => se agrega... de lo contrario se quita
    */
    element.classList.toggle('fas');
    element.classList.toggle('far');
    element.classList.toggle('completeIcon') 
}

})()