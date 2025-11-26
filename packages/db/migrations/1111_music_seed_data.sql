-- Seed data for Spotify-themed database

-- Insert users
INSERT INTO "users" ("id", "name", "email", "created_at") VALUES
('user_1', 'Luna Nightshade', 'luna.nightshade@example.com', NOW()),
('user_2', 'Phoenix Groove', 'phoenix.groove@example.com', NOW()),
('user_3', 'Melody Stargazer', 'melody.stargazer@example.com', NOW());

-- Insert artists
INSERT INTO "artists" ("id", "name", "genre", "bio", "created_at") VALUES
('artist_1', 'The Beatles', 'Rock', 'Legendary British rock band from Liverpool', NOW()),
('artist_2', 'Miles Davis', 'Jazz', 'Influential American jazz trumpeter and composer', NOW()),
('artist_3', 'Daft Punk', 'Electronic', 'French electronic music duo known for their innovative sound', NOW()),
('artist_4', 'Adele', 'Pop', 'British singer-songwriter with powerful vocals', NOW());

-- Insert albums
INSERT INTO "albums" ("id", "title", "artist_id", "release_year", "cover_art_url", "created_at") VALUES
('album_1', 'Abbey Road', 'artist_1', 1969, 'https://example.com/abbey-road.jpg', NOW()),
('album_2', 'Kind of Blue', 'artist_2', 1959, 'https://example.com/kind-of-blue.jpg', NOW()),
('album_3', 'Random Access Memories', 'artist_3', 2013, 'https://example.com/ram.jpg', NOW()),
('album_4', '21', 'artist_4', 2011, 'https://example.com/21.jpg', NOW()),
('album_5', 'Revolver', 'artist_1', 1966, 'https://example.com/revolver.jpg', NOW());

-- Insert favorites
INSERT INTO "favorites" ("id", "user_id", "album_id", "created_at") VALUES
('fav_1', 'user_1', 'album_1', NOW()),
('fav_2', 'user_1', 'album_4', NOW()),
('fav_3', 'user_2', 'album_2', NOW()),
('fav_4', 'user_2', 'album_3', NOW()),
('fav_5', 'user_3', 'album_3', NOW()),
('fav_6', 'user_3', 'album_5', NOW());
