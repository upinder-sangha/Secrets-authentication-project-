const router = require('express').Router();
const User = require('../models/user');
const passport = require("passport");


router.route("/")

	.get(function (req, res) {
		res.render("login");
	})

	.post(function (req, res) {
		const user = new User({
			username: req.body.username,
			password: req.body.password
		});
		req.login(user, function (err) {
			if (err) {
				console.log(err);
			}
			else {
				passport.authenticate("local")(req, res, function () {
					res.redirect("/secrets");
				});
			}
		});
	});

module.exports = router;