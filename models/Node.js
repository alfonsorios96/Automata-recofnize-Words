class Node {
    constructor(){
        this._data = null;
        this._conections = [];
        this._id = null;
    }

    get getData(){
        return this._data;
    }

    set setData(value){
        this._data = value.toLowerCase();
    }

    get getConections(){
        return this._conections
    }
    
    set setConection(value){
        this._conections.push(value);
    }

    get getId(){
        return this._id;
    }

    set setId(value){
        this._id = value
    }
}

module.exports = Node;