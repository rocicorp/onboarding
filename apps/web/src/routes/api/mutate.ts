import { type ReadonlyJSONValue } from '@rocicorp/zero'
import { handleMutationRequest, PushProcessor } from '@rocicorp/zero/server'
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'
import {
  createMutators,
  queries,
  schema,
} from '@tutorial-tanstack-drizzle/zero'
import { zeroDrizzle } from '@rocicorp/zero/server/adapters/drizzle'
import { db } from '@tutorial-tanstack-drizzle/db'

const processor = new PushProcessor(zeroDrizzle(schema, db))

export const Route = createFileRoute('/api/mutate')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const result = await processor.process(
          createMutators(undefined),
          request,
        )

        return json(result)
      },
    },
  },
})
