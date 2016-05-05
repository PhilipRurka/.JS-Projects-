/********************************
       	    Cats Var
********************************/
/*   3     #    */

var $main_button = $('<button id="main_button">GO!</button>');
var $select = $('<select id="cats_select"></select>');
var $option_check = $('<option value="check">Check</option>');
var $option_image = $('<option value="image">Image</option>');
var $option_direction = $('<option value="direction">+ -</option>');

//These 'var' are for the content of each type of page lay out.
var shopping_list = {
	clothing : [],
	hygiene : [],
	electronics : []
}
var zero_count = 0;
var count = 0;
// var 

// var
// var
// var 
// var 

// var
// var
// var 
// var 
/********************************
       	   Functions
********************************/
/*   3     #    */

//Show the appropreate lay out.

$('.add').each(function () {
	$(this).click (function (event) {
		event.preventDefault();
		count ++;
		$(this).next().val(count);

		console.log('Add one!')
	});
});

$('.remove').each(function () {
	$(this).click (function (event) {
		event.preventDefault();
		previousSibling.

		console.log('Remove one!')
	});
});


function check_func () {
	console.log('Check me out!');
}

function image_func () {
	console.log('Images Yo!');
}

function direction_func () {
	console.log('Directions?');
}

/********************************
       	     Append
********************************/
/*   3     #    */

//Append each 'var' appropreately then '.hide()'.

$select.append($option_check).append($option_image).append($option_direction);
$('#select_div').append($select).append($main_button);

/********************************
       Events + Conditions
********************************/
/*   3     #    */

$main_button.click (function (event) {
	event.preventDefault();
	if ($select.val() === 'check') {
		check_func();
	} else if ($select.val() === 'image') {
		image_func();
	}	else {
		direction_func();
	}
});




