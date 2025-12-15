import {defineMutator, defineMutators} from '@rocicorp/zero';
import {z} from 'zod';

export const mutators = defineMutators({
  albums: {
    create: defineMutator(
      z.object({
        id: z.string(),
        artistID: z.string(),
        title: z.string(),
        year: z.number(),
        createdAt: z.number(),
      }),
      async ({args, tx, ctx: _ctx}) => {
        await tx.mutate.albums.insert({
          id: args.id,
          artistId: args.artistID,
          title: args.title,
          releaseYear: args.year,
          createdAt: args.createdAt,
          metadata: {
            trackCount: 10,
            duration: 3600,
            releaseDate: new Date(args.year, 0, 1),
          }
        });
      },
    ),
  },
});
