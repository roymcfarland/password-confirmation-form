// Hide Tooltips
$('form span').hide();

////////////////////////////////////////////////
/////////////////  VARIABLES  //////////////////
////////////////////////////////////////////////

var $password = $('#password');
var $confirmPassword = $('#confirm_password');

// PasswordEvent
var passwordEvent = function() {
	// Find out if password is valid
	if($password.val().length > 8) {
		// Hide hint if valid
		$password.next().hide();
	} else {
		// Else show hint
		$password.next().show();
	}
};

var confirmPasswordEvent = function() {
	// Find out if password and confirmation match
	if($password.val() === $confirmPassword.val()) {
		// Hide hint if matched
		$confirmPassword.next().hide();
	} else {
		// Else show hint
		$confirmPassword.next().show();
	}

};

////////////////////////////////////////////////
//////////////  EVENT HANDLERS  ////////////////
////////////////////////////////////////////////

// When event happens on password input
$password.on('focus', passwordEvent).on('keyup', passwordEvent).on('focus', confirmPasswordEvent).on('keyup', confirmPasswordEvent);

// When event happens on confirmation input
$confirmPassword.on('focus', confirmPasswordEvent).on('keyup', confirmPasswordEvent);
