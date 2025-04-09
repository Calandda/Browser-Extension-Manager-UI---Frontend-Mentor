import domObject from './DOM/DOM.js';
import dataObject from './data/data.js';

const dataOrigin = new dataObject();
const domOrigin = new domObject();

dataOrigin.test();

const sectionButton = document.querySelector('.sectionButton');

sectionButton.addEventListener("click",(e)=>{
    let currentPress = e.target.className.split(' ')[0];
    let buttonStatus = e.target.textContent;
    let dataJSON = [];
    //console.log(e.target.tagName);
    if(e.target.tagName === 'BUTTON'){
        domOrigin.buttonColorChange(currentPress);
        dataJSON = dataOrigin.getDataSpecific(buttonStatus);
        domOrigin.sectionFillData(dataJSON);
    }
    //dataOrigin.JSONCheck();
})

