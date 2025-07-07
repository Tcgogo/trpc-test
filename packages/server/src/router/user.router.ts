import { procedure, router } from '@libs/trpc';
import { UserService } from '@app/user/user.service';
import { z } from 'zod';

export const UserRouter = router({
  user: router({
    greeting: procedure
      .input(
        z.object({
          name: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        const greeting = await ctx.inject(UserService);
        return greeting.getHello(input.name);
      }),
  }),
});
