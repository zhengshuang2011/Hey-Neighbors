const express = require("express");
const { post } = require("request");
const router = express.Router();

module.exports = (db) => {
  // Get all events
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM events;`)
      .then((data) => {
        const events = data.rows;
        console.log(res.json({ events }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  Create new event
  const addNewEvent = (
    host_id,
    event_name,
    address,
    street,
    city,
    province,
    country,
    post_code,
    date,
    start_at,
    duration,
    photo_image,
    description,
    category_id,
    max_people_number,
    mask,
    vaccine,
    status
  ) => {
    const command = `
    INSERT INTO events (
      host_id,
      event_name,
      address,
      street,
      city,
      province,
      country,
      post_code,
      date,
      start_at,
      duration,
      photo_image,
      description,
      category_id,
      max_people_number,
      mask,
      vaccine,
      status)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)
    RETURNING *;`;
    const queryParams = [
      host_id,
      event_name,
      address,
      street,
      city,
      province,
      country,
      post_code,
      date,
      start_at,
      duration,
      photo_image,
      description,
      category_id,
      max_people_number,
      mask,
      vaccine,
      status,
    ];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };

  router.post("/", (req, res) => {
    const host_id = 2;
    const {
      event_name,
      address,
      street,
      city,
      province,
      country,
      post_code,
      date,
      start_at,
      duration,
      photo_image,
      description,
      category_id,
      max_people_number,
      mask,
      vaccine,
      status,
    } = req.body;

    addNewEvent(
      host_id,
      event_name,
      address,
      street,
      city,
      province,
      country,
      post_code,
      date,
      start_at,
      duration,
      photo_image,
      description,
      category_id,
      max_people_number,
      mask,
      vaccine,
      status
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
