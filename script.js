import domObject from './DOM/DOM.js';
import dataObject from './data/data.js';

const dataOrigin = new dataObject();
const domOrigin = new domObject();

dataOrigin.test();

const sectionButton = document.querySelector('.sectionButton');
const sectionOutput = document.querySelector('.sectionOutput');
const buttonMode = document.querySelector('.buttonMode');

sectionButton.addEventListener("click",(e)=>{
    let currentPress = e.target.className.split(' ')[0];
    let buttonStatus = e.target.textContent;
    let dataJSON = [];
    
    //console.log(currentPress);
    if(e.target.tagName === 'BUTTON'){
        domOrigin.buttonColorChange(currentPress);
        dataJSON = dataOrigin.getDataSpecific(buttonStatus);
        //dataOrigin.removeData(dataJSON[0]);
        //dataOrigin.changeActive(dataJSON[0]);
        domOrigin.sectionFillData(dataJSON,dataOrigin,buttonStatus);
    }
    //dataOrigin.JSONCheck();
})

const timeOut = setTimeout(
    ()=>{
    timeFunction();}, 200);

function timeFunction(){
    domOrigin.buttonColorChange('buttonAll');
    let dataJSON = dataOrigin.getDataSpecific('All');
    domOrigin.sectionFillData(dataJSON,dataOrigin,'All');
}

sectionOutput.addEventListener("click",(e)=>{
    let dataJSON = dataOrigin.getDataSpecific(sectionOutput.dataset.isActive);
    domOrigin.sectionFillData(dataJSON,dataOrigin,sectionOutput.dataset.isActive);
})

buttonMode.addEventListener("click",(e)=>{
    let dataJSON = dataOrigin.getDataSpecific(sectionOutput.dataset.isActive);
    domOrigin.changeColorTheme(e.target.dataset.colorTheme);
    domOrigin.sectionFillData(dataJSON,dataOrigin,sectionOutput.dataset.isActive);
    
});


