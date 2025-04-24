export const handleRegister = (req, res, bcrypt, db) => {
  // Unpack parameters
  const { name, email, password } = req.body;

  // Check if all parameters are provided
  if (!name || !email || !password) {
    console.log("Missing parameters:", { name, email, password });
    return res
      .status(400)
      .json("Name, E-Mail or Password is missing. Fill out the form.");
  }

  // Handle Passwords
  bcrypt.hash(password, null, null, function (err, hash) {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json("Error hashing password");
    }

    db.transaction((trx) => {
      trx
        .insert({
          hash,
          email,
        })
        .into("login")
        .returning("email")
        .then((loginEmail) => {
          return db("users").returning("*").insert({
            name: name,
            email: loginEmail[0].email,
            joined: new Date(),
          });
        })
        .then((user) => {
          // user[0]: because returns an array
          res.status(200).json(user[0]);
        })
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => {
      res.status(400).json("Unable to register user");
    });
  });
};
