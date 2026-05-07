
export class InvalidShapeParamError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidShapeParamError";
    }
}