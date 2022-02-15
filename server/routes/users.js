const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  router.get("/login", (req, res) => {
    if (req.session.userId) {
      id = req.session.userId;
      db.query(`SELECT * FROM users WHERE id = $1;`, [id])
        .then((data) => {
          console.log(data.rows);
          res.json(data.rows);
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    } else {
      res.json(null);
    }
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
            req.session.userId = user.id;
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
