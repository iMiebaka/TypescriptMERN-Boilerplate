class NotFoundError extends Error {
    code: number;

    constructor(message: string) {
        super(message);
        this.code = 404;
    }
}


class ServerError extends Error {
    code: number;

    constructor(message: string) {
        super(message);
        this.code = 400;
    }
}


class NotAllowed extends Error {
    code: number;

    constructor(message: string) {
        super(message);
        this.code = 400;
    }
}


export { NotAllowed, NotFoundError, ServerError }