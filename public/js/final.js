$(document).ready(function() {
	$('#welcomeFinal1').text("Your ID is: " + userID);
	$('#welcomeFinal2').text("Your ID is: " + userID);
	$(document).on('click', "#final", function(event) {
		//prevent this function to be triggered on click slider
		addRecord('end', 'click', 0);
		window.location.href = base + '/thanks';
	});

	$("#postTaskCheck2").change(function() {
		if(this.checked) {
			$('#finalDiv').css('display','block')
		}
		else{
			$('#finalDiv').css('display','none')
		}
	});

	$("#finalCheck").change(function() {
		if(this.checked) {
			$('#final').css('display','inline-block')
		}
		else{
			$('#final').css('display','none')
		}
	});

});