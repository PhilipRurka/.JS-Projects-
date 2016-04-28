/********************************
       	  Goat General
********************************/
/*   3     #    */

var $overlay = $('<div id="overlay" class="page_1"></div>');
var $ul = $('<ul></ul>');
var $li = $('<li></li>');
var $h10 = $('<h10></h10>');
var $form = $('<form></form>');
var $input = $('<input type="text" id="answer">');
var $button = $('<button id="button">Submit</button>');
var $page = $('<p></p>');
var $para =$('<p></p>');
var counter = 0;
var tf_answer;
var tf = true;
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

$button.click(function (event) {
	event.preventDefault();
	answer = $input.val();

	if (answer === '0.5' || answer === '0.5$' || answer === '.5' || answer === '.5$' && counter === 0) {
		tf_answer = true;
		right_answer();

	} else if (answer === '5' || answer === '5min' || answer === '5 min' || answer === '5minut' || answer == '5minutes' && counter === 1 || answer === '5 minut' || answer === '5 minutes' && counter === 1) {
		tf_answer = true;
		right_answer();

	} else if (answer === '47' || answer === 'day 47' || answer === 'day47' || answer === '47day' || answer === '47 day' || answer === '47days' || answer === '47 days' && counter === 2) {
		tf_answer = true;
		right_answer();

	} else {
		tf_answer = false;
		right_answer();
	}

});

function right_answer() {
	if (tf_answer) {
		$para.text('Well Done!');
		tf = true;
	} else {
		$para.text('Wrong. Try Again!')
	}

	$form.append($para);
};

$('.dot').click(function () {
	if (tf) {	
		if(counter === 0) {

			$input.val('');
			$para.text('');
			page = "A bat and a ball cost one dollar and ten cents. The bat cost one dollar more then the ball. How much does the ball cost?";
			$('section').hide(200);
			$page.show(200);
			$('#overlay').show('200');
			$(this).removeClass('goat_center').addClass('goat_top_left').show(200);
			counter ++;
			tf = false;
			
		} else if (counter === 1) {
		
			$input.val('');
			$para.text('');
			page = "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?";
			$(this).hide(200);
			$overlay.hide(200);
			setTimeout(function () {
				$overlay.removeClass('page_1').addClass('page_2');
				$('.dot').removeClass('goat_top_left').addClass('goat_top_right').show(200);
				$overlay.show('200');
			}, 200);
			counter ++;
			tf = false;
			

		} else if (counter === 2) {

			$input.val('');
			$para.text('');
			page = "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take to cover half the lake?";
			$(this).hide(200);
			$overlay.hide(200);
			setTimeout(function () {
				$overlay.removeClass('page_2').addClass('page_3');
				$('.dot').removeClass('goat_top_right').addClass('goat_bottom_right').show(200);
				$overlay.show('slow');
			}, 200);
			counter ++;
			tf = false;
			
		} else if (counter === 3) {

			$para.text('');
			page = "Information.";
			$(this).hide(200);
			$overlay.hide(200);
			setTimeout(function () {
				$overlay.removeClass('page_4').addClass('page_4');
				$('.dot').removeClass('goat_bottom_right').addClass('goat_bottom_left').show(200);
				$form.hide();
				$overlay.show('slow');
		}, 200);
			counter ++;
		} else {
			$(this).hide(200);
			$overlay.hide(200);
			
			setTimeout(function () {
				$('.dot').removeClass('goat_bottom_left').addClass('goat_center');
				$('.dot').show(200);
				$form.show();
				$('section').show();
				$page.hide();
			}, 200);
			counter = 0;
		}
		setTimeout(function () {
			$page.text(page);
			$h10.text('Page ' + counter);
		}, 200)
	}
});
































