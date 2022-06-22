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

export default checkComplete;