/*
  Given a directed graph, design an algorithm to find out whether there is a route
  between two nodes.
*/

define(["../Queue/Queue.RequireJS"], function(Queue){
  function hasPath(graph, v, w){
    return pathExists(graph, v, w);
  }

  function pathExists(graph, begin, end){
    var q = new Queue(),
      visited = [];
    q.enqueue(begin);
    visited.push(begin);

    while(!q.isEmpty()){
      var current = q.dequeue();

      var adj = graph.getAdjacent(current);
      for(var i = 0; i < adj.length; i++){
        if(visited.indexOf(adj[i]) < 0){
          if(adj[i] === end){
            return true;
          }

          q.enqueue(adj[i]);
          visited.push(adj[i]);
        }
      }
    }
    return false;
  }

  return hasPath;
});
