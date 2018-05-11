// DOM Ready =============================================================
$(document).ready(function() {


	var acousticness_Slider = document.getElementById("acousticness_Slider");
	var instrumentalness_Slider = document.getElementById("instrumentalness_Slider");
	var danceability_Slider = document.getElementById("danceability_Slider");
	var valence_Slider = document.getElementById("valence_Slider");
	var energy_Slider = document.getElementById("energy_Slider");
	var tempo_Slider = document.getElementById("tempo_Slider");

	var myTimeout;

	$( ".slidecontainer" ).hover(
		function(){
			console.log( "mouseEnter" );
			var id = $(this).attr('id')
			myTimeout = setTimeout(function() {
				$('#' + id + '_tooltip').css('display', 'block')
			}, 300);
		},
		function(){
			console.log( "mouseLeave" );
			$('#' + this.id + '_tooltip').css('display', 'none');
			clearTimeout(myTimeout);
		}
	);

	var delay=10, setTimeoutConst;
	$('.slidecontainer').hover(function() {
		console.log($(this).attr('id'))
	}, function(){
		clearTimeout(setTimeoutConst );
	});



	acousticness_Slider.oninput = function() {
		updateSlider("acousticness", this.value / 100.0, this.value);
	};
	instrumentalness_Slider.oninput = function() {
		updateSlider("instrumentalness", parseInt(this.value), this.value);
	};
	danceability_Slider.oninput = function() {
		updateSlider("danceability", this.value / 100.0, this.value);
	};
	valence_Slider.oninput = function() {
		updateSlider("valence", this.value / 100.0, this.value);
	};
	energy_Slider.oninput = function() {
		updateSlider("energy", this.value / 100.0, this.value);
	};

	tempo_Slider.oninput = function() {
		updateSlider("tempo", this.value / 100.0, this.value);
	};


	$("input")
		.mousedown(function () {
			addRecord(this.id, 'click drag', this.value);
		})
		.mouseup(function () {
			addRecord(this.id, 'click drop', this.value);
			if(selectedArtists.length !== 0){
				flashButton(true)
			}
		})
});

function updateSlider(id, targetValue, value){
	var pixelAdjustment = -0.25* value + 12.5;
	var percentageAdjustment = pixelAdjustment / 5.76;
	var pixelValue = parseInt(value) + percentageAdjustment;
	var sliderId = '#' + id + '_Slider';
	var background = 'linear-gradient(90deg, #57ab68 ' + pixelValue + '%, rgba(53, 53, 53, 1) ' + pixelValue + '%)'
	$(sliderId).css('background', background);
	var output = document.getElementById(id);
	output.innerHTML = id + ": " + value;
	targetValues[id] = targetValue;
}
