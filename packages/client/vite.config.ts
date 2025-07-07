import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mockjs from 'mockjs'
import url from 'node:url'
import path from 'node:path'

const viteMockService: () => PluginOption = () => {
  return {
    name: 'vite-mock-service',
    configureServer(server) {
      server.middlewares.use('/api/list', (req, res) => {
        const parseUrl = url.parse(req.originalUrl, true).query;
        res.setHeader('Content-Type', 'application/json')
        const mock = mockjs.mock({
          'list|1000': [{
            'id|+1': 1,
            'name': parseUrl.keyword,
            'age|18-28': 1,
            'address': '@county(true)'
          }]
        })

        res.end(JSON.stringify(mock))
      }
      )
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@trpc/context': path.resolve(__dirname, 'src/widgets/tRPCContext/context.ts'),
    }
  },
  plugins: [react(), viteMockService()],
})
