class dataObject{
    constructor(){
        this.dataJSON = {};
        this.externalJSONExtract();
    }
    test(){
        console.log('test DATA');
    }
    JSONCheck(){
        console.log('JSON CHECK');
        console.log(this.dataJSON);
    }
    async externalJSONExtract(){
        fetch('data/data.json')
            .then((response) =>{
                return response.json();
            })
            .then((response) =>{
                this.dataJSON = response;
            })
    }
}

export default dataObject;