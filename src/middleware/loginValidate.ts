import { ErrorRequestHandler } from 'express';

const errorMiddleware:ErrorRequestHandler = (error:unknown, _req, res, _next) => {
  if (error instanceof Error && error.message === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(500).json({ message: 'Internal server error' });
};

export default errorMiddleware;