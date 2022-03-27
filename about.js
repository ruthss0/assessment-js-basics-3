function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form submitted successfully!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const imageElement = document.querySelector('img');

function handleMouseOver(event) {
	alert("You are so smart!")
}

imageElement.addEventListener("mouseover", handleMouseOver)