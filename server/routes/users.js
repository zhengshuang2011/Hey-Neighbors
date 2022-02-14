const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        console.log(res.json({ users }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /**
   * Get a single user from the database given their email.
   * @param {String} email The email of the user.
   * @return {Promise<{}>} A promise to the user.
   */
  const getUserWithEmail = function (email) {
    const command = `SELECT * FROM users WHERE email = $1`;
    const values = [email];

    return db
      .query(command, values)
      .then((result) => result.rows[0])
      .catch((err) => console.log(err.message));
  };

  // Login if the user exist
  // email and password compare
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    getUserWithEmail(email)
      .then((user) => {
        if (!user) {
          return res.status(400).json({ emailnotfound: "Email not found" });
        } else {
          if (bcrypt.compareSync(password, user.password)) {
            res.send(user);
            return;
          }
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  return router;
};
