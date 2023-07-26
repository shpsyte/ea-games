import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prima'
import { z } from 'zod'

enum States {
  'planned' = 'planned',
  'ongoing' = 'on going',
  'onhold' = 'on hold',
  'done' = 'done',
}

export async function taskRoutes(app: FastifyInstance) {
  app.get('/tasks/all', async () => {
    const task = await prisma.task.findMany({
      orderBy: [
        {
          title: 'asc',
        },
        {
          createdAt: 'desc',
        },
      ],
    })

    return task.map((task) => ({
      id: task.id,
      title: task.title,
      createdAt: task.createdAt,
      done: task.done,
      state: task.state,
    }))
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

    const where = {
      state,
      title: {
        contains: q,
      },
    }
    try {
      const total = await prisma.task.count({
        where,
      })

      const task = await prisma.task.findMany({
        where,
        skip: Number(skip),
        take: Number(take),
        orderBy: [
          {
            title: 'asc',
          },
          {
            createdAt: 'desc',
          },
        ],
      })

      const tasks = task.map((task) => ({
        id: task.id,
        title: task.title,
        createdAt: task.createdAt,
        done: task.done,
      }))

      return {
        total,
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
      state: z.string().refine((state) => {
        return state in States
      }),
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
      state: z.string().refine((state) => {
        return state in States
      }),
    })

    const { done, state } = bodySchema.parse(req.body)

    let task = await prisma.task.findUniqueOrThrow({
      where: {
        id,
      },
    })

    task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        done: done ?? task.done,
        state: state ?? task.state,
      },
    })

    return task
  })
}
