const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Get all incoming events
  router.get("/incoming", (req, res) => {
    db.query(
      `SELECT events.*,
      users.first_name,
      users.last_name,
      users.avatar,
      categories.id AS c_id,
      categories.name AS c_name
         FROM events
         JOIN categories ON events.category_id = categories.id
         JOIN users ON events.host_id = users.id
         WHERE events.status_id = $1
         ORDER BY events.id DESC;`,
      [1]
    )
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
    const command = `
    SELECT events.*,
    users.first_name,
    users.last_name,
    users.avatar,
    users.id AS u_id,
    categories.id AS c_id,
    categories.name AS c_name
    FROM events
    JOIN categories ON events.category_id = categories.id
    JOIN users ON events.host_id = users.id
    WHERE events.id = $1;`;
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
    address2,
    city,
    province,
    country,
    post_code,
    locationlatitude,
    locationlongitude,
    date,
    start_at,
    duration,
    photo_image,
    description,
    category_id,
    max_people_number,
    mask,
    vaccine
  ) => {
    const command = `
    INSERT INTO events (
      host_id,
      event_name,
      address,
      address2,
      city,
      province,
      country,
      post_code,
      locationlatitude,
      locationlongitude,
      date,
      start_at,
      duration,
      photo_image,
      description,
      category_id,
      max_people_number,
      mask,
      vaccine)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)
    RETURNING *;`;
    const queryParams = [
      host_id,
      event_name,
      address,
      address2,
      city,
      province,
      country,
      post_code,
      locationlatitude,
      locationlongitude,
      date,
      start_at,
      duration,
      photo_image,
      description,
      category_id,
      max_people_number,
      mask,
      vaccine,
    ];

    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };

  router.post("/", (req, res) => {
    const host_id = req.session.userId;
    const {
      event_name,
      address,
      address2,
      city,
      province,
      country,
      post_code,
      locationlatitude,
      locationlongitude,
      date,
      start_at,
      duration,
      photo_image,
      description,
      category_id,
      max_people_number,
      mask,
      vaccine,
    } = req.body;

    addNewEvent(
      host_id,
      event_name,
      address,
      address2,
      city,
      province,
      country,
      post_code,
      locationlatitude,
      locationlongitude,
      date,
      start_at,
      duration,
      photo_image,
      description,
      category_id,
      max_people_number,
      mask,
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
  // Update event's status
  const updateEventStatus = (event_status, event_id) => {
    const command = `
    UPDATE events
    SET
    status_id = $1
    WHERE id = $2
    RETURNING *;`;
    const queryParams = [event_status, event_id];

    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };
  router.put("/change/:id", (req, res) => {
    const event_id = Number(req.params.id);
    const { event_status } = req.body;

    updateEventStatus(event_status, event_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Update event by eventId
  const updateEventByEventId = (
    event_name,
    address,
    address2,
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
    locationlatitude,
    locationlongitude,
    event_id
  ) => {
    const command = `
    UPDATE events
    SET
    event_name = $1,
    address = $2,
    address2 = $3,
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
    locationlatitude = $17,
    locationlongitude = $18
    WHERE id = $19
    RETURNING *;`;
    const queryParams = [
      event_name,
      address,
      address2,
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
      locationlatitude,
      locationlongitude,
      event_id,
    ];
    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };
  router.put("/:id", (req, res) => {
    const event_id = Number(req.params.id);
    const {
      event_name,
      address,
      address2,
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
      locationlatitude,
      locationlongitude,
    } = req.body;
    updateEventByEventId(
      event_name,
      address,
      address2,
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
      locationlatitude,
      locationlongitude,
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
    DELETE FROM events WHERE id = $1;
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
    SELECT events.*,
    users.first_name,
    users.last_name,
    users.avatar,
    categories.id AS c_id,
    categories.name AS c_name
    FROM events
    JOIN categories ON events.category_id = categories.id
    JOIN users ON events.host_id = users.id
    WHERE events.host_id = $1
    AND events.status_id = $2
    ORDER BY events.id DESC
   `;
    const queryParams = [host_id, 1];

    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };
  router.get("/host/future", (req, res) => {
    const host_id = req.session.userId;

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
    SELECT events.*, categories.id AS c_id, categories.name AS c_name
    FROM events
    JOIN categories ON events.category_id = categories.id
    WHERE events.host_id = $1
    AND events.status_id = $2
    ORDER BY events.id DESC
    ;`;
    const queryParams = [host_id, 2];

    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };
  router.get("/host/completed", (req, res) => {
    const host_id = req.session.userId;

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
    SELECT events.*, categories.id AS c_id, categories.name AS c_name
    FROM events
    JOIN categories ON events.category_id = categories.id
    JOIN applications  ON applications.event_id = events.id
    WHERE applications.participate_id = $1
    AND applications.status_id = $2
    AND events.status_id = $3
    ORDER BY events.id DESC;
    `;
    const queryParams = [user_id, 2, 1];

    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };
  router.get("/user/future", (req, res) => {
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
    SELECT events.*, categories.id AS c_id, categories.name AS c_name
    FROM events
    JOIN categories ON events.category_id = categories.id
    JOIN applications  ON applications.event_id = events.id
    WHERE applications.participate_id = $1
    AND applications.status_id = $2
    ORDER BY events.id DESC;
    `;
    const queryParams = [user_id, 6];

    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };
  router.get("/user/completed", (req, res) => {
    const user_id = req.session.userId;
    console.log(user_id);

    getUserFinishedEvent(user_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Get User(attender) pending events
  const getUserPendingEvent = (user_id) => {
    const command = `
    SELECT events.*, categories.id AS c_id, categories.name AS c_name
    FROM events
    JOIN categories ON events.category_id = categories.id
    JOIN applications  ON applications.event_id = events.id
    WHERE applications.participate_id = $1
    AND applications.status_id = $2
    AND events.status_id = $3
    ORDER BY events.id DESC;
    `;
    const queryParams = [user_id, 1, 1];

    return db
      .query(command, queryParams)
      .then((res) => res.rows)
      .catch((err) => console.log(err.message));
  };
  router.get("/user/pending", (req, res) => {
    const user_id = req.session.userId;
    console.log(user_id);

    getUserPendingEvent(user_id)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/", (req, res) => {
    console.log(req.query);
    const { command, queryParams } = getSqlQueryWithFilter(req.query);
    db.query(command, queryParams)
      .then((data) => {
        const events = data.rows;
        console.log(res.json({ events }));
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //  ------------------------------------------------------
  // Get events by filter (Home Page)
  const getSqlQueryWithFilter = (options) => {
    // 1
    const queryParams = [];
    // 2
    let queryString = `
      SELECT events.*,
      users.first_name,
      users.last_name,
      users.avatar,
      categories.id AS c_id,
      categories.name AS c_name
      FROM events
      JOIN categories ON events.category_id = categories.id
      JOIN users ON events.host_id = users.id
      `;

    if (options.searchCity) {
      queryParams.push(`%${options.searchCity}%`);
      queryString += `WHERE events.city LIKE $${queryParams.length} `;
    }

    if (options.selectedDate) {
      queryParams.push(`%${options.selectedDate}%`);
      if (queryParams.length === 1) {
        queryString += `WHERE events.date::text LIKE $${queryParams.length} `;
      } else {
        queryString += `AND events.date = $${queryParams.length} `;
      }
    }

    if (options.mask) {
      queryParams.push(`${options.mask}`);
      if (queryParams.length === 1) {
        queryString += `WHERE events.mask = $${queryParams.length} `;
      } else {
        queryString += `AND events.mask = $${queryParams.length} `;
      }
    }

    if (options.vaccine) {
      queryParams.push(`${options.vaccine}`);
      if (queryParams.length === 1) {
        queryString += `WHERE events.vaccine = $${queryParams.length} `;
      } else {
        queryString += `AND events.vaccine = $${queryParams.length} `;
      }
    }

    if (options.category) {
      queryParams.push(Number(options.category));
      if (queryParams.length === 1) {
        queryString += `WHERE events.category_id = $${queryParams.length} `;
      } else {
        queryString += `AND events.category_id = $${queryParams.length} `;
      }
    }

    queryParams.push(1);
    if (queryParams.length === 1) {
      queryString += `WHERE events.status_id = $${queryParams.length} `;
    } else {
      queryString += `AND events.status_id = $${queryParams.length} `;
    }

    queryString += `ORDER BY events.id DESC;`;

    return { command: queryString, queryParams };
  };

  return router;
};
