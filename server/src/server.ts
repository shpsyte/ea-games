import 'dotenv/config'
import cors from '@fastify/cors'
import fastify from 'fastify'
import { pingRoutes } from './routes/ping'
import { taskRoutes } from './routes/task'
import { stateRoutes } from './routes/states'

const app = fastify()

app.register(cors, {
  origin: '*',
})
app.register(pingRoutes)
app.register(taskRoutes)
app.register(stateRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
