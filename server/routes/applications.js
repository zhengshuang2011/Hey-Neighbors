const express = require("express");
const router = express.Router();

module.exports = (db) => {
    router.get("/", (req, res) => {
      db.query(`SELECT * FROM applications;`)
        .then((data) => {
          const applications = data.rows;
          console.log(res.json({ applications }));
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    });
    return router;
  };