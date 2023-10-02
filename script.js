function validate() {
    var cus__name = document.getElementById("cus__name").value;
    var loyalty__no = document.getElementById("loyalty__no").value;
    var phone__no = document.getElementById("phone__no").value;
    var email__add = document.getElementById("email__add").value;
    var people__no = document.getElementById("people__no").value;
    var date__time = document.getElementById("date__time").value;
    var special__req = document.getElementById("special__req").value;
    var credit__info = document.getElementById("credit__info").value;
    var dietary__note = document.getElementById("dietary__note").value;
    var occasion__note = document.getElementById("occasion__note").value;
  
    var errMsg = "";
    var submitMsg = "You Booking Order is Sumitted";
    var result = true;
  
    /* Rule 1, check if each field is required */
    if (cus__name == "") {
      errMsg += "Customer Name cannot be empty.\n";
    }
    if (phone__no == "") {
      errMsg += "Phone Number cannot be empty.\n";
    }
    if (email__add == "") {
      errMsg += "Email address cannot be empty.\n";
    }
    if (people__no == "") {
      errMsg += "Number of People in the Booking cannot be empty.\n";
    }
    if (date__time == "") {
      errMsg += "Date and Time of the Booking cannot be empty.\n";
    }
    if (credit__info == "") {
      errMsg += "Credit Card Information cannot be empty.\n";
    }
  
    /* Rule 2, check if each field got its constraints */
    var pattern_0a = /^[0-9a-zA-Z]+$/;
    var pattern_09 = /^[0-9]+$/;
  
    if (!cus__name.match(pattern_0a)) {
      errMsg += "Customer Name contains symbols.\n";
    }
  
    if (!loyalty__no.match(pattern_09)) {
      errMsg += "Loyalty Number contain others than numbers.\n";
    }
  
    if (!phone__no.match(pattern_09)) {
      errMsg += "Phone Number contain others than numbers.\n";
    }
  
    if (email__add.indexOf("@") < 0) {
      errMsg += "Email Address must contain an @ symbol.\n";
    }
  
    if (!credit__info.match(pattern_09)) {
      errMsg += "Credit Card Number contain others than numbers.\n";
    }
  
    if (!special__req.match(pattern_0a)) {
      errMsg += "Special Request contains symbols.\n";
    }
  
    if (!dietary__note.match(pattern_0a)) {
      errMsg += "Dietary Note contains symbols.\n";
    }
  
    if (!occasion__note.match(pattern_0a)) {
      errMsg += "Occasion Note contains symbols.\n";
    }
  
    /* Throw an error if there is a validation error */
    if (errMsg != "") {
      alert (errMsg);
      result = false;
    } else {
      alert (submitMsg);
    }

    return result;
  }
  
/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
  var regForm = document.getElementById("regform");

	/* assigns functions to corresponding events */
  regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;
  