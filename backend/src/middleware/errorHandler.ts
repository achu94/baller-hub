import type { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.message = err.message || 'Something went wrong';
    err.status = err.status || 500;

    console.log(err.message);

    res.status(err.status).send({ error: err });
};

export default errorHandler;
