import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  userInfo: t.router({
    findAll: publicProcedure.input(z.object({ name: z.string(), age: z.number() })).output(z.object({
      name: z.string(),
      age: z.number()
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

