-- Users table seeds here (Example)
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
    'Devin', 'Sanders', 'tristanjacobs@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://i.imgur.com/nlhLi3I.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
    'Iva', 'Harrison', 'allisonjackson@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://i.imgur.com/nlhLi3I.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Dale', 'Coleman', 'michaelgray@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'https://i.imgur.com/nlhLi3I.png');


-- Categories table seeds here (Example)
INSERT INTO categories(
  name
) VALUES(
  'food'
);
INSERT INTO categories(
  name
) VALUES(
  'game'
);
INSERT INTO categories(
  name
) VALUES(
  'kids'
);
INSERT INTO categories(
  name
) VALUES(
  'study'
);
INSERT INTO categories(
  name
) VALUES(
  'movies'
);

-- Event Status table seeds here (Example)
INSERT INTO event_status(
  name
) VALUES(
  'uncompleted'
);
INSERT INTO event_status(
  name
) VALUES(
  'completed'
);
INSERT INTO event_status(
  name
) VALUES(
  'cancelled'
);

-- Event table seeds here (Example)

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  1, 'baby party', '11700', 'Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', '2022-04-30', '16:00:00', 2, 'https://images.pexels.com/photos/1884269/pexels-photo-1884269.jpeg', 'Come to join our baby party', 3, 10, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  1, '789 party', '11700', 'Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', '2022-04-30', '16:00:00', 1, 'https://images.pexels.com/photos/1884269/pexels-photo-1884269.jpeg', 'Come to join our baby party', 3, 10, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine,status_id
)VALUES(
  1, '123 party', '11700', 'Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', '2022-04-30', '16:00:00', 4, 'https://images.pexels.com/photos/1884269/pexels-photo-1884269.jpeg', 'Come to join our baby party', 3, 10, TRUE, TRUE,2
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine,status_id
)VALUES(
  1, '456 party', '11700', 'Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', '2022-04-30', '16:00:00', 3, 'https://images.pexels.com/photos/1884269/pexels-photo-1884269.jpeg', 'Come to join our baby party', 3, 10, TRUE, TRUE,2
);


-- Application Status table seeds here (Example)
INSERT INTO application_status(
  name
) VALUES(
  'waiting'
);
INSERT INTO application_status(
  name
) VALUES(
  'approved'
);
INSERT INTO application_status(
  name
) VALUES(
  'rejected'
);
INSERT INTO application_status(
  name
) VALUES(
  'cancelled by the attender'
);
INSERT INTO application_status(
  name
) VALUES(
  'event cancelled'
);

-- Application table seeds here (Example)
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  2, 1, 'I am living nearbay and want to join with my kid', 'allisonjackson@mail.com',2, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  3, 1, 'I am living nearbay and want to join with my kid', 'michaelgray@mail.com',2, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  3, 2, 'I am living nearbay and want to join with my kid', 'michaelgray@mail.com',2, TRUE
);


