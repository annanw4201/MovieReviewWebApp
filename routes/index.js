var express = require('express');
var router = express.Router();
var Review = require('../models/review');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	Review.find({}, (err, reviews) => {
		if (err) {
			console.log(err);
		}
		res.render('reviews/index', {reviews: reviews});
	});
});

// get post new review page
router.get('/reviews/newReview', function (req, res, next) {
	res.render('reviews/newReview');
});

// post a new review
router.post('/reviews/newReview', function(req, res, next) {
	var newReview = new Review(req.body);
	newReview.save(function(err, review) {
		if (err) {
			console.log(err);
		}
		// after successfully save the data, return to main page
		return res.redirect('/');
	});
});

router.get('/reviews/:id', (req, res, next) => {
	Review.findById(req.params.id, (err, review) => {
		if (err) {
			console.log(err);
		}
		res.render('reviews/showReview', {review: review});
	});
});

module.exports = router;
