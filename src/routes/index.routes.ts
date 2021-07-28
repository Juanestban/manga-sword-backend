import { Router, Request, Response } from 'express'
import TestTableModel, { TestTable } from '../models/TestTable'

const router: Router = Router()

router.get(
  '/',
  async (_: Request, res: Response): Promise<Response<TestTable>> => {
    try {
      const resultTable: Array<TestTable> = await TestTableModel.find()
      return res.json(resultTable)
    } catch (e) {
      return res.json({
        error: true,
        message: 'has be an error',
        stackTrace: e,
      })
    }
  }
)

export { router }
