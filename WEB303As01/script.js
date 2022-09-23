/*
	WEB 303 Assignment 1 - jQuery
	{Nirmeet Pansuriya}
*/
$(document).ready(function(){

	$(':input').on('keyup',function(){
	
		let salary = $('#yearly-salary').val();
		let percent= $('#percent').val();
		var amount = parseFloat((salary*percent)/100 .toFixed(2));

		console.log(salary);
		console.log(percent);
		console.log($('span#amount').text('$' + amount));
		
	});

});

