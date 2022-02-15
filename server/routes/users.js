const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  // Get all users
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

  //-------------------------------------
  //  check if log in or not
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
      res.json({});
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

  //logout User ---------------------------
  router.post("/logout", (req, res) => {
    req.session = null;
    res.json(null);
  });

  // create User----------------
  const findUserByEmail = function (email) {
    const stringQuery = `
    SELECT *
    FROM users
    WHERE email = $1;
    `;
    return db.query(stringQuery, [email]).then((data) => data.rows[0]);
  };

  const CreateUser = function (first_name, last_name, password, email) {
    const stringQuery = `
    INSERT INTO users (first_name, last_name, password, email)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
    return db
      .query(stringQuery, [first_name, last_name, password, email])
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };

  router.post("/register", (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const password = bcrypt.hashSync(req.body.password, 10);
    const email = req.body.email;

    findUserByEmail(email).then((user) => {
      if (!user) {
        CreateUser(first_name, last_name, password, email)
          .then((user) => {
            req.session.userId = user.id;
            res.send(user);
            return;
          })
          .catch((error) => res.json(error));
      } else {
        res.json("User already exists");
      }
    });
  });

  return router;
};
