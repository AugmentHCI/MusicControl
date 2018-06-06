// Based on http://bl.ocks.org/jfreels/6871643
// http://bl.ocks.org/weiglemc/6185069

$(document).ready(function() {
	//Get the values of the Axes
	var xAxisValue = $('#x option:selected').text().toLowerCase();
	$('#x').change(function () {
		xChange($('#x option:selected').text().toLowerCase())
	});
	var yAxisValue = $('#y option:selected').text().toLowerCase();
	$('#y').change(function () {
		yChange($('#y option:selected').text().toLowerCase())
	});

	$("#xSelected").click(function () {
		$(this).addClass("selected");
		$('#xSelections').removeClass('hidden')
	});

	$(document).ready(function() {
		$('select').niceSelect();
	});


	// add the graph canvas to the body of the webpage
	var svg = d3.select("#chart").append("svg")
		.attr('height',h + margin.top + margin.bottom)
		.attr('width',w + margin.left + margin.right)
		.attr('id', 'svgScatter')
		.append('g')
		.attr('transform','translate(' + margin.left + ',' + margin.top + ')');

	// X-axis
	svg.append('g')
		.attr('class','axis')
		.attr('id','xAxis')
		.attr('transform', 'translate(0,' + h + ')')
		.call(xAxis)
		// .append('text') // X-axis Label
		// .attr('id','xAxisLabel')
		// .attr('y',-10)
		// .attr('x',w)
		// .attr('dy','.71em')
		// .style('text-anchor','end')
		// .style('fill','white')
		// .text(xAxisValue)
		;
// Y-axis
	svg.append('g')
		.attr('class','axis')
		.attr('id','yAxis')
		.call(yAxis)
		.append('text') // y-axis Label
		// .attr('id', 'yAxisLabel')
		// .attr('transform','rotate(-90)')
		// .attr('x',0)
		// .attr('y',5)
		// .attr('dy','.71em')
		// .style('text-anchor','end')
		// .text(yAxisValue)
		;

});

var margin = { top: 20, right: 50, bottom: 50, left: 50 };
var h = 700 - margin.top - margin.bottom;
var w = 700 - margin.left - margin.right;


var xScale = d3.scale.linear()
	.domain([0,100])
	.range([0,w]);

var yScale = d3.scale.linear()
	.domain([0,100])
	.range([h,0]);



// X-axis
var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient('bottom');

// Y-axis
var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient('left');




function yChange(value) {
	yScale // change the yScale
		.domain([0,100]);
	yAxis.scale(yScale) // change the yScale
	d3.select('#yAxis') // redraw the yAxis
		.transition().duration(100)
		.call(yAxis);
	d3.select('#yAxisLabel') // change the yAxisLabel
		.text(value);
	d3.selectAll('circle') // move the circles
		.transition().duration(1000)
		.attr('cy',function (d) { return yScale(d[value]) + margin.top })
}

function xChange(value) {
	xScale // change the xScale
		.domain([0,100]);
	xAxis.scale(xScale); // change the xScale
	d3.select('#xAxis') // redraw the xAxis
		.transition().duration(1000)
		.call(xAxis)
	d3.select('#xAxisLabel') // change the xAxisLabel
		.transition().duration(1000)
		.text(value)
	d3.selectAll('circle') // move the circles
		.transition().duration(1000)
		// .delay(function (d,i) { return i*100})
		.attr('cx',function (d) { return xScale(d[value]) + margin.left})
}

function updateScatterplot(data){
	var xAxisValue = $('#x option:selected').text().toLowerCase();
	var yAxisValue = $('#y option:selected').text().toLowerCase();

	// change string (from CSV) into number format
	data.forEach(function (d) {
		d.energy = +d.energy;
		d.instrumentalness = +d.instrumentalness;
		d.acousticness = +d.acousticness;
		d.tempo = +d.tempo;
		d.valence = +d.valence;
		d.danceability = +d.danceability
	});
	// data.forEach(function (d) {
	// 	console.log(d.similarArtist + " + " + d.title)
	// })
	var svg = d3.select('#svgScatter');
	var circles = svg.selectAll("circle")
		.data(data, function(d) {
			return d._id; });

	//update
	circles
		.attr('class', "update");

	//New data
	circles
		.enter()
		.append('circle')
		.attr('id', function (d) { return 'circle_' + d.trackId})
		.attr('cx',function (d) {return xScale(d[xAxisValue]) + margin.left })
		.attr('cy',function (d) {return yScale(d[yAxisValue]) + margin.top })
		.attr('r','10')
		.attr('class', "new")
		.on("mouseover", function (d) {
			console.log("title: " + d.title + " similarArtist: " + d.similarArtist);
			$('#permanent_' + d.trackId).css('background-color', "white")
		})
		.on("mouseout", function (d) {
			$('#permanent_' + d.trackId).css('background-color', "#4a4a4a")
		})
		.transition().duration(100)
		.attr('fill',function (d) {return getArtistColor(d.similarArtist) })
		.attr('stroke','white')
		.attr('stroke-width',1);




	//data not represented anymore
	circles
		.exit()
		.attr('class', "remove")

	//Remove all old songs
	d3.selectAll(".remove")
		.transition().duration(1000)
		.attr('fill',"grey")
		.attr('opacity',0.5)
		.attr('cx',function (d) {return xScale(d[xAxisValue]) + margin.left})
		.attr('cy',function () { return h+margin.top + margin.bottom + 20})
		.remove()

};


