import { Router } from 'express'
import { readersControllers } from '../controllers/readers.controllers'

const router = Router()

// get alls readers
router.get('/readers', readersControllers.findAll)

// get one reader by id
router.get('/readers/:id', readersControllers.findById)

// create a new reader
router.post('/readers', readersControllers.create)

// update some reader
router.put('/readers/:id', readersControllers.update)

// delete some reader
router.delete('/readers/:id', readersControllers.delete)

export default router
