import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('Class middleware ran');
    // return res.status(403).json({
    //   message: "You've no token",
    // });
    next();
  }
}

export function ApiTokenCheckMiddlewareFn(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // console.log('Functional middleware ran');
  next();
}
