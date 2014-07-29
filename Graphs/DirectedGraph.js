define(function(){
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
    }

    Graph.prototype.showGraph = function(){
        for(var i in this.adj){
            for(var j = 0; j < this.adj[i].length; j++){
                console.log(i, "-->", this.adj[i][j])
            }
        }
    }

    Graph.prototype.dfs = function(vertex){
        this.marked[vertex] = true;
        var self = this;
         console.log("Visited vertex: ", vertex);
        if(typeof this.adj[vertex] !== "undefined"){
            this.adj[vertex].forEach(function(ver){
                if(!self.marked[ver]){
                    self.dfs(ver);
                }
            });
        }
    }

    return Graph;
});
