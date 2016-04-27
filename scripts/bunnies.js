/********************************
       	  Bunnies
********************************/
/*   3     #    */

var $select = $('<select></select>');
var $button = $('<button>Go!</button>');

$('#bunnies_header nav').append($select).append($button);

$('#bunnies_header nav a').each(function () {
	var $link = $(this);
	var $option = $('<option></option>');

	$option.val($link.attr('href'));
	$option.text($link.text());
	$select.append($option);
});

$button.click(function () {
	window.location = $select.val();
});

