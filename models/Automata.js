class Automata {
    constructor(){
        this._nodes = [];
    }

    get getNodes(){
        return this._nodes;
    }

    set setNode(value){
        this._nodes.push(value);
    }

    initSearch(data){
        return this.checkValid(data);
    }

    checkValid(data){
        for(let [index, node] of this._nodes.entries()){
            if(node.getData === data.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
}

module.exports = Automata;