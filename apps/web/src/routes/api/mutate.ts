import {createFileRoute} from '@tanstack/react-router';
import {json} from '@tanstack/react-start';
import {handleMutateRequest} from '@rocicorp/zero/server';
import {mutators} from '@zero-onboarding/zero';
import {dbProvider} from '../../db-provider.ts';
import {mustGetMutator} from '@rocicorp/zero';

export const Route = createFileRoute('/api/mutate')({
  server: {
    handlers: {
      POST: async ({request}) => {
        const result = await handleMutateRequest(
          dbProvider,
          async (transact, mutation) => {
            // Run any external API validation/checks before the db tx.
            // If you throw here, the mutation will be rejected.

            const result = await transact(async tx => {
              const mutator = mustGetMutator(mutators, mutation.name);
              return mutator.fn({
                args: mutation.args,
                tx,
                ctx: {userId: 'anon'},
              });
            });

            // Run "fire and forget" work here, like sending
            // notifications/analytics. If you throw here,
            // it will be logged but won't change the mutation result.

            return result;
          },
          request,
        );

        return json(result);
      },
    },
  },
});
