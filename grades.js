console.log("hey");
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
console.log(scores);

var aList = [];
var bList = [];
var cList = [];
var dList = [];
var FList = [];

 for (var i = 0; i < scores.length; i++){


	if ((scores[i] > 90) && (scores[i] < 101)) {
		aList.push(scores[i]);
	
	}

	else if ((scores[i] > 80) && (scores[i] < 91)) {
		bList.push(scores[i]);
		
	}

	else if ((scores[i] > 70) && (scores[i] < 81)) {
		cList.push(scores[i]);
		
	}
	else if ((scores[i] > 60) && (scores[i] < 71)) {
		dList.push(scores[i]);
		
	}
	
	else  {
		FList.push(scores[i]);
		
		}

};



console.log("aList", aList);
console.log("bList", bList);
console.log("cList", cList);
console.log("dList", dList);
console.log("FList", FList);

aList.sort(function(a,b){return b-a});
console.log("highest grade", aList[0]);


FList.sort(function(a,b){return a-b});
console.log("lowest grade", FList[0])






