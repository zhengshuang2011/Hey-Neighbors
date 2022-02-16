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
<<<<<<< HEAD
  host_id, event_name, address, street, city, province, country, post_code, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine,status_id
)VALUES(
  1, '456 party', '11700', 'Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', '2022-04-30', '16:00:00', 3, 'https://images.pexels.com/photos/1884269/pexels-photo-1884269.jpeg', 'Come to join our baby party', 3, 10, TRUE, TRUE,2
=======
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, 'Mirandas baby party', '11700', 'Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', 45.41117, -75.69812, '2022-04-30', '16:00:00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf6TcgCpBOAEqAX9XWPw4vWwaCQj_aAGJtg&usqp=CAU', 'Come to join our baby party', 3, 10, TRUE, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, 'U2 Concert', '210', 'Huntmar Dr.', 'Stittsville', 'ON', 'Canada', 'K2S 1B9', 45.29441212656311, -75.92586616310209, '2022-05-30', '20:15:00', 5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/800px-Muse_in_Sydney.jpg', 'U2 invites you to enjoy the concert of your life just across the Canadian Tyre Stadium.', 2, 10000, TRUE, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, 'Canada vs USA Football Match', '1000', 'Palladium Dr', 'Ottawa', 'ON', 'Canada', ' K2V 1A5', 45.29629702389615, -75.92790961311746, '2022-05-15', '19:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Support Canada in its way to 2024 World Cup.', 2, 50000, TRUE, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, 'Huge Discount Event in IKEA', '2685', 'Iris St',  'Ottawa', 'ON', 'Canada', 'K2C 3S4', 45.350309741131625, -75.78500271604146, '2022-05-11', '8:00:00', 12, 'https://www.ikea.com/images/an-ikea-store-182310c4351f3e9c519ff1ccd1ec0799.jpg?f=s', 'Dont miss out on our many discounted products.', 2, 1000, TRUE, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, '114. Reading Meeting', '277', 'Sparks St.', 'Ottawa', 'ON', 'Canada', 'K1R 7X9', 45.420269198328576, -75.70368769973133, '2022-04-28', '17:00:00', 3, 'https://stanfordpress.typepad.com/.a/6a00d8342f027653ef01b7c888864a970b-pi', 'Tired of Ottawas noise and unrest. You can find comfort in our reading event in our secluded chamber.', 4, 30, TRUE, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, 'Political Party Meeting', '1', 'Vimy Pl', 'Ottawa', 'ON', 'Canada', 'L4E 0G1', 45.41542116852221, -75.71897567472406, '2022-05-11', '16:00:00', 2, 'https://images.thestar.com/EqQwuEcT4y2IzeI3kuvLH1RcEsM=/1200x800/smart/filters:cb(1554591676597)/https://www.thestar.com/content/dam/thestar/news/gta/2019/04/06/unions-to-hold-rally-at-ontario-legislature-to-protest-education-cuts/protest_queens_park.jpg', 'We will be meeting in LeBreton Flats Park to protest new government legislation', 2, 20000, FALSE, FALSE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, street, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status
)VALUES(
  1, 'Turkish and Chinese Cuisine Tasting', '2121', 'Carling Ave',  'Ottawa', 'ON', 'Canada', 'K2A 1H2', 45.371902661528516, -75.77016249711713, '2022-05-11', '8:00:00', 12, 'https://www.mashed.com/img/gallery/40-bizarre-foods-you-need-to-try-before-you-die/intro-1581443741.jpg', 'Come join our tasting event in Carlingwood Shopping Centre', 1, 100, FALSE, TRUE, TRUE
>>>>>>> origin/master
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


