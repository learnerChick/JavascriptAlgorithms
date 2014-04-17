
function StackSorter(stack){
    this.stack = stack;
}

StackSorter.prototype.sort = function(){
    if(!this.stack.isEmpty()){
        var top = this.stack.pop();
        this.sort();
        this.insertSorted(top);
    }
}

StackSorter.prototype.insertSorted = function(number){
    if(this.stack.isEmpty()){
        this.stack.push(number);
        return;
    }

    if(number < this.stack.peek()){
        var top = this.stack.pop();
        this.insertSorted(number);
        this.stack.push(top);
    }
    else{
        this.stack.push(number);
    }
    
}

StackSorter.prototype.toString = function(){
    return this.stack.toString();
}