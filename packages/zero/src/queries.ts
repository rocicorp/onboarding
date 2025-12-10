import {defineQueries, defineQuery} from '@rocicorp/zero';
import {z} from 'zod';
import {zql} from './schema';

export const queries = defineQueries({
  albumsByArtist: defineQuery(z.object({artistID: z.string()}), ({args}) =>
    zql.albums
      .where('artistId', args.artistID)
      .orderBy('createdAt', 'asc')
      .limit(10)
      .related('artist', q => q.one()),
  ),
});
