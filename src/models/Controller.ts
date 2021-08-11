import { NextFunction, Request, Response } from 'express'

export interface Controller {
  findAll(
    req: Request,
    res: Response,
    next?: NextFunction
  ): Promise<Response | void>
  findById(
    req: Request,
    res: Response,
    next?: NextFunction
  ): Promise<Response | void>
  create(
    req: Request,
    res: Response,
    next?: NextFunction
  ): Promise<Response | void>
  update(
    req: Request,
    res: Response,
    next?: NextFunction
  ): Promise<Response | void>
  delete(
    req: Request,
    res: Response,
    next?: NextFunction
  ): Promise<Response | void>
}
