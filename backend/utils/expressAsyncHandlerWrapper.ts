import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const asyncHandlerWrapper = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return asyncHandler(fn);
};
