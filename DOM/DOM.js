class domObject{
    constructor(){
        this.sectionOutput = document.querySelector('.sectionOutput');
        this.colorThemeIcon = ['./assets/images/icon-sun.svg','./assets/images/icon-moon.svg'];
        this.colorTheme = [ ['colorBG_LightGradient','colorBG_Neutral0', 'colorBG_Neutral'],
                            ['colorBG_DarkGradient','colorBG_Neutral700','colorBG_Neutral600']];
        this.currentColorTheme = 0;
        this.oppositeColorTheme = 1;

        this.bodyColor = ['colorBG_LightGradient','colorBG_DarkGradient'];
        this.headerLogoColor = ['colorBG_Neutral0','colorBG_Neutral700'];
        this.buttonModeColor = ['colorBG_Neutral100','colorBG_Neutral600'];
        this.buttonToggleActive = ['colorBG_Red700','colorBG_Neutral600'];
        this.fontHeavyColor = ['color_Neutral900','color_Neutral0'];
        this.fontLightColor = ['color_Neutral600', 'color_Neutral200']; 

        this.buttonClickedColor = ['colorBG_Red700'];
        this.buttonListColor = ['colorBG_Neutral0','colorBG_Neutral700'];

        this.body = document.querySelector('body');

        this.headerLogo = document.querySelector('.headerLogo');
        this.buttonMode = document.querySelector('.buttonMode');

        this.buttonHeader = document.querySelector('h1');
        this.buttonAll = document.querySelector('.buttonAll');
        this.buttonActive = document.querySelector('.buttonActive');
        this.buttonInactive = document.querySelector('.buttonInactive');
    }
    buttonColorChange(buttonClass){
        const buttonAll = document.querySelector('.buttonAll');
        const buttonActive = document.querySelector('.buttonActive');
        const buttonInactive = document.querySelector('.buttonInactive');
        const buttonClicked = document.querySelector('.'+buttonClass);
        let colors = ['colorBG_Neutral0', 'colorBG_Red700'];
        
        buttonAll.classList.remove(this.buttonListColor[this.oppositeColorTheme],this.buttonClickedColor[0]);
        buttonActive.classList.remove(this.buttonListColor[this.oppositeColorTheme], this.buttonClickedColor[0]);
        buttonInactive.classList.remove(this.buttonListColor[this.oppositeColorTheme], this.buttonClickedColor[0]);
        
        buttonAll.classList.add(this.buttonListColor[this.currentColorTheme]);
        buttonActive.classList.add(this.buttonListColor[this.currentColorTheme]);
        buttonInactive.classList.add(this.buttonListColor[this.currentColorTheme]);
        buttonClicked.classList.add(this.buttonClickedColor[0]);
    }
    sectionFillData(dataJSON,dataObject, isActive){
        this.sectionClear();
        this.sectionOutput.dataset.isActive = isActive;
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

        const dataToggle = document.createElement('label');
        const dataToggleInput = document.createElement('input');
        const dataToggleSpan = document.createElement('div');

        divHeader.classList.add('divHeader');
        dataImage.classList.add('dataImage');
        dataHeader.classList.add('dataHeader','fontWeight700', this.fontHeavyColor[this.currentColorTheme]);
        dataHeader.classList.remove(this.fontHeavyColor[this.oppositeColorTheme]);
        dataDesc.classList.add('dataDesc', 'fontSizeSmall', this.fontLightColor[this.currentColorTheme]);
        dataDesc.classList.remove(this.fontHeavyColor[this.oppositeColorTheme]);

        divButtons.classList.add('divButtons');
        dataRemove.classList.remove(this.headerLogoColor[this.oppositeColorTheme], this.fontHeavyColor[this.oppositeColorTheme]);
        dataRemove.classList.add(this.headerLogoColor[this.currentColorTheme], this.fontHeavyColor[this.currentColorTheme]);
        dataRemove.classList.add('dataRemove', 'fontSizeMedium','fontWeight700','borderCircle300'); //'colorBG_Neutral0',
        dataToggle.classList.add('dataToggle', 'borderRemove',  'borderCircle300');  
        //dataToggleInput.classList.add('dataToggleInput','borderCircle300');
        dataToggleSpan.classList.add('dataToggleSpan', 'colorBG_Neutral0','borderCircle300'); // 
        divList.classList.remove(this.headerLogoColor[this.oppositeColorTheme]);
        divList.classList.add('divList','borderCircle',this.headerLogoColor[this.currentColorTheme], 'boxShadow'); // 'colorBG_Neutral0',

        dataImage.src = dataSolo.logo;
        dataHeader.textContent = dataSolo.name;
        dataDesc.textContent = dataSolo.description;
        //dataToggleInput.setAttribute('type','checkbox');
        //dataToggle.textContent = dataSolo.isActive;
        
        dataRemove.textContent = 'Remove';

        if(dataSolo.isActive === true){
            dataToggle.style.justifyContent = 'end';
            dataToggle.classList.add(this.buttonToggleActive[0]);
        } else if(dataSolo.isActive === false){
            dataToggle.style.justifyContent = 'start';
            dataToggle.classList.add(this.buttonToggleActive[1]);
        }
        
        divHeader.appendChild(dataImage);
        divHeader.appendChild(dataHeader);
        divHeader.appendChild(dataDesc);
        divButtons.appendChild(dataRemove);


        //dataToggle.appendChild(dataToggleInput);
        dataToggle.appendChild(dataToggleSpan);

        divButtons.appendChild(dataToggle);
        divList.appendChild(divHeader);
        
        
        divList.appendChild(divButtons);
        this.sectionOutput.appendChild(divList);
        dataRemove.addEventListener('click', (e)=>{
            dataObject.removeData(dataSolo);          
        })
        dataToggle.addEventListener('click', (e)=>{
            dataObject.changeActive(dataSolo);
        });
    }
    sectionClear(){
        while(this.sectionOutput.firstChild){
            this.sectionOutput.removeChild(this.sectionOutput.firstChild);
        }
    };
    changeColorTheme(currentColor){
        if(currentColor == 'light'){
            this.currentColorTheme = 1;
            this.oppositeColorTheme = 0;
            this.buttonMode.dataset.colorTheme = 'dark';
            this.buttonMode.style.backgroundImage = "url(" + this.colorThemeIcon[0]+")";
        } else if(currentColor == 'dark'){
            this.currentColorTheme = 0;
            this.oppositeColorTheme = 1;
            this.buttonMode.dataset.colorTheme = 'light';
            this.buttonMode.style.backgroundImage = "url(" + this.colorThemeIcon[1]+")";
        }

        this.body.classList.add(this.bodyColor[this.currentColorTheme]);
        this.body.classList.remove(this.bodyColor[this.oppositeColorTheme]);

        this.headerLogo.classList.add(this.headerLogoColor[this.currentColorTheme]);
        this.headerLogo.classList.remove(this.headerLogoColor[this.oppositeColorTheme]);

        this.buttonHeader.classList.add(this.fontHeavyColor[this.currentColorTheme]);
        this.buttonHeader.classList.remove(this.fontHeavyColor[this.oppositeColorTheme]);
        this.buttonMode.classList.add(this.buttonModeColor[this.currentColorTheme]);
        this.buttonMode.classList.remove(this.buttonModeColor[this.oppositeColorTheme]);

        this.buttonAll.classList.add(this.buttonListColor[this.currentColorTheme],this.fontHeavyColor[this.currentColorTheme]);
        this.buttonAll.classList.remove(this.buttonListColor[this.oppositeColorTheme], this.fontHeavyColor[this.oppositeColorTheme]);

        this.buttonActive.classList.add(this.buttonListColor[this.currentColorTheme], this.fontHeavyColor[this.currentColorTheme]);
        this.buttonActive.classList.remove(this.buttonListColor[this.oppositeColorTheme], this.fontHeavyColor[this.oppositeColorTheme]);

        this.buttonInactive.classList.add(this.buttonListColor[this.currentColorTheme], this.fontHeavyColor[this.currentColorTheme]);
        this.buttonInactive.classList.remove(this.buttonListColor[this.oppositeColorTheme], this.fontHeavyColor[this.oppositeColorTheme]);
    };
}


export default domObject;