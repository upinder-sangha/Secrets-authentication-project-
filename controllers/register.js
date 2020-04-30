const router = require('express').Router();
const User = require('../models/user');
const passport = require("passport");

router.route("/")

	.get(function (req, res) {
		res.render("register");
	})

	.post(function (req, res) {
		User.register({ username: req.body.username }, req.body.password, function (err, user) {
			if (err) {
				console.log(err);
				res.redirect("/register");
			}
			else {
				passport.authenticate("local")(req, res, function () {
					res.redirect("/secrets");
				});
			}
		});
	});

module.exports = router;