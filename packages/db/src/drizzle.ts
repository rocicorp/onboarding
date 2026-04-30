import {relations} from 'drizzle-orm';
import {integer, pgTable, text, timestamp} from 'drizzle-orm/pg-core';

export const fans = pgTable('fans', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').notNull(),
});

export const artists = pgTable('artists', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  genre: text('genre').notNull(),
  bio: text('bio'),
  createdAt: timestamp('created_at').notNull(),
});

export const albums = pgTable('albums', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  artistId: text('artist_id')
    .notNull()
    .references(() => artists.id),
  releaseYear: integer('release_year').notNull(),
  coverArtUrl: text('cover_art_url'),
  createdAt: timestamp('created_at').notNull(),
});

export const favorites = pgTable('favorites', {
  id: text('id').primaryKey(),
  fanId: text('fan_id')
    .notNull()
    .references(() => fans.id),
  albumId: text('album_id')
    .notNull()
    .references(() => albums.id),
  createdAt: timestamp('created_at').notNull(),
});

export const fansRelations = relations(fans, ({many}) => ({
  favorites: many(favorites),
}));

export const artistsRelations = relations(artists, ({many}) => ({
  albums: many(albums),
}));

export const albumsRelations = relations(albums, ({one, many}) => ({
  artist: one(artists, {
    fields: [albums.artistId],
    references: [artists.id],
  }),
  favorites: many(favorites),
}));

export const favoritesRelations = relations(favorites, ({one}) => ({
  fan: one(fans, {
    fields: [favorites.fanId],
    references: [fans.id],
  }),
  album: one(albums, {
    fields: [favorites.albumId],
    references: [albums.id],
  }),
}));
