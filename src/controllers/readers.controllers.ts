import PrincipalController from '../lib/PrincipalController'
import { ReaderModel } from '../models/Reader'

class ReadersController extends PrincipalController {
  constructor() {
    super(ReaderModel)
  }
}

export const readersControllers = new ReadersController()
