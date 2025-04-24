const handleSignin = (req, res, bcrypt, db) => {
  // Check if form is submitted
  if (!req.body.email && !req.body.password) {
    return res.status(400).json("Password or E-Mail is missing");
  }

  // email and password from request body
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  db.select("email", "hash")
    .from("login")
    .where("email", "=", userEmail)
    .then((data) => {
      bcrypt.compare(userPassword, data[0].hash, function (err, pwIsValid) {
        if (pwIsValid) {
          return db
            .select("*")
            .from("users")
            .where("email", "=", userEmail)
            .then((user) => {
              res.status(200).json(user[0]);
            })
            .catch((err) => {
              res.status(400).json("Unable to get user");
            });
        } else {
          res.status(400).json("Wrong credentials");
        }
      });
    });
};

module.exports = {
  handleSignin,
};
