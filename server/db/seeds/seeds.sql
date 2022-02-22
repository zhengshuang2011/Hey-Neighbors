-- Users table seeds here (Example)
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
    'Aiden', 'Sanders', 'tristanjacobs@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/8.png');
INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
    'Zoe', 'Harrison', 'allisonjackson@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/9.png');
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
  INSERT INTO users (
    first_name,last_name, email, password, avatar)
    VALUES (
   'Miranda', 'Zheng', 'mirandaZheng@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'http://localhost:8001/images/22.png');


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

----user Id 1 uncomplete
---1
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  1, 'Mirandas Kids Party', '', 'Richmond Hill', 'ON', 'Canada', 'L4E 0S9', 43.922989, -79.469063, '2022-02-24', '19:00:00', 2, 'http://localhost:8001/images/01-01.png', 'Bring your kids to my home, and let them play together. Only for neighbors', 3, 10, TRUE, TRUE
);

---2
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  1, 'Mommies Tea Party', '41-59 Philips View Cres', 'Richmond Hill', 'ON', 'Canada', 'L4E 0S9', 43.922989, -79.469063, '2022-05-20', '16:00:00', 3, 'http://localhost:8001/images/01-02.png', 'Let mommies take a rest and enjoy the afternoon.', 1, 10, TRUE, TRUE
);

-----complete
---3
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
)VALUES(
  1, 'OutDoor Dog Walk Together', '11700 Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', 45.41117, -75.69812, '2021-11-05', '13:00:00', 2, 'http://localhost:8001/images/01-03.png', 'Come to join our baby party', 2, 10, TRUE, TRUE,2
);
---4
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
)VALUES(
  1, 'Mummies & Mimosas', '11700 Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', 45.41117, -75.69812, '2022-01-03', '09:00:00', 2, 'http://localhost:8001/images/01-04.png', 'Come to join our baby party', 1, 7, TRUE, TRUE,2
);
---5
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
)VALUES(
  1, 'This is Your Life', '11700 Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4E 0K4', 45.41117, -75.69812, '2022-02-01', '16:00:00', 2, 'http://localhost:8001/images/01-05.png', 'Come to join our baby party', 4, 10, TRUE, TRUE,2
);


-----userId 2 uncomplete
---6
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  2, 'Toddlers Play Together', '12461 Bathurst St', 'Richmond Hill', 'ON', 'Canada', 'L4E 2B4', 43.925410, -79.477040, '2022-02-24', '15:00:00', 2, 'http://localhost:8001/images/02-04.png', 'Whether you have an outgoing or shy little one, socialization is an important part of your childs overall development. a babys social development is tied to so many other areas," says in child development.', 3, 6, TRUE, TRUE
);

-----complete
----7
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine,status_id
)VALUES(
  2, 'Dance Party', '12461 Bathurst St', 'Richmond Hill', 'ON', 'Canada', 'L4E 2B4', 43.925410, -79.477040, '2022-01-10', '09:00:00', 2, 'http://localhost:8001/images/02-02.png', 'To connect with Bring your own booty dance party, join Facebook today.', 2, 50, TRUE, TRUE,2
);
---8
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine,status_id
)VALUES(
  2, 'MeatEx Canada', '12461 Bathurst St', 'Richmond Hill', 'ON', 'Canada', 'L4E 2B4', 43.925410, -79.477040, '2022-02-05', '15:00:00', 2, 'http://localhost:8001/images/02-03.png', 'To connect with Bring your own booty dance party, join Facebook today.', 1, 50, TRUE, TRUE,2
);

----userId 3 uncomplete9
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  3, 'Fondue Fridays', '50 Farmhouse Crescent', 'Richmond Hill', 'ON', 'Canada', 'L4E 0M1', 43.920770, -79.467380, '2022-02-25', '16:00:00', 2, 'http://localhost:8001/images/03-01.png', 'Fondue Fridays will featuring authentic swiss cheese fondue provided by The Cheese Boutique in Toronto. Try it the traditional way with wine and kirsch or A La Pristine made with beer and kirsch.', 1, 13, TRUE, FALSE
);

-----userId 4 uncomplete10
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  4, 'Bootlegger Tales and Tasting', '152-126 Alpaca Dr', 'Richmond Hill', 'ON', 'Canada', 'L4E 0P6', 43.917608, -79.466281, '2022-03-05', '16:00:00', 2, 'http://localhost:8001/images/04-01.png', 'Come to hear true stories of Windsor’s colourful bootlegging past by local storyteller and actor Rob Tymec. We have a few surprises for you including some secrets shared in one of the', 1, 7, TRUE, TRUE
);

-----userId 5 uncomplete11
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  5, 'Nightmare Alley: EVENT HORIZON', '10620 Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4C 3C8', 43.886051, -79.441841, '2022-05-23', '22:15:00', 5, 'http://localhost:8001/images/05-01.png', 'Welcome to the extreme 90s, where your haunted house is a SPACESHIP! Best known for his run of RESIDENT EVIL films (shout out to Toronto as the true Raccoon City!)', 5, 8, FALSE, TRUE
);

-----userId 6 uncomplete12
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  6, 'This is Your Life', '2931 19th Ave', 'Markham', 'ON', 'Canada', 'L6C 1L7', 43.913010, -79.449181, '2022-04-03', '08:00:00', 2, 'http://localhost:8001/images/06-01.png', 'Rand career with help from friends and family.', 4, 5, TRUE, TRUE
);

-----userId 7 uncomplete13
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  7, 'Turkish and Chinese Cuisine Tasting', '2121 Carling Ave',  'Ottawa', 'ON', 'Canada', 'K2A 1H2', 45.371902661528516, -75.77016249711713, '2022-05-11', '9:00:00', 5, 'http://localhost:8001/images/07-01.png', 'Come join our tasting event in Carlingwood Shopping Centre', 1, 10, FALSE, TRUE
);

-----userId 8 uncomplete14
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  8, '114. Reading Meeting', '277 Sparks St.', 'Ottawa', 'ON', 'Canada', 'K1R 7X9', 45.420269198328576, -75.70368769973133, '2022-04-28', '17:00:00', 3, 'http://localhost:8001/images/08-01.png', 'Tired of Ottawas noise and unrest. You can find comfort in our reading event in our secluded chamber.', 4, 5, TRUE, TRUE
);

-----userId 9 uncomplete15
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  9, 'Canada vs USA Football Match', '1000 Palladium Dr', 'Ottawa', 'ON', 'Canada', ' K2V 1A5', 45.29629702389615, -75.92790961311746, '2022-05-15', '19:00:00', 2, 'http://localhost:8001/images/09-01.png', 'Support Canada in its way to 2024 World Cup.', 2, 20, TRUE, TRUE
);

-----userId 10 uncomplete16
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  10, 'U2 Concert', '210 Huntmar Dr.', 'Stittsville', 'ON', 'Canada', 'K2S 1B9', 45.29441212656311, -75.92586616310209, '2022-05-30', '20:15:00', 5, 'http://localhost:8001/images/10-01.png', 'U2 invites you to enjoy the concert of your life just across the Canadian Tyre Stadium.', 2, 10, TRUE, FALSE
);

-----userId 11 uncomplete17
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  11, 'Care of Indoor Plants', '9-19 Alhart St', 'Richmond Hill', 'ON', 'Canada', 'L4E 1B9', 43.911042, -79.470916, '2022-02-27', '17:15:00', 5, 'http://localhost:8001/images/11-01.png', 'What is the best light? When to water or not water. And how to manage those nasty pests! Some common plants and unusual plants for the home. Bring your questions and be rea', 4, 10, FALSE, FALSE
);

-----userId 12 uncomplete18
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  12, 'Permaculture 101: An Intro to Permaculture', '26-20 Wellwood St', 'Richmond Hill', 'ON', 'Canada', 'L4S 1K4', 43.904472, -79.458513, '2022-03-05', '10:30:00', 3, 'http://localhost:8001/images/12-01.png', 'Believe it or not, it is possible to grow food and regenerate the environment in a yard of any size, and it may be easier than you think!', 1, 10, TRUE, TRUE
);

-----userId 13 uncomplete19
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  13, 'Jr. Forest Explorers ', '10620 Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4C 3C8', 43.886093, -79.440826, '2022-04-05', '14:30:00', 2, 'http://localhost:8001/images/13-01.png', 'A nature program for toddlers and their guardians. Un programme de nature destiné aux bambins et leurs tuteurs.', 2, 15, TRUE, TRUE
);

-----userId 14 uncomplete20
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  14, 'FAMILY SPRING EQUINOX', 'Prince Regent St', 'Markham', 'ON', 'Canada', 'L6C 0H3', 43.899040, -79.373690, '2022-04-07', '13:20:00', 3, 'http://localhost:8001/images/14-01.png', 'Gardening. Health and Wellness. Arts. Hiking. Family Activities. Nature Lovers. AND MORE! Let your mind grow at the Gardens!', 4, 14, FALSE, FALSE
);

----UerId 2 uncomolete 21
INSERT INTO events (
  host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
)VALUES(
  2, 'Animal Crossing Game Together', '12461 Bathurst St', 'Richmond Hill', 'ON', 'Canada', 'L4E 2B4', 43.925410, -79.477040, '2022-03-05', '14:00:00', 3, 'http://localhost:8001/images/02-01.png', 'Bring your switch, and lets play animal crossing LOL', 2, 8, TRUE, TRUE
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
INSERT INTO application_status(
  name
) VALUES(
  'event Complete'
);

-- Application table seeds here (Example)
----userId 1 approved
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  1, 20, 'I am living nearbay and want to join with my kid', 'tristanjacobs@gmail.com',2, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  1, 19, 'I am living nearbay and want to join', 'tristanjacobs@gmail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  1, 17, 'I am living nearbay and want to join with my kid', 'tristanjacobs@gmail.com',2, TRUE, 5
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  1, 10, 'I am living nearbay and want to join, We will bring some food', 'tristanjacobs@gmail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  1, 13, 'I am living in Richmond Hill and want to join', 'tristanjacobs@gmail.com',3, TRUE, 3
);

----waiting
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  1, 11, 'I am living nearbay and want to join with my kid', 'tristanjacobs@gmail.com',2, TRUE
);

----userId2
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  2, 10, 'I am living nearbay and want to join, We will bring some food', 'allisonjackson@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  2, 9, 'I am living nearbay and want to join', 'allisonjackson@mail.com',3, TRUE, 3
);
---waiting
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  2, 1, 'I am living nearbay and want to join, We will bring some food', 'allisonjackson@mail.com',3, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  2, 2, 'I am living nearbay and want to join', 'allisonjackson@mail.com',2, TRUE
);


INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  3, 1, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  4, 1, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  5, 1, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  13, 1, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  10, 1, 'Hi, I really want to join the party', 'elliotbaker@yahoo.com',3, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  9, 2, 'I am living nearbay and want to join, We will bring some food', 'gabriellabarrera@aol.com',2, TRUE
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine
) VALUES (
  7, 2, 'I am living nearbay and want to join, We will bring some food', 'nathannguyen@ymail.com',1, TRUE
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  3, 2, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  15, 2, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  11, 2, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  3, 3, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  6, 3, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  8, 3, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  9, 3, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  5, 4, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  13, 4, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  14, 4, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  15, 4, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  13, 5, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  6, 5, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  9, 5, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  7, 6, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  9, 6, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  10, 6, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  3, 7, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  7, 7, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  12, 7, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  10, 7, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  6, 8, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  10, 8, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  11, 19, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  5, 19, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  15, 19, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);

INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  8, 20, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  12, 20, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  6, 20, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, FALSE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  5, 20, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  13, 20, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  15, 20, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, TRUE, 2
);



INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  6, 21, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, FALSE, 2
);
INSERT INTO applications (
  participate_id, event_id, description, email, people_number, vaccine, status_id
) VALUES (
  13, 21, 'I am living nearbay and want to join, We will bring some food', '123@mail.com',3, FALSE, 2
);
-- INSERT INTO applications (
--   participate_id, event_id, description, email, people_number, vaccine
-- ) VALUES (
--   2, 1, 'I am living nearbay and want to join with my kid', 'allisonjackson@mail.com',2, TRUE
-- );
-- INSERT INTO applications (
--   participate_id, event_id, description, email, people_number, vaccine
-- ) VALUES (
--   3, 1, 'I am living nearbay and want to join ', 'michaelgray@mail.com',2, TRUE
-- );
-- INSERT INTO applications (
--   participate_id, event_id, description, email, people_number, vaccine
-- ) VALUES (
--   3, 2, 'I am living nearbay and want to join with my kid', 'michaelgray@mail.com',2, TRUE
-- );
-- INSERT INTO applications (
--   participate_id, event_id, description, email, people_number, vaccine
-- ) VALUES (
--   1, 8, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE
-- );
-- INSERT INTO applications (
--   participate_id, event_id, description, email, people_number, vaccine
-- ) VALUES (
--   1, 9, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE
-- );
-- INSERT INTO applications (
--   participate_id, event_id, description, email, people_number, vaccine, status_id
-- ) VALUES (
--   1, 10, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE, 2
-- );
-- INSERT INTO applications (
--   participate_id, event_id, description, email, people_number, vaccine, status_id
-- ) VALUES (
--   1, 11, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE, 2
-- );

-- INSERT INTO applications (
--   participate_id, event_id, description, email, people_number, vaccine, status_id
-- ) VALUES (
--   1, 12, 'I am living nearbay and want to join ', 'tristanjacobs@gmail.com',3, TRUE, 2
-- );





-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
-- )VALUES(
--   1, 'U2 Concert', '210 Huntmar Dr.', 'Stittsville', 'ON', 'Canada', 'K2S 1B9', 45.29441212656311, -75.92586616310209, '2022-05-30', '20:15:00', 5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/800px-Muse_in_Sydney.jpg', 'U2 invites you to enjoy the concert of your life just across the Canadian Tyre Stadium.', 2, 10000, TRUE, TRUE
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
-- )VALUES(
--   1, 'Canada vs USA Football Match', '1000 Palladium Dr', 'Ottawa', 'ON', 'Canada', ' K2V 1A5', 45.29629702389615, -75.92790961311746, '2022-05-15', '19:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Support Canada in its way to 2024 World Cup.', 2, 50000, TRUE, TRUE
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
-- )VALUES(
--   1, 'Huge Discount Event in IKEA', '2685 Iris St',  'Ottawa', 'ON', 'Canada', 'K2C 3S4', 45.350309741131625, -75.78500271604146, '2022-05-11', '8:00:00', 12, 'https://www.ikea.com/images/an-ikea-store-182310c4351f3e9c519ff1ccd1ec0799.jpg?f=s', 'Dont miss out on our many discounted products.', 2, 1000, TRUE, TRUE
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
-- )VALUES(
--   1, '114. Reading Meeting', '277 Sparks St.', 'Ottawa', 'ON', 'Canada', 'K1R 7X9', 45.420269198328576, -75.70368769973133, '2022-04-28', '17:00:00', 3, 'https://stanfordpress.typepad.com/.a/6a00d8342f027653ef01b7c888864a970b-pi', 'Tired of Ottawas noise and unrest. You can find comfort in our reading event in our secluded chamber.', 4, 30, TRUE, TRUE, 2
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
-- )VALUES(
--   1, 'Political Party Meeting', '1 Vimy Pl', 'Ottawa', 'ON', 'Canada', 'L4E 0G1', 45.41542116852221, -75.71897567472406, '2022-05-11', '16:00:00', 2, 'https://images.thestar.com/EqQwuEcT4y2IzeI3kuvLH1RcEsM=/1200x800/smart/filters:cb(1554591676597)/https://www.thestar.com/content/dam/thestar/news/gta/2019/04/06/unions-to-hold-rally-at-ontario-legislature-to-protest-education-cuts/protest_queens_park.jpg', 'We will be meeting in LeBreton Flats Park to protest new government legislation', 2, 20000, FALSE, FALSE, 2
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
-- )VALUES(
--   1, 'Turkish and Chinese Cuisine Tasting', '2121 Carling Ave',  'Ottawa', 'ON', 'Canada', 'K2A 1H2', 45.371902661528516, -75.77016249711713, '2022-05-11', '8:00:00', 12, 'https://www.mashed.com/img/gallery/40-bizarre-foods-you-need-to-try-before-you-die/intro-1581443741.jpg', 'Come join our tasting event in Carlingwood Shopping Centre', 1, 100, FALSE, TRUE, 2
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
-- )VALUES(
--   2, 'Bring Your Own Booty” Dance Party', '12461 Bathurst St', 'Richmond Hill', 'ON', 'Canada', 'L4E 2B4', 43.925410, -79.477040, '2022-06-30', '16:00:00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf6TcgCpBOAEqAX9XWPw4vWwaCQj_aAGJtg&usqp=CAU', 'To connect with Bring your own booty dance party, join Facebook today.', 2, 50, TRUE, TRUE
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
-- )VALUES(
--   2, 'Mummies & Mimosas', '10620 Yonge St', 'Richmond Hill', 'ON', 'Canada', 'L4C 3C8', 43.886051, -79.441841, '2022-06-23', '20:15:00', 5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/800px-Muse_in_Sydney.jpg', ' Bottomless Mimosas and House Margaritas on the rocks as well as brunch full of delicious selections', 1, 100, TRUE, TRUE
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
-- )VALUES(
--   3, 'This is Your Life', '2931 19th Ave', 'Markham', 'ON', 'Canada', 'L6C 1L7', 43.913010, -79.449181, '2022-09-03', '08:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Rand career with help from friends and family.', 4, 5, TRUE, TRUE
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine
-- )VALUES(
--   3, 'Spring To Life', '3255 Hwy 7', 'Markham', 'ON', 'Canada', 'L3R 3P9', 43.849770, 43.849770, '2022-09-03', '08:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Ralph Edwards surpristheir life and career with help from friends and family.', 4, 5, TRUE, TRUE
-- );

-- INSERT INTO events (
--   host_id, event_name, address, city, province, country, post_code, locationLatitude, locationLongitude, date, start_at, duration, photo_image, description, category_id, max_people_number, mask, vaccine, status_id
-- )VALUES(
--   4, 'A Smile As Sweet As Spring', '1631 Rutherford Rd', 'Vaughan', 'ON', 'Canada', 'L4K 0C1', 43.841490, -79.488350, '2022-09-03', '08:00:00', 2, 'https://tot-tmp.azureedge.net/media/41627/gamezero2.jpg?anchor=center&mode=crop&width=750', 'Ralph Edwards surprises unsuspecting celebritieselp from friends and family.', 4, 5, TRUE, TRUE, 2
-- );
