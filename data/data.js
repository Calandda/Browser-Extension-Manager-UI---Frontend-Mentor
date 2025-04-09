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
    getData(){
        return(this.dataJSON);
    }
    getDataSpecific(status){
        if(status === 'Active'){
            return(this.dataJSON.filter(this.filterActive));
        } else if(status === 'Inactive'){
            return(this.dataJSON.filter(this.filterInactive));
        } else {
            return(this.getData());
        }
    }
    filterActive(extention){
        return(extention.isActive === true);
    };
    filterInactive(extention){
        return(extention.isActive === false);
    }
}

export default dataObject;