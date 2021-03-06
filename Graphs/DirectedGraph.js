define(["Vertex"], function(Vertex){
    var Graph = function(v){
        this.vertices = v;
        this.edges = 0;
        this.adj = {};
        this.marked = [];

        for(var i = 0; i < v; i++){
            this.marked[i] = false;
        }
    };


    Graph.prototype.addEdge = function(v, w){
        if(typeof this.adj[v] === "undefined"){
            this.adj[v] = [];
        }

        this.adj[v].push(w);
        this.edges++;
    };

    Graph.prototype.getVertices = function(){
        return this.vertices;
    };

    Graph.prototype.getAdjacent = function(v){
        if(typeof this.adj[v] !== 'undefined'){
            return this.adj[v];
        }
        return [];
    }

    Graph.prototype.showGraph = function(){
        for(var i in this.adj){
            for(var j = 0; j < this.adj[i].length; j++){
                console.log(i, "-->", this.adj[i][j]);
            }
        }
    };

    Graph.prototype.dfs = function(vertex){
        this.marked[vertex] = true;
        console.log("Visited vertex: ", vertex);
        if(typeof this.adj[vertex] !== "undefined"){
            var mat = this.adj[vertex];
            for(var i = 0; i < mat.length; i++){
                if(!this.marked[mat[i]]){
                    this.dfs(mat[i]);
                }
            }
        }
    };

    Graph.prototype.bfs = function(vertex){
        var queue = [];
        this.marked[vertex] = true
        queue.push(vertex);

        while(queue.length > 0){
            var v = queue.shift(); //remove from front
            console.log("Visited vertex: ", symbol);

            if(typeof this.adj[v] !== "undefined"){
                var mat = this.adj[v];
                for(var i = 0; i < mat.length; i++){
                    if(!this.marked[mat[i]]){
                        queue.push(mat[i]);
                        this.marked[mat[i]] = true;
                    }
                }

            }
        }
    };

    return Graph;
});
