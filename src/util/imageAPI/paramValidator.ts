import express from "express";

const paramValidator = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    const width = +req.params.width;
    const height = +req.params.height;
    if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
        res.status(404).send("bad url parameters");
    } else {
        next();
    }
};

export default paramValidator;
