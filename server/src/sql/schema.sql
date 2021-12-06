-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL,
	artist text NOT NULL,
	album text NOT NULL,
	difficulty text NOT NULL
);

INSERT INTO songs (id, song_title, notes, artist, album, difficulty) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4', 'Blue Claw Philharmonic', 'Classical (Remix)', 'Medium');

INSERT INTO songs (id, song_title, notes, artist, album, difficulty) 
VALUES (2, 'London Bridge Is Falling Down', 'G4 A4 G4 F4 E4 F4 G4 D4 E4 F4 E4 F4 G4', 'Unknown', 'Classic Children Sing-A-Long', 'Easy');

INSERT INTO songs (id, song_title, notes, artist, album, difficulty) 
VALUES (3, 'Jingle Bells', 'E4 E4 E4 E4 E4 E4 E4 G4 C4 D4 E4', 'Kevin MacLeod', 'A Christmas Album', 'Easy');

INSERT INTO songs (id, song_title, notes, artist, album, difficulty) 
VALUES (4, 'Twinkle Twinkl Little Star', 'C4 C4 G4 G4 A4 A4 G4 F4 F4 E4 E4 D4 D4 C4', 'Little Baby Bum', 'Kids Songs', 'Easy');

INSERT INTO songs (id, song_title, notes, artist, album, difficulty) 
VALUES (5, 'Happy Birthday', 'D4 D4 E4 D4 G4 F4 D4 D4 E4 D4 A4 G4', 'Patty Hill', 'Birthday Fun', 'Easy');

INSERT INTO songs (id, song_title, notes, artist, album, difficulty) 
VALUES (6, 'River Flows In You', 'A4 G4 A4 G4 A4 E4 A4 D4 A4 C4 A4 G4 A4 G4 A4 E4 A4 D4', 'Yiruma', 'Piano Music', 'Medium');
