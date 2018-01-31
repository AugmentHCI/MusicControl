//require mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;


module.exports = mongoose.model('Interactions', new Schema({
	userName: String,
	date: Date,
	element: String,
	action: String,
	value: Number
}));
