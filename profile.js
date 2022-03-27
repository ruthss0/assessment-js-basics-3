const colorButton = document.querySelector('#color');
const placeButton = document.querySelector('#place');
const ritualButton = document.querySelector('#ritual');

function colorButtonClick() {
	alert("My favorite color is blue")
}

colorButton.addEventListener("click", colorButtonClick)

function placeButtonClick() {
	alert("My favorite place is Sundance")
}

placeButton.addEventListener("click", placeButtonClick)

function ritualButtonClick() {
	alert("My favorite ritual is take shower and listen to music")
}

ritualButton.addEventListener("click", ritualButtonClick)