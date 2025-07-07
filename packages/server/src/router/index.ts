import { mergeRouters } from '@libs/trpc';
import { UserRouter } from './user.router';
import { PostRouter } from './post.router';

export const appRouter = mergeRouters(UserRouter, PostRouter);

type AppRouter = typeof appRouter;

export type { AppRouter };
