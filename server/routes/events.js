const express = require("express");
const router = express.Router();

module.exports = (db) => {
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

  router.post("/create", (req, res) => {

    console.log("====", req.body);

    const event_name = req.body.eventName;
    const date = req.body.date;
    const startAt = req.body.startAt;
    const duration = req.body.duration;
    const streetNo = req.body.streetNo;
    const street = req.body.street;
    const city = req.body.city;
    const province = req.body.province;
    const country = req.body.country;
    const postalCode = req.body.postalCode;
    const category = req.body.category;
    const maxParticipant = req.body.maxParticipant;
    const description = req.body.description;
    const photo = req.body.photo;
    const mask = req.body.mask;
    const vaccine = req.body.vaccine;
    const status = req.body.status;

    db.query(`INSERT INTO events (event_name, address, street, city, province, country, post_code, date, start_at, duration, description, category_id, max_people_number, photo_image, mask, vaccine, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING*; `, [event_name, streetNo, street, city, province, country, postalCode, date, startAt, duration, description, category, maxParticipant, photo, mask, vaccine, status])
      .then((data) => {
        console.log(res.json({ body: req.body }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/update/:id", (req, res) => {
    console.log("====", req.body)
    const eventId = req.params.id;
    const event_name = req.body.eventName;
    db.query(`UPDATE events SET event_name=$1 WHERE id=$2;`, [event_name, eventId])
      .then((data) => {
        const events = data.rows;
        console.log(res.json({ body: req.body }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};