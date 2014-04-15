function validExpression(expr){
	var stack = new Stack();
	var currPos = 0;

	if(expr.length === 0){
		return false;
	}
	else if(expr.length === 1){
		return true;
	}

	//make an assumption that all characters are separated nicely with a space
	expr = expr.split(" ");

	for(var i = 0; i < expr.length; i++){
		var ch = expr[i];
		if(ch === "("){
			stack.push(ch);
			//keep track of when the first anomaly occurs
			currPos = i;
		}

		else if(ch === ")"){
			if(!stack.isEmpty()){
				var popped = stack.pop();
				if(popped !== "("){
					//if this doesn't match, we know there is an issue, so return i right away
					return currPos;
				}
			}
			else{
				//this is bad, closing tag appears without opening
				return i;
			}
		}
	}

	if(stack.length() > 0){
		return currPos;
	}

	return -1;

}