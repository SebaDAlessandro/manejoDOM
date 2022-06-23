/*immediately invoked function expression o bien por sus siglas: IIFE, 
que es tal cual, son funciones que en cuanto se declaran, se ejecutan*/
/* (()=>{

    esto tambien se previene utilizando el esquema de modulos (export / import)
    imoprtante: se debe cambiar agregar a la etiqueta script del HTML el tipe='module'
 */
import { addTask } from './components/addTask.js'

const btn = document.querySelector('[data-form-btn]')

btn.addEventListener('click', addTask)

/* })() */