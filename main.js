////////////////////////////////////////////////
/////////////  GLOBAL VARIABLES  ///////////////
////////////////////////////////////////////////

// Hide Tooltips
$('form span').hide();

// PasswordEvent
var passwordEvent = function() {
	// Find out if password is valid
	if($(this).val().length > 8) {
		// Hide hint if valid
		$(this).next().hide();
	} else {
		// Else show hint
		$(this).next().show();
	}
};

////////////////////////////////////////////////
//////////////  EVENT HANDLERS  ////////////////
////////////////////////////////////////////////

// When event happens on password input
$('#password').on('focus', passwordEvent).on('keyup', passwordEvent);


// When event happens on confirmation input
	// Find out if password and confirmation match
		// Hide hint if matched
		// Else show hint