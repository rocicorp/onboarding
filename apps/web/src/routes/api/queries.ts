import { type ReadonlyJSONValue } from '@rocicorp/zero'
import { handleGetQueriesRequest } from '@rocicorp/zero/server'
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'
import { queries, schema } from '@zero-onboarding/zero'

export const Route = createFileRoute('/api/queries')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const authData = {} // TODO: Add auth data

        const result = await handleGetQueriesRequest(
          (name, args) => {
            const query = getQuery(name, args)
            return { query }
          },
          schema,
          request,
          authData,
        )

        console.log(JSON.stringify(result, null, 2))

        return json(result)
      },
    },
  },
})

const validatedQueries = Object.fromEntries(
  Object.values(queries).map((q) => [q.queryName, q]),
)

function getQuery(name: string, args: readonly ReadonlyJSONValue[]) {
  if (name in validatedQueries) {
    const q = validatedQueries[name]
    return q(...(args as Parameters<typeof q>))
  }
  throw new Error(`Unknown query: ${name}`)
}
