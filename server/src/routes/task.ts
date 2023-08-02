import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prima'
import { z } from 'zod'

async function filterState(
  state: string,
  take: number,
  skip: number,
  title?: string,
) {
  const data = await prisma.task.findMany({
    where: {
      state,
      title: {
        contains: title,
      },
    },
    take,
    skip,
    orderBy: [state === 'done' ? { doneAt: 'desc' } : { title: 'asc' }],
  })

  return data.map((task) => ({
    id: task.id,
    title: task.title,
    createdAt: task.createdAt,
    done: task.done,
    state: task.state,
    doneAt: task.doneAt,
  }))
}

export async function taskRoutes(app: FastifyInstance) {
  app.get('/tasks/all/:title', async (req) => {
    // get max 10 tasks by column
    const paramsSchema = z.object({
      title: z.string().optional(),
    })

    const { title } = paramsSchema.parse(req.params)

    const result = {
      planned: await filterState('planned', 100, 0, title),
      ongoing: await filterState('ongoing', 100, 0, title),
      onhold: await filterState('onhold', 100, 0, title),
      done: await filterState('done', 10, 0, title),
    }

    return [
      ...result.planned,
      ...result.ongoing,
      ...result.onhold,
      ...result.done,
    ]
  })

  app.get('/tasks/:state/:skip/:take/:q?', async (req, res) => {
    const paramsSchema = z.object({
      state: z.string().toLowerCase(),
      take: z.string(),
      skip: z.string(),
      q: z.string().optional(),
    })

    // making sure that the state is valid
    const { state, skip = '0', take = '10', q } = paramsSchema.parse(req.params)

    try {
      const task = await filterState(state, Number(take), Number(skip), q)

      const tasks = task.map((task) => ({
        id: task.id,
        title: task.title,
        createdAt: task.createdAt,
        done: task.done,
        doneAt: task.doneAt,
        state: task.state,
      }))

      return {
        total: 0,
        tasks,
      }
    } catch (error) {
      return res.status(400).send({
        error: 'Bad request',
      })
    }
  })

  app.post('/task', async (req, res) => {
    const bodySchema = z.object({
      title: z.string().min(1),
      state: z.string(),
    })

    try {
      // eslint-disable-next-line no-var
      var { title, state } = bodySchema.parse(req.body)
    } catch (e) {
      const error = e instanceof z.ZodError ? e : 'Bad request'

      return res.status(400).send({
        error,
      })
    }

    const taskModel = {
      title,
      state,
      done: false,
    }

    const task = await prisma.task.create({
      data: taskModel,
    })

    return task
  })

  app.delete('/task/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    try {
      const { id } = paramsSchema.parse(req.params)

      await prisma.task.findFirstOrThrow({
        where: {
          id,
        },
      })

      await prisma.task.delete({
        where: {
          id,
        },
      })

      return true
    } catch (e) {
      const error = e instanceof z.ZodError ? e : 'Task Not found'

      return res.status(400).send({
        error,
      })
    }
  })

  app.delete('/task/all', async () => {
    // protect the route with a secret
    // if (req.headers['x-secret'] !== process.env.SECRET) {
    //   return res.status(401).send({
    //     error: 'Unauthorized',
    //   })
    // }

    await prisma.task.deleteMany()

    return true
  })

  app.put('/task/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      done: z.boolean(),
      state: z.string(),
    })

    const { done, state } = bodySchema.parse(req.body)

    let task = await prisma.task.findUniqueOrThrow({
      where: {
        id,
      },
    })

    const isDone = done ?? task.done
    const doneAt = done ? new Date() : null

    task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        done: isDone,
        doneAt,
        state: state ?? task.state,
      },
    })

    return task
  })
}
