import type {Transaction} from '@rocicorp/zero';
import type {Schema} from './schema';
import type {CustomMutatorDefs} from '@rocicorp/zero';
import type {Context} from './context';

export function createMutators(context: Context | undefined) {
  return {
    albums: {
      create: async (
        tx: Transaction<Schema>,
        data: {
          id: string;
          artistID: string;
          title: string;
          year: number;
          createdAt: number;
        },
      ) => {
        await tx.mutate.albums.insert({
          id: data.id,
          artistId: data.artistID,
          title: data.title,
          releaseYear: data.year,
          createdAt: data.createdAt,
        });
      },
    },
  } as const satisfies CustomMutatorDefs;
}

export type Mutators = ReturnType<typeof createMutators>;
