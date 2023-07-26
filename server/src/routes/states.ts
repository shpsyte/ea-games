import { FastifyInstance } from 'fastify'

export async function stateRoutes(app: FastifyInstance) {
  app.get('/states', () => {
    return [
      {
        id: 'planned',
        show: true,
        config: { name: 'To do', orderBy: 'title', isDone: false },
      },
      {
        id: 'ongoing',
        show: true,
        config: { name: 'In Progress', orderBy: 'title', isDone: false },
      },
      {
        id: 'onhold',
        show: false,
        config: { name: 'On hold', orderBy: 'title', isDone: false },
      },
      {
        id: 'done',
        show: true,
        config: { name: 'Done', orderBy: 'doneAt', isDone: true },
      },
    ]
  })
}
