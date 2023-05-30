

const User = require("../models/users");


checkDuplicateUsername = (req, res, next) => {
	User.findOne({
		where: {
			nick: req.body.username
		}
	}).then(user => {
		if (user) {
			res.status(400).send({
				message: "Failed! Username is already in use!"
			});
			return;
		}
		next();
	});
};

checkRoleExisted = (req, res, next) => {
	if (!req.body.role=='admin' || !req.body.role=='user') {
		res.status(400).send({
			message: "Failed! Role does not exist = " + req.body.role
		});
		return;
	}
	next();
};


const verifySignUp = {
	checkDuplicateUsername: checkDuplicateUsername,
	checkRoleExisted: checkRoleExisted
}

module.exports = verifySignUp;