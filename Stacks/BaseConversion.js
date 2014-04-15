function baseConversion(number, base){
	var conversion = new Stack();
	var convertedString =  "";

	while(number > 0){
		var mod = number % base;
		conversion.push(mod);
		number = Math.floor(number/base); 
	}

	while(!conversion.isEmpty()){
		convertedString = convertedString + conversion.pop();
	}

	return convertedString;
}