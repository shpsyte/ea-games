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
app.register(stateRoutes)
app.register(taskRoutes)

const port = Number(process.env.PORT || 3333)

app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 HTTP server running on http://localhost:${port}`)
  })
