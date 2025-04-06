import domObject from './DOM/DOM.js';
import dataObject from './data/data.js';

const dataOrigin = new dataObject();

dataOrigin.test();

const bodyHTML = document.querySelector('body');

bodyHTML.addEventListener("click",(e)=>{
    dataOrigin.JSONCheck();
})