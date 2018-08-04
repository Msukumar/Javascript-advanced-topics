function ParaValidator(inputValue) {
	var paranthisis = "[]{}()";
  var bracePosition, stack = [];
  for(var i = 0; i<= inputValue.length; i++){
  	bracePosition = paranthisis.indexOf(inputValue[i]);
    if(bracePosition === -1){
    	continue;
    }
    
    if(bracePosition % 2 === 0){
    	stack.push(bracePosition + 1);
    }else {
    	if(stack.pop() !== bracePosition){
      	return false;
      }
    }
  }
  
  return stack.length === 0;
  
}

console.log(ParaValidator("{{([])}}"));
console.log(ParaValidator("{{(}}"));