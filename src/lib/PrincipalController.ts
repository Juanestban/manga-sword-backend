import { Request, Response, NextFunction } from 'express'
import { Model, Document } from 'mongoose'
import { Controller } from '../models/Controller'

type ModelMongoose = Model<Document, {}, {}>

export default class PrincipalController implements Controller {
  private SchemeMongo: ModelMongoose

  constructor(schemeMongo: ModelMongoose) {
    this.SchemeMongo = schemeMongo
  }

  findAll = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const arraysObjects = await this.SchemeMongo.find()
      return res.status(200).json(arraysObjects).end()
    } catch (e) {
      next(e)
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const object = await this.SchemeMongo.findById(id)

      if (object) return res.status(200).json(object).end()
      return res.status(404).json({ message: "this id hasn't exist" }).end()
    } catch (e) {
      next(e)
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req
      const createdObject = new this.SchemeMongo(body)
      const savedObject = await createdObject.save()

      return res.status(200).json(savedObject).end()
    } catch (e) {
      next(e)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params } = req
      const { id } = params
      const updatedObject = await this.SchemeMongo.findByIdAndUpdate(id, body, {
        new: true,
      })

      if (updatedObject) return res.status(200).json(updatedObject).end()
      return res.status(404).json({ message: "this id hasn't exist" }).end()
    } catch (e) {
      next(e)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const deletedObject = await this.SchemeMongo.findByIdAndDelete(id)

      if (deletedObject) return res.status(204).json(deletedObject).end()
      return res.status(404).json({ message: "this is hasn't exist" }).end()
    } catch (e) {
      next(e)
    }
  }
}
