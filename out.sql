-- Drop favorites first
DROP TABLE IF EXISTS "public"."_z_favorites" CASCADE;--> statement-breakpoint

-- Drop albums
DROP TABLE IF EXISTS "public"."_z_albums" CASCADE;--> statement-breakpoint

-- Drop artists
DROP TABLE IF EXISTS "public"."_z_artists" CASCADE;--> statement-breakpoint

-- Drop fans last
DROP TABLE IF EXISTS "public"."_z_fans" CASCADE;--> statement-breakpoint

-- Print a log message :)
DO $$
BEGIN
    RAISE NOTICE '_z_fans, _z_artists, _z_albums, and _z_favorites tables have been dropped. Cleanup complete!';
END $$;
