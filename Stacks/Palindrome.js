function isPalindrome(str){
	if(str.length === 0){
		return false;
	}
	else if(str.length === 1){
		return true;
	}

	var stack = new Stack();
	var reversed = "";

	for(var i = 0; i < str.length; i++){
		stack.push(str[i]);
	}

	while(!stack.isEmpty()){
		reversed = reversed + stack.pop();
	}

	if(reversed === str){
		return true;
	}
	return false;
}