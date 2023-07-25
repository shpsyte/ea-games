import { FastifyInstance } from 'fastify'

export async function pingRoutes(app: FastifyInstance) {
  app.get('/ping', () => {
    return 'the server is running'
  })
}
