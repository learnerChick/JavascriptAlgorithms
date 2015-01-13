/*
    The stack is ordered smaller items in the bottom, larger item on top.

    1) While the first stack is not empty, pop the stack.
    2) While the second stack is not empty, and the item in the second stack peek is smaller than the popped item, pop the second
        stack and add it to the first stack.
    3) When while for second loop breaks, add the popped item into first stack.
*/
function StackSorter(stack){
    this.stack = stack;
}

StackSorter.prototype.sort = function(){
    var s2 = new Stack();
    while(!this.stack.isEmpty()){
        var popped = this.stack.pop();

        while(!s2.isEmpty() && s2.peek() > popped){
            this.stack.push(s2.pop());
        }
        s2.push(popped);
    }

    this.stack = s2;
};

StackSorter.prototype.toString = function(){
    return this.stack.toString();
}
