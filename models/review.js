const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	rating: {type: Number, required: true},
	movieName: {type: String, required: true},
	title: {type: String, required: true},
	body: {type: String, required: true}
});

const review = mongoose.model('review', reviewSchema);
module.exports = review;