import { defineQuery } from "@rocicorp/zero";
import { builder } from "./schema";

export const queries = {
  user: defineQuery("user", () =>
    builder.users.where("id", userID ?? "").one()
  ),
};
