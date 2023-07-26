import { FastifyInstance } from 'fastify'

export async function pingRoutes(app: FastifyInstance) {
  app.get('/', () => {
    return {
      pong: true,
    }
  })
}
