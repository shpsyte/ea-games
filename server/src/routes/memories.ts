import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prima'
import { z } from 'zod'

export async function taskRoutes(app: FastifyInstance) {
  app.get('/tasks', async (request, reply) => {
    const task = await prisma.task.findMany()
    return task
  })
}
