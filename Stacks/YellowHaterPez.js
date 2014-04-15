function yellowHaterPez(existingPez){
	var noYellowPez  = new Stack();
	var originalOrderPez = new Stack();

	//remove yellows
	while(!existingPez.isEmpty()){
		if(existingPez.peek() !== "Y"){
			noYellowPez.push(existingPez.pop());	
		}
		else{
			existingPez.pop();
		}
	}

	//now add to new pez dispenser to retain order
	while(!noYellowPez.isEmpty()){
		originalOrderPez.push(noYellowPez.pop());
	}

	return originalOrderPez;

}