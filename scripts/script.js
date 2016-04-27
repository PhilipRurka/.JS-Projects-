/********************************
       	  Goat General
********************************/
/*   3     #    */

var $overlay = $('<div id="overlay"></div>');
var $ul = $('<ul></ul>');
var $li = $('<li></li>');
var $h10 = $('<h10></h10>');
var $form = $('<form></form>');
var $input = $('<input type="text" id="answer">');
var $button = $('<button id="button">Submit</button>');
var $page = $('<p></p>');
var counter = 0;
var answer;
var page;

$ul.append($li);
$li.append($h10);
$h10.text('Page ' + counter);
$form.append($input).append($button);
$('.container').append($overlay);
$overlay.hide();

/********************************
           Goat Page 1
********************************/
/*   3     #    */



$ul.append($page);
$page.hide();


/********************************
           Final Append
********************************/
/*   3     #    */


$overlay.append($ul).append($page).append($form);



/********************************
           Goat Function
********************************/
/*   3     #    */

document.getElementById('button').onclick = function() {
	answer = document.getElementById('answer').innerHTML;
	console.log('answer');
	};

$('.dot').click(function () {
	if(counter === 0) {

		page = "A bat and a ball cost one dollar and ten cents. The bat cost one dollar more then the ball. How much does the ball cost?";
		$('section').hide(200);
		$page.show(200);
		$('#overlay').show('200');
		$(this).removeClass('goat_center').addClass('goat_top_left').show(200);	
		counter ++;
		
	} else if (counter === 1) {
	
		page = "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?";
		$(this).hide(500);
		$overlay.hide(500);
		$(this).removeClass('goat_top_left').addClass('goat_top_right').show(200);
		$overlay.show('500');



		counter ++;
	} else if (counter === 2) {

		page = "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take to cover half the lake?";
		$(this).hide(200);
		$overlay.hide(200);
		$(this).removeClass('goat_top_right').addClass('goat_bottom_right').show(200);
		$overlay.show('slow');

		counter ++;
	} else if (counter === 3) {

		page = "Information.";
		$(this).hide(200);
		$overlay.hide(200);
		$(this).removeClass('goat_bottom_right').addClass('goat_bottom_left').show(200);
		$form.hide();
		$('#overlay').show('slow');

		counter ++;
	} else {
		$(this).hide(200);
		$overlay.hide(200);
		$(this).removeClass('goat_bottom_left').addClass('goat_center').show(200);
		$form.show();
		$('section').show();
		$page.hide();

		counter = 0;
	}
	$page.text(page);
	$h10.text('Page ' + counter);
	});
































