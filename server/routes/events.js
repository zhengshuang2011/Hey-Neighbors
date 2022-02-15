const express = require("express");
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

  //  ------------------------------------------------------
  // Get event by eventId
  const getEventByEventId = (event_id) => {
    const command = `SELECT * FROM events WHERE id = $1;`;
    const queryParams = [event_id];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.get("/:id", (req, res) => {
    const event_id = Number(req.params.id);
    console.log(event_id);

    getEventByEventId(event_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
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
    const host_id = 1;
    const {
      eventName,
      streetNo,
      street,
      city,
      province,
      country,
      postalCode,
      date,
      startAt,
      duration,
      photo,
      description,
      category,
      maxParticipant,
      mask,
      vaccine,
      status,
    } = req.body;

    addNewEvent(
      host_id,
      eventName,
      streetNo,
      street,
      city,
      province,
      country,
      postalCode,
      date,
      startAt,
      duration,
      photo,
      description,
      category,
      maxParticipant,
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

  //  ------------------------------------------------------
  // Update event by eventId
  const updateEventByEventId = (
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
    event_id
  ) => {
    const command = `
    UPDATE events
    SET
    event_name = $1,
    address = $2,
    street = $3,
    city = $4,
    province = $5,
    country = $6,
    post_code = $7,
    date = $8,
    start_at = $9,
    duration = $10,
    photo_image = $11,
    description = $12,
    category_id = $13,
    max_people_number = $14,
    mask = $15,
    vaccine = $16,
    status = $17
    WHERE id = $18
    RETURNING *;`;
    const queryParams = [
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
      event_id,
    ];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.put("/:id", (req, res) => {
    const event_id = Number(req.params.id);
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

    updateEventByEventId(
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
      event_id
    )
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Delete event by eventId
  const deleteEventById = (event_id) => {
    command = `
    DELETE FROM events WHERE id = $1 RETURNING *;
    `;
    queryParams = [event_id];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.delete("/:id", (req, res) => {
    const event_id = Number(req.params.id);

    deleteEventById(event_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Get Host owned coming events
  const getHostEvent = (host_id) => {
    const command = `
    SELECT * FROM events
    WHERE host_id = $1
    AND status = $2;`;
    const queryParams = [host_id, FALSE];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.get("/host/future", (req, res) => {
    const host_id = req.session.userId;
    console.log(event_id);

    getHostEvent(host_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Get Host owned completed events
  const getHostFinishedEvent = (host_id) => {
    const command = `
    SELECT * FROM events
    WHERE host_id = $1
    AND status = $2;`;
    const queryParams = [host_id, TRUE];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.get("/host/completed", (req, res) => {
    const host_id = req.session.userId;
    console.log(event_id);

    getHostFinishedEvent(host_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Get User(attender) coming events
  const getUserFutureEvent = (user_id) => {
    const command = `
    SELECT * FROM events e
    JOIN applications  a ON a.event_id = e.id
    WHERE a.participate_id = $1
    AND a.wait = $2
    AND a.approved = $3
    AND e.status = $4;
    `;
    const queryParams = [user_id, FALSE, TRUE, FALSE];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.get("/user/willattend", (req, res) => {
    const user_id = req.session.userId;
    console.log(user_id);

    getUserFutureEvent(user_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Get User(attender) finished events
  const getUserFinishedEvent = (user_id) => {
    const command = `
    SELECT * FROM events e
    JOIN applications  a ON a.event_id = e.id
    WHERE a.participate_id = $1
    AND a.wait = $2
    AND a.approved = $3
    AND e.status = $4;
    `;
    const queryParams = [user_id, FALSE, TRUE, TRUE];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.get("/user/attended", (req, res) => {
    const user_id = req.session.userId;
    console.log(user_id);

    getUserFinishedEvent(user_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
