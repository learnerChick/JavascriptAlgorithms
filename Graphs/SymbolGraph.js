define(["Vertex"], function(Vertex){
    var Graph = function(v){
        //symbols dictionary will allow us to hold vertices that are strings instead of
        this.symbols = {};
        this.vertices = v;
        this.edges = 0;
        this.adj = {};
        this.marked = [];
        this.count = 0;

        for(var i = 0; i < v; i++){
            this.marked[i] = false;
        }
    };

    Graph.prototype.getSymbolicLink = function(symbol){
        var link = null;
        if(typeof this.symbols[symbol] === "undefined"){
            this.symbols[symbol] = this.count;
            this.count++;
            link = this.symbols[symbol];
        }
        else{
            link = this.symbols[symbol];
        }
        return link;
    };

    Graph.prototype.getLinkSymbol = function(link){
        for(i in this.symbols){
            if(this.symbols[i] === link){
                return i;
            }
        }
    };

    Graph.prototype.addEdge = function(v, w){
        var sv = this.getSymbolicLink(v);
        var sw = this.getSymbolicLink(w);

        if(typeof this.adj[sv] === "undefined"){
            this.adj[sv] = [];
        }

        this.adj[sv].push(sw);
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
                console.log(this.getLinkSymbol(parseInt(i, 10)), "-->", this.getLinkSymbol(this.adj[i][j]));
            }
        }
    };

    Graph.prototype.dfs = function(vertex){
        this.marked[vertex] = true;
        var symbol = this.getLinkSymbol(vertex);
        console.log("Visited vertex: ", symbol);
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
            var symbol = this.getLinkSymbol(v);
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
