class Graph{
    constructor(){
        this.vertex={};
    }
    addVertex(key){
        if(!this.vertex[key]) this.vertex[key]=[];
        else throw Error(`Vertex ${key} exists in the graph`)
    }

    addEdge(v1,v2){
        this.vertex[v1].push(v2);
        this.vertex[v2].push(v1);

    }
    deleteVertex(key){
        if(this.vertex[key] )delete this.vertex[key]
    }

    removeEdge(n1,n2){
        if(this.vertex[n1].indexOf(n2)!= -1 && this.vertex[n2].indexOf(n1)!=-1){
            this.vertex[n1].splice(this.vertex[n1].indexOf(n2),1)
            this.vertex[n2].splice(this.vertex[n2].indexOf(n1),1)
        }

    }



}

let myGraph=new Graph()
 myGraph.addVertex("a")
 myGraph.addVertex("b")
 console.log(myGraph);



 myGraph.addEdge("a","b")
 console.log(myGraph);


 myGraph.deleteVertex("b")
 console.log(myGraph);