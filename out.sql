-- Drop favorites first
DROP TABLE IF EXISTS "_z_favorites";--> statement-breakpoint

-- Drop albums
DROP TABLE IF EXISTS "_z_albums";--> statement-breakpoint

-- Drop artists
DROP TABLE IF EXISTS "_z_artists";--> statement-breakpoint

-- Drop fans last
DROP TABLE IF EXISTS "_z_fans";--> statement-breakpoint

-- Print a log message :)
DO $$
BEGIN
    RAISE NOTICE '_z_fans, _z_artists, _z_albums, and _z_favorites tables have been dropped. Cleanup complete!';
END $$;
