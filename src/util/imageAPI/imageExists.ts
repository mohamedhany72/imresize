import { access } from "fs/promises";
import { constants } from "fs";
import express from "express";

// code block from nodejs.org documentation
// https://nodejs.org/api/fs.html#fspromisesaccesspath-mode

const imgExists = async (
    req: express.Request,
    res: express.Response,
    next: Function
): Promise<void> => {
    const filename = req.params.filename;
    const path = "assets/images/full/" + filename + ".jpg";
    try {
        await access(path, constants.R_OK | constants.W_OK);
        next();
    } catch {
        res.status(404).send(`file: "${filename}" not found`);
    }
};

export default imgExists;
