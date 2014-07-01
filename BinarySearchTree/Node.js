define(function(){
    var Node = function(element){
        this.element = element;
        this.left = null;
        this.right = null;
        this.count = 0;
    }

    return Node;
});