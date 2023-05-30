
const config = require("../authConfig");
const User = require("../models/users");


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

    if (!req.body.role=='admin' || !req.body.role=='user') {
		res.status(404).send({
			message: "Failed! Role does not exist = " + req.body.role
		});
		return;
	}

	User.create({
		nick: req.body.username,
		password: bcrypt.hashSync(req.body.password, 8),
		role: req.body.role
	}).then(data => {
		res.send({ message: "User was registered successfully!" });
	}).catch(err => {
		res.status(500).send({ message: err.message });
	});
};

exports.signin = (req, res) => {
	User.findOne({
		where: {
			nick: req.body.username
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send({ message: "User Not found." });
		}

		var passwordIsValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: "Invalid Password!"
			});
		}

		var token = jwt.sign({ id: user.id, role: user.role }, config.secret, {
			expiresIn: 86400
		});


			res.status(200).send({
				id: user.id,
				username: user.username,
				role: user.role,
				accessToken: token
			});



	}).catch(err => {
		res.status(500).send({ message: err.message });
	});
};