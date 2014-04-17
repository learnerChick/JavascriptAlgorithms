/*
    Implement a stack which provides an efficient get minimum function along with regular push and pop functionality.

    The push, pop, and findMin has O(1) complexity.  Space required is O(n)
*/


function MinimumStack(){
    this.stack = new Stack();
    this.minStack = new Stack();
}

MinimumStack.prototype.push = function(item){
    //if stack is empty, initialize both with item
    if(this.stack.isEmpty()){
        this.stack.push(item);
        this.minStack.push(item);
    }
    else{
        /*  If item to be added is larger, then we add the current minStack's top item as the paired min.
            This way, each pair in the corresponding stack has a min. 
        */
        if(this.minStack.peek() > item){
            this.minStack.push(item);
        }
        else{
            this.minStack.push(this.minStack.peek());
        }
        this.stack.push(item);
    }
}

MinimumStack.prototype.pop = function(){
    if(!this.stack.isEmpty()){
        var popped = this.stack.pop();
        this.minStack.pop();
    
        return popped;
    }

    return null;
}

MinimumStack.prototype.peek = function(){
    return this.stack.peek();
}

MinimumStack.prototype.isEmpty = function(){
    return this.stack.isEmpty();
}

MinimumStack.prototype.getMinimum = function(){
    return this.minStack.peek();
}