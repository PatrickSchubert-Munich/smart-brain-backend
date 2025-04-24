export const handleProfile = (req, res, db) => {
  const { id } = req.params;
  user = db
    .select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length > 0) {
        // user[0]: because returns an array
        res.status(200).json(user[0]);
      } else {
        res.status(400).json("User not found");
      }
    })
    .catch((err) => {
      res.status(400).json("Error getting user");
    });
};
