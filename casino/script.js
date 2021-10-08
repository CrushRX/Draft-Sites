function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var i; 

function resultCrup(i){
	var chetnost = chetnostFunc(i);
	var range = rangeFunc(i);
	var column = columnFunc(i);
	var dyzhina = dyzhinaFunc(i);
	alert(`${i}` + ", " + `${result[i-1][1]}` + ", "+  `${chetnost}` + ", " + `${range}`
		+ ", " + `${column}` + ", " + `${dyzhina}`)
}

function chetnostFunc(i){
	if (i%2 == 0) {
		return "четное"
	} else {
		return "нечетное"
	}
}

function rangeFunc(i){
	if(i>= 1 && i <= 18){
		return "от 1 до 18";
	} else if (i >= 19 && i <= 36){
		return "от 19 до 36"
	}
}

function columnFunc(i){
	if(i==1 || (i-1)%3==0){
		return "первая колонка"
	} else if((i+1)%3==0){
		return "вторая колонка"
	} else if(i%3==0){
		return "третья колонка"
	}
}


function dyzhinaFunc(i){
	if(i >= 1 && i <= 12){
		return "первая дюжина";
	} else if(i >= 13 && i <= 24){
		return "вторая дюжина"
	} else if(i >= 25 && i <= 34){
		return "третья дюжина"
	}
}

let result =	[[1 , "красное"], [2 , "черное"], [3, "красное"], [4, "черное"], [5, "красное"],
				[6, "черное"], [7, "красное"], [8, "черное"], [9, "красное"], [10, "черное"],
				[11, "черное"], [12, "красное"], [13, "черное"], [14, "красное"], [15, "черное"],
				[16, "красное"], [17, "черное"], [18, "красное"], [19, "красное"], [20, "черное"],
				[21, "красное"], [22, "черное"], [23, "красное"], [24, "черное"], [25, "красное"],
				[26, "черное"], [27, "красное"], [28, "черное"], [29, "черное"], [30, "красное"],
				[31, "черное"], [32, "красное"], [33, "черное"], [34, "красное"], [35, "черное"]
				[36, "красное"]]

while (confirm("Начать игру?") == true){
	switch(i = getRandomInt(0,36)){
			case 0: alert("Zero"); break;
			case i: resultCrup(i); break;
	}
}