class domObject{
    constructor(){
        this.sectionOutput = document.querySelector('.sectionOutput');
    }
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
    sectionFillData(dataJSON,dataObject){
        this.sectionClear();
        for(let i = 0; i < dataJSON.length; i++){
            this.fillDataSolo(dataJSON[i],dataObject);
        }
    }
    fillDataSolo(dataSolo, dataObject){
        const divList = document.createElement('div');
        const divHeader = document.createElement('div');
        const divButtons = document.createElement('div');

        const dataImage = document.createElement('img');
        const dataHeader = document.createElement('p');
        const dataDesc = document.createElement('p');
        const dataRemove = document.createElement('button');
        const dataToggle = document.createElement('button');

        divHeader.classList.add('divHeader');
        dataImage.classList.add('dataImage');
        dataHeader.classList.add('dataHeader','fontWeight700', 'color_Neutral900');
        dataDesc.classList.add('dataDesc', 'fontSizeSmall', 'color_Neutral600');

        divButtons.classList.add('divButtons');
        dataRemove.classList.add('dataRemove', 'fontSizeMedium','fontWeight700','colorBG_Neutral0','borderCircle300');
        dataToggle.classList.add('dataToggle', 'borderRemove', 'colorBG_Red700', 'borderCircle300');
        divList.classList.add('divList','colorBG_Neutral0','borderCircle', 'boxShadow');

        dataImage.src = dataSolo.logo;
        dataHeader.textContent = dataSolo.name;
        dataDesc.textContent = dataSolo.description;
        
        dataRemove.textContent = 'Remove';
        
        divHeader.appendChild(dataImage);
        divHeader.appendChild(dataHeader);
        divHeader.appendChild(dataDesc);
        divButtons.appendChild(dataRemove);
        divButtons.appendChild(dataToggle);
        divList.appendChild(divHeader);

        
        divList.appendChild(divButtons);
        this.sectionOutput.appendChild(divList);
        dataRemove.addEventListener('click', (e)=>{
            dataObject.removeData(dataSolo);
        })
    }
    sectionClear(){
        while(this.sectionOutput.firstChild){
            this.sectionOutput.removeChild(this.sectionOutput.firstChild);
        }
    };
}


export default domObject;