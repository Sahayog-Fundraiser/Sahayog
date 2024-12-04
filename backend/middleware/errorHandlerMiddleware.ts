import { NextFunction, Request, Response } from "express";

const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = res.statusCode ? res.statusCode : 500;
  return res.status(status).json({
    message: err.message,
    stack: err.stack,
  });
};

export default errorHandlerMiddleware;
