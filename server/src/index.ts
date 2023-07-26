import 'dotenv/config'
import cors from '@fastify/cors'
import fastify from 'fastify'
import { pingRoutes } from './routes/ping'
import { taskRoutes } from './routes/task'
import { stateRoutes } from './routes/states'
import serverless from 'serverless-http'
const app = fastify()

app.register(cors, {
  origin: '*',
})
app.register(pingRoutes)
app.register(taskRoutes)
app.register(stateRoutes)

const port = (process.env.PORT || 3333) as number
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 HTTP server running on http://localhost:${port}`)
  })

// @ts-ignore
module.exports.handler = serverless(app)
