// Hide Tooltips
$('form span').hide();

////////////////////////////////////////////////
/////////////////  VARIABLES  //////////////////
////////////////////////////////////////////////

var $username = $('#username');
var $password = $('#password');
var $confirmPassword = $('#confirm_password');

var isUsernamePresent = function() {
	return $username.val().length > 0;
};

var isPasswordValid = function() {
	return $password.val().length > 8;
};

var arePasswordsMatching = function() {
	return $password.val() === $confirmPassword.val();
};

var canSubmit = function() {
	return isUsernamePresent() && isPasswordValid() && arePasswordsMatching();
};

var passwordEvent = function() {
	// Find out if password is valid
	if(isPasswordValid()) {
		// Hide hint if valid
		$password.next().hide();
	} else {
		// Else show hint
		$password.next().show();
	}
};

var confirmPasswordEvent = function() {
	// Find out if password and confirmation match
	if(arePasswordsMatching()) {
		// Hide hint if matched
		$confirmPassword.next().hide();
	} else {
		// Else show hint
		$confirmPassword.next().show();
	}

};

var enableSubmitEvent = function() {
	$('#submit').prop('disabled', !canSubmit());
};

////////////////////////////////////////////////
//////////////  EVENT HANDLERS  ////////////////
////////////////////////////////////////////////

// When event happens on password input
$password.on('focus', passwordEvent).on('keyup', passwordEvent).on('keyup', confirmPasswordEvent).on('keyup', enableSubmitEvent);

// When event happens on confirmation input
$confirmPassword.on('focus', confirmPasswordEvent).on('keyup', confirmPasswordEvent).on('keyup', enableSubmitEvent);

enableSubmitEvent();