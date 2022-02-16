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
  // Get event's all application by eventId
  const getApplicationsByEventId = (event_id) => {
    const command = `
    SELECT * FROM applications
    WHERE event_id = $1;
    AND status_id = $2`;
    const queryParams = [event_id, 2];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.get("/event/:event_id", (req, res) => {
    const event_id = Number(req.params.event_id);
    console.log(event_id);

    getApplicationsByEventId(event_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Get all application by userId
  const getApplicationsByUserId = (user_id) => {
    const command = `
    SELECT * FROM applications
    WHERE participate_id = $1
    AND status_id = $2;`;
    const queryParams = [user_id, 1];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.get("/attender", (req, res) => {
    const user_id = req.session.userId;
    console.log(user_id);

    getApplicationsByUserId(user_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Get all application which host will receive
  const getApplicationsByHost = (host_id) => {
    const command = `
    SELECT
    users.first_name,
    users.last_name,
    applications.email,
    applications.people_number,
    applications.description,
    applications.vaccine,
    events.event_name
    FROM applications
    JOIN users ON applications.participate_id = users.id
    JOIN events ON events.id = applications.event_id
    WHERE events.host_id = $1
    AND applications.status_id = $2;`;
    const queryParams = [host_id, 1];

    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };
  router.get("/host", (req, res) => {
    const host_id = req.session.userId;

    getApplicationsByHost(host_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Create new application for the event
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

  //  ------------------------------------------------------
  // Delete application by id
  const deleteApplicationById = (id) => {
    command = `
    DELETE FROM applications WHERE id = $1 RETURNING *;
    `;
    queryParams = [id];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    deleteApplicationById(id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Update application by id
  const updateApplicationById = (id) => {
    command = `
    UPDATE applications
    SET
    status_id = $1
    WHERE id = $2 RETURNING *;
    `;
    queryParams = [id];

    return db
      .query(command, queryParams)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err.message));
  };
  router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    updateApplicationById(id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
