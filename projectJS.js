function Meal(day,mealtype,description)
{
	return {
	day : day,
	mealType : mealtype,
	food : description,
	location : function() {
		return this.mealType + "- " + this.day;
	  }
	}
};


const multiArray = [];
document.getElementById("myButton").addEventListener('click',showTableInWindow);
document.getElementById("AddMeal").addEventListener('click',AddMeal);
document.getElementById("clearPlan").addEventListener('click',ClearPlan);


function AddMeal()
{
	const emailInput = document.getElementById('email');
	if (!emailInput.value) {
		alert('Email is required!')
		return;
	}
	const dayradios = document.querySelectorAll('input[name="weekday"]');
	let selectedDayValue = null;
	dayradios.forEach(radio => {
		if (radio.checked) {
			selectedDayValue = radio.value;
		}
	});
	const mealradios = document.querySelectorAll('input[name="meal"]');
	let selectedMealValue = null;
	mealradios.forEach(radio => {
		if (radio.checked) {
			selectedMealValue = radio.value;
		}
	});

	var newfood = document.getElementById("food").value;
	var newMeal = new Meal(selectedDayValue,selectedMealValue,newfood);
	
	const foundObject = multiArray.find(obj => obj.day === newMeal.day && obj.mealType === newMeal.mealType);
	const containsObject = foundObject !== undefined;
	//alert(containsObject);
	console.log(containsObject);
	if(!containsObject)
	{
		multiArray.push(newMeal);
		console.log(multiArray);
	}
	else
	{
		alert("Meal already added, Please try again!");
	}
	multiArray.forEach(FillTable);
	//console.log(multiArray);
}

function ClearPlan()
{
	const namevalue = document.getElementById('username');
	namevalue.value = '';
	const emailInput = document.getElementById('email');
	emailInput.value = "";
	const goal = document.getElementById('goal');
	goal.value = "";
	var newfood = document.getElementById("food");
	newfood.value = "";
	
	const dayradios = document.querySelectorAll('input[name="weekday"]');
	let selectedDayValue = null;
	dayradios.forEach(radio => {
		if (radio.checked) {
			radio.checked = false;
		}
	});
	const mealradios = document.querySelectorAll('input[name="meal"]');
	let selectedMealValue = null;
	mealradios.forEach(radio => {
		if (radio.checked) {
			radio.checked = false;
		}
	});
	multiArray.forEach(ClearTable);
	multiArray.length = 0;
}
function ClearTable(meal)
{
	var mylocation = meal.mealType + "-" + meal.day;
	//console.log(mylocation);
	var cell = document.getElementById(mylocation);
	//console.log(cell);	
	cell.innerText = "";
}
function FillTable(meal)
{
	console.log(meal);
	var mylocation = meal.mealType + "-" + meal.day;
	//console.log(mylocation);
	var cell = document.getElementById(mylocation);
	//console.log(cell);	
	cell.innerText = meal.food;
}

function showTableInWindow() {

	 const namevalue = document.getElementById('username');
	 const emailInput = document.getElementById('email');
	 const goal = document.getElementById('goal');
	const table = document.querySelector('table[name="myMealTable"]');

	if (table) {
		// Create a new window
		//const newWindow = window.open('_blank','myPop','width=800,height=500,left=200,top=200');
		const newWindow = window.open("","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=800, height=500");
		// Write the table's HTML into the new window
		myText = ('<html><head><title>Table</title><link rel="stylesheet" href="./projectCSS.css"></head><body>');
		myText +=('<p><label>Name:</label><label><b>' + namevalue.value + '</b></label><br>');
		myText +=('<label>Email:</label><label><b>' + emailInput.value + '</b></label><br>');
		myText +=('<label>Week Goal:</label><label><b>' + goal.value + '</b></label><br>');
		myText += ('</p><br>')
		myText += (table.outerHTML);
		myText += ('<br><br> <input type = "button" id = "myPrint" value = "Print" onclick="window.print()">');
		myText += ('<input type = "button" id = "windowClose" value = "Close" onclick="window.close()">');
		myText += ('</body></html>');
		
		newWindow.document.writeln(myText);
		// Close the document to finish loading the content
	    newWindow.document.close();
		newWindow.focus();			
	} 
	else {
		console.error('Table with the specified name not found.');
	}
}





