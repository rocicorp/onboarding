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
          transact =>
            transact((tx, name, args) => {
              const mutator = mustGetMutator(mutators, name);
              return mutator.fn({args, tx, ctx: {userId: 'anon'}});
            }),
          request,
        );

        return json(result);
      },
    },
  },
});
