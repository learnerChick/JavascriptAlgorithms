function SetOfStacks(){
    this.count = 0;
    this.countOfStacks = 0;
    this.stacks = [];
    this.min = 5;
}

SetOfStacks.prototype.push = function(item){
    if(this.count % 5 === 0){
        var stack = new Stack();
        this.countOfStacks++;
        stack.push(item);
        this.stacks.push(stack);
    }
    else{
        var topStack = this.stacks[this.countOfStacks-1];
        topStack.push(item);
    }
    this.count++;
};

SetOfStacks.prototype.isEmpty = function(){
    return this.count === 0;
};

SetOfStacks.prototype.pop = function(){
    if(this.isEmpty()){
        return null;
    }
    var activeStack = this.stacks[this.countOfStacks-1];

    var popped = activeStack.pop();
    this.count--;

    if(activeStack.isEmpty()){
        this.countOfStacks--;
    }
    return popped;
};

SetOfStacks.prototype.popAt = function(index){
    if(index <= this.countOfStacks-1){
        var activeStack = this.stacks[index];
        if(!activeStack.isEmpty()){
            this.count--;
            return activeStack.pop();
        }
        return null;
    }
    return null;
};
