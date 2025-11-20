import type { Transaction } from "@rocicorp/zero";
import type { Schema } from "./schema";
import type { CustomMutatorDefs } from "@rocicorp/zero";
import type { Context } from "./context";

export function createMutators(context: Context) {
  return {
    user: {
      someMutator: async (
        _tx: Transaction<Schema>,
        _: { email: string }
      ) => {
        if (!context.userId) {
          throw new Error("Not authenticated");
        }
      },
    },
  } as const satisfies CustomMutatorDefs;
}

export type Mutators = ReturnType<typeof createMutators>;
