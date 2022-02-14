const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM categories;`)
      .then((data) => {
        const categories = data.rows;
        console.log(res.json({ categories }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  const addNewCategory = (name) => {
    const command = `
    INSERT INTO categories (name)
    VALUES ($1)
    RETURNING *;`;
    const queryParams = [name];

    console.log(command, queryParams);
    return db
      .query(command, queryParams)
      .then((result) => result.rows[0])
      .catch((err) => console.log(err.message));
  };

  router.post("/", (req, res) => {
    const { name } = req.body;
    addNewCategory(name)
      .then((data) => {
        console.log(res.json({ data }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
