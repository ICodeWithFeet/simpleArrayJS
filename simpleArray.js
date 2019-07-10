window.arrayConform = function(array){
	return array[String(0)] == 0;
}


window.getElement = function(array, index){
	if (!arrayConform(array)) {
		index = index - 1;
	}
	return array[index];
}


// getElement(['0','apples','bananas'], 1); // 'apples'
// getElement(['apples','bananas'], 1); // 'apples'
