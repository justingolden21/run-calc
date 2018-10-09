function calc() {
	
	let seconds = parseFloat($('#hr').val() )*3600 + parseFloat($('#min').val() )*60 + parseFloat($('#sec').val() );
	let miles = parseFloat($('#mi').val() );

	if(miles==0 || isNaN(miles) ) {
		$('#result').html('Miles cannot be zero');
		$('#result').removeClass('bg-info');
		$('#result').removeClass('bg-success');
		$('#result').addClass('bg-warning');
		return;
	} else if(seconds==0 || isNaN(seconds) ) {
		$('#result').html('Time cannot be zero');
		$('#result').removeClass('bg-info');
		$('#result').removeClass('bg-success');
		$('#result').addClass('bg-warning');
		return;
	}

	$('#result').removeClass('bg-warning');
	$('#result').removeClass('bg-info');
	$('#result').addClass('bg-success');
		
	let secPerMi = seconds / miles;
	let hoursResult = secPerMi / 3600;
	let minsResult  = (hoursResult - Math.floor(hoursResult) ) * 60;
	let secsResult  = (minsResult -  Math.floor(minsResult)  ) * 60;	
	
	hoursResult = Math.floor(hoursResult);
	minsResult =  Math.floor(minsResult);
	secsResult =  Math.round(secsResult*100)/100;
	consoleText = 'You ran a <b>' + (hoursResult ? hoursResult + ' hour ' : '') + (minsResult ? minsResult + ' min ' : '') + (secsResult ? secsResult + ' sec' : '') + ' </b> mile';
	$('#result').html(consoleText);
	$('#consolePara').after(consoleText + "<br>");
}

$(function() {
	$('input').on('click', function() {
		$(this).select();
	});
	$('#calcButton').on('click', calc);
	
	$('#hr').val('1');
	$('#mi').val('1');


	$('#hr').select();
});