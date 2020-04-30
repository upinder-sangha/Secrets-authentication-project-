const router = require('express').Router();
const User = require('../models/user');

router.get("/", function (req, res) {
	if (req.isAuthenticated()) {
		res.render("submit");
	}
	else {
		res.redirect("/login");
	}
});
router.post("/", function (req, res) {
	const submittedSecret = req.body.secret;
	User.findById(req.user.id, function (err, foundUser) {
		if (err)
			console.log(err);
		else {
			if (foundUser) {
				foundUser.secret = submittedSecret;
				foundUser.save(function () {
					res.redirect("/secrets");
				});
			}
		}
	});
});

module.exports = router;