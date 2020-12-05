import { CustomError } from "./custom-error";

export class InvalidOperationError extends CustomError {
    statusCode = 400;
    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, InvalidOperationError.prototype);
    }
    serializeErrors(): { message: string; }[] {
        return [ {
            message: this.message
        } ];
    }
}