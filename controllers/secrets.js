const router = require('express').Router();
const User = require('../models/user');

router.get("/", function (req, res) {
	User.find({ "secret": { $ne: null } }, function (err, foundUsers) {
		if (err)
			console.log(err);
		else
			if (foundUsers)
				res.render("secrets", { usersWithSecrets: foundUsers });
	});
});

module.exports = router;