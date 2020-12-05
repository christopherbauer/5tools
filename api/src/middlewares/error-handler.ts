import { NextFunction, Request, Response } from "express";
import { CustomError } from '../errors/custom-error';

export const errorHandler = (err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof CustomError) {
        return response.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    
    // console.error(err);
    response.status(400).send({
        errors: [ { message: "Something went wrong" } ]
    });
}