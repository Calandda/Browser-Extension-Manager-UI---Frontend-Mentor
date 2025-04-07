import domObject from './DOM/DOM.js';
import dataObject from './data/data.js';

const dataOrigin = new dataObject();
const domOrigin = new domObject();

dataOrigin.test();

const bodyHTML = document.querySelector('body');

bodyHTML.addEventListener("click",(e)=>{
    let currentPress = e.target.className.split(' ')[0];
    //console.log(e.target.tagName);
    if(e.target.tagName === 'BUTTON'){
        domOrigin.buttonColorChange(currentPress);
    }
    //dataOrigin.JSONCheck();
})

