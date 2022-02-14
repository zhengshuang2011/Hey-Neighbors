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

  //  ------------------------------------------------------
  // Apply for the event
  const newApplication = (
    participate_id,
    event_id,
    description,
    people_number,
    vaccine
  ) => {
    const command = `
      INSERT INTO applications (
      participate_id,
      event_id,
      description,
      people_number,
      vaccine,
      wait,
      approved
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;`;
    const queryParams = [
      participate_id,
      event_id,
      description,
      people_number,
      vaccine,
      TRUE,
      FALSE,
    ];

    console.log(command, queryParams);
    return db
      .query(command, queryParams)
      .then((result) => result.rows[0])
      .catch((err) => console.log(err.message));
  };

  router.post("/new/:event_id", (req, res) => {
    const { description, people_number, vaccine } = req.body;
    const event_id = Number(req.params.event_id);
    const participate_id = req.session.userId;

    newApplication(
      participate_id,
      event_id,
      description,
      people_number,
      vaccine
    )
      .then((data) => {
        console.log(res.json({ data }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
