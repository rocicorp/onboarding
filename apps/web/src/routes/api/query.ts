import {mustGetQuery} from '@rocicorp/zero';
import {handleQueryRequest} from '@rocicorp/zero/server';
import {createFileRoute} from '@tanstack/react-router';
import {queries, schema} from '@zero-music/zero';

export const Route = createFileRoute('/api/query')({
  server: {
    handlers: {
      POST: async ({request}) => {
        const result = await handleQueryRequest(
          (name, args) => {
            const query = mustGetQuery(queries, name);
            return query.fn({args});
          },
          schema,
          request,
        );

        return Response.json(result);
      },
    },
  },
});
