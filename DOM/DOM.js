class domObject{
    constructor(){
       
    }
    changeColor
    buttonColorChange(buttonClass){
        const buttonAll = document.querySelector('.buttonAll');
        const buttonActive = document.querySelector('.buttonActive');
        const buttonInactive = document.querySelector('.buttonInactive');
        const buttonClicked = document.querySelector('.'+buttonClass);
        let colors = ['colorBG_Neutral0', 'colorBG_Red700'];
        
        buttonAll.classList.remove(colors[0],colors[1]);
        buttonActive.classList.remove(colors[0],colors[1]);
        buttonInactive.classList.remove(colors[0],colors[1]);
        
        buttonAll.classList.add(colors[0]);
        buttonActive.classList.add(colors[0]);
        buttonInactive.classList.add(colors[0]);
        buttonClicked.classList.add(colors[1]);
    }
    sectionFillData(dataJSON){
        dataJSON.filter(this.fillDataSolo);
    }
    fillDataSolo(dataSolo){
        const sectionOutput = document.querySelector('.sectionOutput');
        const divList = document.createElement('div');
        divList.textContent = dataSolo;
        sectionOutput.appendChild(divList);
    }
    
}


export default domObject;