function dice(){
    
	var dice1= Math.floor(Math.random() *6) + 1;
	var dice2= Math.floor(Math.random() *6) + 1;
	var totaldie= dice1 + dice2;
	
		if(totaldie== 7||totaldie==11){
		document.getElementById("diceOutput").innerHTML="You rolled " + totaldie +".You win!";
		}
        else if(totaldie== 2||totaldie==3||totaldie==12){
	   	document.getElementById("diceOutput").innerHTML="You rolled " + totaldie +".You Lose!";
	   		}
	   	else {
    	document.getElementById("diceOutput").innerHTML="You rolled " + totaldie +".Roll again!";
	   	}
	   		
	}
