import { createTRPCReact } from '@trpc/react-query'

import type { AppRouter } from '@ntw/server/src/@generated/server'

export const trpc = createTRPCReact<AppRouter>()
