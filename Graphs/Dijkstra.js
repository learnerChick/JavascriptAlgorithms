define(["Queue/PriorityQueueMinHeap"], function(Queue){
    var Dijkstra = function(graph,  start, end){
        var vertices = graph.getVertices();
        // map for each node that has been encountered.
        this.predecessors = {};
        //Costs of shortest paths from s to all nodes encountered.
        this.costs = {}
        this.costs[start] = 0;
        this.queue = new Queue();
        this.queue.enqueue(start, 0);





        this.edgeTo = [];

        for(var i = 0; i < vertices; i++){
            this.distTo[i] = Number.POSITIVE_INFINITY;
        }

        this.queue = new Queue();


    }

    return Dijkstra;
});