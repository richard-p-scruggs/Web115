    // JavaScript code for form validation
	// Prevent form from submitting
window.addEventListener("submit",CapturedSubmit);

		
function CapturedSubmit()
{
	// Retrieve the input field value
	let currentInput = document.getElementById("inputField");
	var textValue = currentInput.form['inputField'].value;
      // Regular expression pattern for alphanumeric input
	const pattern = /^[a-zA-Z0-9]+$/;    
    // Check if the input value matches the pattern
    let isValid = pattern.test(textValue);
    // Valid input: display confirmation and submit the form
	if(isValid)
    {
		alert("Input is Valid!");
		form.submit();
	}
	// Invalid input: display error message
	else{
		alert("Input contains non alphanumeric characters");
	}
	//alert(isValid);
}