import { Request, Response, NextFunction } from 'express'

export const handlerNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res
    .status(404)
    .json({ message: `the pathname: [${req.path}] hasn't exit` })
    .end()
}
