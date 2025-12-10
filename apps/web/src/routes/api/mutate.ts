import {mustGetMutator} from '@rocicorp/zero';
import {handleMutateRequest} from '@rocicorp/zero/server';
import {createFileRoute} from '@tanstack/react-router';
import {json} from '@tanstack/react-start';
import {mutators} from '@zero-onboarding/zero';
import {dbProvider} from '../../db-provider.ts';

export const Route = createFileRoute('/api/mutate')({
  server: {
    handlers: {
      POST: async ({request}) => {
        const result = await handleMutateRequest(
          dbProvider,
          async (transact, mutation) => {
            const result = await transact(async tx => {
              const mutator = mustGetMutator(mutators, mutation.name);
              return mutator.fn({
                args: mutation.args,
                tx,
                ctx: {userId: 'anon'},
              });
            });

            return result;
          },
          request,
        );

        return json(result);
      },
    },
  },
});
