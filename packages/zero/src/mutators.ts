import {defineMutator, defineMutators} from '@rocicorp/zero';
import {z} from 'zod';
import {crud} from './schema';

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
        await tx.mutate(
          crud.albums.insert({
            id: args.id,
            artistId: args.artistID,
            title: args.title,
            releaseYear: args.year,
            createdAt: args.createdAt,
          }),
        );
      },
    ),
  },
});
