import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// i need this to augment req. because req:Request already defiend and i am trying to add a new property
interface UserPayload {
  id: string;
  email: string;
}
//this is how we reach out to existing type definition and make a modification to it. we did not extend Request
declare global {
  namespace Express {
    interface Request {
      // currentUser might not be defined if it is not logged in
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // this expands ts to 2 separate checks. makes sure session is defined, if it is access to .jwt
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    // req:Request type already defined and we are trying to add a new property to it. ts is complaining
    req.currentUser = payload;
  } catch (err) {}
  next();
};
