						
/***********************************************************
                         	Var
************************************************************/
/*   3     #    */

var $username_div = $('<div id="username_div"></div>');
var $password_div = $('<div id="password_div"></div>');
var $confirm_div = $('<div id="confirm_div"></div>');

var $username_span_red = $('<span class="span_red">Your username must be 5-10 characters long</span>');
var $username_span_blue = $('<span class="span_blue">Its within 5-10 characters long</span>');

var $password_span_red = $('<span class="span_red">Your password must be 5-10 characters long</span>');
var $password_span_blue = $('<span class="span_blue">Its within 5-10 characters long</span>');

var $confirm_span_red = $('<span class="span_red">Confirm your password</span>');
var $confirm_span_blue = $('<span class="span_blue">Confirm Complete!</span>');


/***********************************************************
                       	Append + CSS 
************************************************************/
/*   3     #    */


$username_div.append($username_span_red).append($username_span_blue);
$username_span_blue.hide();

$password_div.append($password_span_red).append($password_span_blue);
$password_span_blue.hide();

$confirm_div.append($confirm_span_red).append($confirm_span_blue);
$confirm_span_blue.hide();

$('#p_username').append($username_div);
$('#p_password').append($password_div);
$('#p_confirm').append($confirm_div);

$('#p_confirm span').css('width', '110px');


/***********************************************************
                       Event Function
************************************************************/
/*   3     #    */

$("input").focus(function() {
	$(this).next("div").css("display", "inline").addClass('focus');
});

$("input").focusout(function() {
	$(this).next("div").css("display", "none").removeClass('focus');
});

// Look into .each to simplify the code

$('input').each (function () {
	$(this).on("input", change_color_func);     
});


// $("input[name='username']").change(function () {
// if (4 < $("input[name='username']").val().length && $("input[name='username']").val().length < 11) {
// 		$username_span_red.hide();
// 		$username_span_blue.show();
// 	};
// }).change();


/***********************************************************
                       Call Function
************************************************************/
/*   3     #    */


function change_color_func() {

   if ($('#username_div').hasClass('focus')) {
	   if (4 < $("input[name='username']").val().length && $("input[name='username']").val().length < 11) {
			$username_span_red.hide();
			$username_span_blue.show();
		} else {
			$username_span_blue.hide();
			$username_span_red.show().css("display", "inline");
		};

	} else if ($('#password_div').hasClass('focus')) {
		if (4 < $("input[name='password']").val().length && $("input[name='password']").val().length < 11) {
			$password_span_red.hide();
			$password_span_blue.show();
		    $("input[name='confirm']").removeClass('disable_gray').prop("disabled", false);

		} else {
			$password_span_blue.hide();
			$password_span_red.show().css("display", "inline");
		    $("input[name='confirm']").addClass('disable_gray').prop("disabled", true);

		};

	} else if ($('#confirm_div').hasClass('focus')) {
		if ($("input[name='confirm']").val() === $("input[name='password']").val() && $("input[name='confirm']").val().length !== 0 ) {
			$confirm_span_red.hide();
			$confirm_span_blue.show();
		} else {
			$confirm_span_blue.hide();
			$confirm_span_red.show().css("display", "inline");
		};
	};
};

$('input[type="submit"]').click(function (event) {

	if($username_span_red.css('display') == 'none' && $password_span_red.css('display') == 'none' && $confirm_span_red.css('display') == 'none') {
		
		alert('Done!');

	} else {

		event.preventDefault();
		$('input').next("div").css("display", "inline");
		$('.span_blue').css("display", "none");


		// event.preventDefault();
		// $('p').each(function () {

		// 	if ($('this').next('div').next(".span_red").css('display') == 'inline') { 
		// 	$(this).next("div").next('span').hasClass('span_red').css("display", "inline");
		// 	console.log('man');
			// };
		// });
	};
});

// function change_color_func() {
//    if (4 < $("input[name='username']").val().length && $("input[name='username']").val().length < 11) {
// 		$username_span_red.hide();
// 		$username_span_blue.show();
// 	} else {
// 		$username_span_blue.hide();
// 		$username_span_red.show().css("display", "inline");
// 	};
// };


/***********************************************************
                       	   Test
************************************************************/
/*   3     #    */
	

// $("input[type='submit']").click(function(event) {

// });

// disable confirm input until the password is in the blue.
// submit --> check to see if .hasClass(span_red)
















