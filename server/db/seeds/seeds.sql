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

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, 'baby party', '11700', 'Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', 45.41117, -75.69812, '2022-04-30', '16:00:00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf6TcgCpBOAEqAX9XWPw4vWwaCQj_aAGJtg&usqp=CAU', 'Come to join our baby party', 3, 10, TRUE, TRUE, FALSE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, 'Concert', '11700', 'Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', 45.31413149, -75.88851991, '2022-04-30', '16:00:00', 2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/800px-Muse_in_Sydney.jpg', 'Come to join our baby party', 3, 10, TRUE, TRUE, FALSE
);


INSERT INTO applications (
  participate_id, event_id, description, people_number, vaccine, wait, approved
) VALUES (
  2, 1, 'I am living nearbay and want to join with my kid', 2, TRUE, TRUE, FALSE
);


