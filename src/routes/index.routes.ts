import { Router, Request, Response } from 'express'

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

export { router }
