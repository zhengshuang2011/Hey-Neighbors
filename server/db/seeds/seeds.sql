-- Users table seeds here (Example)
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
    'Devin', 'Sanders', 'tristanjacobs@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/8.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
    'Iva', 'Harrison', 'allisonjackson@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/9.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Louis', 'Washington', 'chloecarter@google.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/10.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Nell', 'Medina', 'juliansantos@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/11.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Isabelle', 'Robbins', 'miasutton@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/12.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Jerome', 'Wright', 'bellaanthony@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/13.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Christine', 'Buchanan', 'nathannguyen@ymail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/14.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'May', 'Barrett', 'gabriellabarrera@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/15.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Jennie', 'Powers', 'lilabell@live.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/16.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Maggie', 'Norris', 'miafletcher@inbox.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/17.png');
   INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Delia', 'Caldwell', 'elliotbaker@yahoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/18.png');
   INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Justin', 'Reyes', 'austindotson@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/19.png');
   INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'James', 'Banks', 'sydneylopez@live.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/20.png');
   INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Elizabeth', 'Lane', 'henryhaynes@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/21.png');

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
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  1, 'Mirandas baby party', '11700 Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', 45.41117, -75.69812, '2022-04-30', '16:00:00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf6TcgCpBOAEqAX9XWPw4vWwaCQj_aAGJtg&usqp=CAU', 'Come to join our baby party', 3, 10, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  1, 'U2 Concert', '210 Huntmar Dr.', 'Stittsville', 'ON', 'Canada', 'K2S 1B9', 45.29441212656311, -75.92586616310209, '2022-05-30', '20:15:00', 5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/800px-Muse_in_Sydney.jpg', 'U2 invites you to enjoy the concert of your life just across the Canadian Tyre Stadium.', 2, 10000, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  1, 'Canada vs USA Football Match', '1000 Palladium Dr', 'Ottawa', 'ON', 'Canada', ' K2V 1A5', 45.29629702389615, -75.92790961311746, '2022-05-15', '19:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Support Canada in its way to 2024 World Cup.', 2, 50000, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  1, 'Huge Discount Event in IKEA', '2685 Iris St',  'Ottawa', 'ON', 'Canada', 'K2C 3S4', 45.350309741131625, -75.78500271604146, '2022-05-11', '8:00:00', 12, 'https://www.ikea.com/images/an-ikea-store-182310c4351f3e9c519ff1ccd1ec0799.jpg?f=s', 'Dont miss out on our many discounted products.', 2, 1000, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
)VALUES(
  1, '114. Reading Meeting', '277 Sparks St.', 'Ottawa', 'ON', 'Canada', 'K1R 7X9', 45.420269198328576, -75.70368769973133, '2022-04-28', '17:00:00', 3, 'https://stanfordpress.typepad.com/.a/6a00d8342f027653ef01b7c888864a970b-pi', 'Tired of Ottawas noise and unrest. You can find comfort in our reading event in our secluded chamber.', 4, 30, TRUE, TRUE, 2
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
)VALUES(
  1, 'Political Party Meeting', '1 Vimy Pl', 'Ottawa', 'ON', 'Canada', 'L4E 0G1', 45.41542116852221, -75.71897567472406, '2022-05-11', '16:00:00', 2, 'https://images.thestar.com/EqQwuEcT4y2IzeI3kuvLH1RcEsM=/1200x800/smart/filters:cb(1554591676597)/https://www.thestar.com/content/dam/thestar/news/gta/2019/04/06/unions-to-hold-rally-at-ontario-legislature-to-protest-education-cuts/protest_queens_park.jpg', 'We will be meeting in LeBreton Flats Park to protest new government legislation', 2, 20000, FALSE, FALSE, 2
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
)VALUES(
  1, 'Turkish and Chinese Cuisine Tasting', '2121 Carling Ave',  'Ottawa', 'ON', 'Canada', 'K2A 1H2', 45.371902661528516, -75.77016249711713, '2022-05-11', '8:00:00', 12, 'https://www.mashed.com/img/gallery/40-bizarre-foods-you-need-to-try-before-you-die/intro-1581443741.jpg', 'Come join our tasting event in Carlingwood Shopping Centre', 1, 100, FALSE, TRUE, 2
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  2, 'Bring Your Own Booty” Dance Party', '12461 Bathurst St', 'Richmond Hill', 'ON', 'Canada', 'L4E 2B4', 43.925410, -79.477040, '2022-06-30', '16:00:00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf6TcgCpBOAEqAX9XWPw4vWwaCQj_aAGJtg&usqp=CAU', 'To connect with Bring your own booty dance party, join Facebook today.', 2, 50, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  2, 'Mummies & Mimosas', '10620 Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4C 3C8', 43.886051, -79.441841, '2022-06-23', '20:15:00', 5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/800px-Muse_in_Sydney.jpg', ' Bottomless Mimosas and House Margaritas on the rocks as well as brunch full of delicious selections', 1, 100, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  3, 'This is Your Life', '2931 19th Ave', 'Markham', 'ON', 'Canada', 'L6C 1L7', 43.913010, -79.449181, '2022-09-03', '08:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Rand career with help from friends and family.', 4, 5, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  3, 'Spring To Life', '3255 Hwy 7', 'Markham', 'ON', 'Canada', 'L3R 3P9', 43.849770, 43.849770, '2022-09-03', '08:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Ralph Edwards surpristheir life and career with help from friends and family.', 4, 5, TRUE, TRUE
);

INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
)VALUES(
  4, 'A Smile As Sweet As Spring', '1631 Rutherford Rd', 'Vaughan', 'ON', 'Canada', 'L4K 0C1', 43.841490, -79.488350, '2022-09-03', '08:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Ralph Edwards surprises unsuspecting celebritieselp from friends and family.', 4, 5, TRUE, TRUE, 2
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
  3, 1, 'I am living nearbay and want to join ', 'michaelgray@mail.com',2, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  3, 2, 'I am living nearbay and want to join with my kid', 'michaelgray@mail.com',2, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  1, 8, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  1, 9, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  1, 10, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  1, 11, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  1, 12, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE, 2
);

