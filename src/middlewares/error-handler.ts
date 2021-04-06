import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  // this is for debugging. In case I forgot some error
  console.error(err);
  res.status(400).send({ message: "Unexpected Error" });
};
