import { NextFunction, Request, Response } from 'express';
import {verify} from 'jsonwebtoken';

import authConfig from '../config/auth'

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void{
  const authHeader = request.headers.authorization;

  if (!authHeader){
    throw new Error('JWT token is missing');
  }

  //*Bearer shuadhashuda(codigo secreto)

  //*se tem virgula sem nada é porque não vai ser utilizado
  const [, token] = authHeader.split('');

  try{
    const decoded = verify(token, authConfig.jwt.secret)

    console.log(decoded)
    return next();
  }catch(err){
    throw new Error('Invalid JWT token');
  }

}


