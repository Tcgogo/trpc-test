import { createTRPCReact } from '@trpc/react-query'

import type { AppRouter } from '@ntw/server/src/router'

export const trpc = createTRPCReact<AppRouter>()
