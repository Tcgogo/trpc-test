import { procedure, router } from '@libs/trpc';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const PostRouter = router({
  post: router({
    list: procedure.query(async () => await sleep(1000)),
  }),
});
