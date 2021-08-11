import { Router, Request, Response } from 'express'
import readersRouter from './readers.routes'
import { handlerNotFound } from '../middlewares/handlerNotFound'
import { handlerErrors } from '../middlewares/handlerErrors'

const router: Router = Router()

router.get('/', async (_: Request, res: Response): Promise<Response<any>> => {
  try {
    return res.json({ ok: true, message: 'Hello, world!' })
  } catch (e) {
    return res.json({
      error: true,
      message: 'has be an error',
      stackTrace: e,
    })
  }
})

router.use(readersRouter)

// middleware when url hasn't exist
router.use(handlerNotFound)

// middleware handler error
router.use(handlerErrors)

export { router }
