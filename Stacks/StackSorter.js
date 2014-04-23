/*
    The stack is ordered smaller items in the bottom, larger item on top.

    1) Recursively pop the stack until empty.
    2) Then, try to put the popped number with another recursive function called insertSorted.
    3) In insertion part, if stack is empty, just push the number into the stack and return.
    4) If not empty, compare the top of stack with number. If number is less than peek(),
       then pop the stack and try calling the insert method again.  Finally push the top back.
       If number is greater than peek(), then push the number into the stack.
*/
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