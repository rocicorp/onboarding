import {defineQuery} from '@rocicorp/zero';
import {z} from 'zod';
import {zql} from './schema';

export const queries = {
  albumsByArtist: defineQuery(
    'albumsByArtist',
    {
      validator: z.object({artistID: z.string()}),
    },
    ({args: {artistID}}) =>
      zql.albums
        .where('artistId', artistID)
        .orderBy('createdAt', 'asc')
        .limit(10),
  ),
};
