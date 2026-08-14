---
name: update-tutorial-branches
description: Use ONLY when updating zero-music's 0-start, 1-install, and 2-deploy branch stack, including dependency backports, Zero version bumps, and Docker image pins.
---

# Update Tutorial Branches

Keep the tutorial history shaped like this:

```text
0-start
  -> 1-install (one commit that adds Zero)
    -> 2-deploy (one commit that adds Docker Compose)
```

## Workflow

1. Fetch `origin`, require a clean worktree, and record the current tips of all three branches.
2. Create an `0xcadams/<name>` branch from `origin/0-start`.
3. Backport only changes shared by every tutorial stage. Do not add Zero dependencies to `0-start`.
4. Regenerate `bun.lock`, run the checks below, create a signed commit, push it, and open a PR targeting `0-start`.
5. Stop until that PR lands. Fetch again and use the actual new `origin/0-start` tip, since merging may change the commit hash.
6. Rebuild `1-install` on that tip as exactly one signed commit. Fold in the applicable update, pin the requested Zero version in every package manifest, and regenerate `bun.lock`.
7. Inspect the complete diff, then update `origin/1-install` with `git push --force-with-lease`.
8. Rebase the single `2-deploy` commit onto the rewritten `1-install` tip.
9. Pin every `rocicorp/zero` Docker image to the requested version and fold those edits into the deployment commit.
10. Run the checks below, then update `origin/2-deploy` with `git push --force-with-lease`.

## Checks

Run on each applicable branch:

```sh
bun install --frozen-lockfile
bunx prettier --check .
bun run build
```

On `2-deploy`, also validate every Docker Compose file with `docker compose -f <file> config --quiet`.

Confirm that `1-install` is one commit ahead of `0-start`, `2-deploy` is one commit ahead of `1-install`, and all package and Docker references use the requested Zero version.

## Safety

- Never push directly to `0-start`; land its change through a PR.
- Never rewrite downstream branches before the `0-start` PR lands.
- Never use plain `--force`; use `--force-with-lease` with the expected remote tip.
- Keep commits signed.
- Preserve unrelated worktree changes and experimental branches.
