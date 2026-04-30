CREATE TABLE "albums" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"artist_id" text NOT NULL,
	"release_year" integer NOT NULL,
	"cover_art_url" text,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "artists" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"genre" text NOT NULL,
	"bio" text,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "fans" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "fans_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "favorites" (
	"id" text PRIMARY KEY NOT NULL,
	"fan_id" text NOT NULL,
	"album_id" text NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "albums" ADD CONSTRAINT "albums_artist_id_artists_id_fk" FOREIGN KEY ("artist_id") REFERENCES "public"."artists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fan_id_fans_id_fk" FOREIGN KEY ("fan_id") REFERENCES "public"."fans"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_album_id_albums_id_fk" FOREIGN KEY ("album_id") REFERENCES "public"."albums"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint

-- Seed data for music database

-- Insert fans
INSERT INTO "fans" ("id", "name", "email", "created_at") VALUES
('fan_1', 'Luna Nightshade', 'luna.nightshade@example.com', NOW()),
('fan_2', 'Phoenix Groove', 'phoenix.groove@example.com', NOW()),
('fan_3', 'Melody Stargazer', 'melody.stargazer@example.com', NOW());--> statement-breakpoint

-- Insert artists
INSERT INTO "artists" ("id", "name", "genre", "bio", "created_at") VALUES
('artist_1', 'The Beatles', 'Rock', 'Legendary British rock band from Liverpool', NOW()),
('artist_2', 'Miles Davis', 'Jazz', 'Influential American jazz trumpeter and composer', NOW()),
('artist_3', 'Daft Punk', 'Electronic', 'French electronic music duo known for their innovative sound', NOW()),
('artist_4', 'Adele', 'Pop', 'British singer-songwriter with powerful vocals', NOW());--> statement-breakpoint

-- Insert albums
INSERT INTO "albums" ("id", "title", "artist_id", "release_year", "cover_art_url", "created_at") VALUES
('album_1', 'Abbey Road', 'artist_1', 1969, 'https://example.com/abbey-road.jpg', NOW()),
('album_2', 'Kind of Blue', 'artist_2', 1959, 'https://example.com/kind-of-blue.jpg', NOW()),
('album_3', 'Random Access Memories', 'artist_3', 2013, 'https://example.com/ram.jpg', NOW()),
('album_4', '21', 'artist_4', 2011, 'https://example.com/21.jpg', NOW()),
('album_5', 'Revolver', 'artist_1', 1966, 'https://example.com/revolver.jpg', NOW());--> statement-breakpoint

-- Insert favorites
INSERT INTO "favorites" ("id", "fan_id", "album_id", "created_at") VALUES
('fav_1', 'fan_1', 'album_1', NOW()),
('fav_2', 'fan_1', 'album_4', NOW()),
('fav_3', 'fan_2', 'album_2', NOW()),
('fav_4', 'fan_2', 'album_3', NOW()),
('fav_5', 'fan_3', 'album_3', NOW()),
('fav_6', 'fan_3', 'album_5', NOW());
