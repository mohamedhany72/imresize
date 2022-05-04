import express from "express";
import path from "path";
import paramValidator from "../../util/imageAPI/paramValidator";
import imgExists from "../../util/imageAPI/imageExists";
import imageResize from "../../util/imageAPI/imageTransform";
import fs from "fs";

const images: express.Router = express.Router();
const appRoot = path.resolve("./");

images.get(
    "/:filename",
    imgExists,
    (req: express.Request, res: express.Response): void => {
        const filename = req.params.filename;
        const path = "assets/images/full/" + filename + ".jpg";
        res.sendFile(path, { root: appRoot });
    }
);

images.get(
    "/:filename/:width/:height",
    imgExists,
    paramValidator,
    async (req: express.Request, res: express.Response): Promise<void> => {
        const filename = req.params.filename;
        const width = parseInt(req.params.width);
        const height = parseInt(req.params.height);

        const newPath =
            "/assets/images/thumbnails/" +
            filename +
            "_thumb_" +
            width +
            "x" +
            height +
            ".jpg";

        // to check if image do exist, if so it will send it without resizing it again
        if (fs.existsSync(appRoot + newPath)) {
            res.sendFile(newPath, { root: appRoot });
        } else {
            try {
                const newPath = await imageResize(filename, width, height);
                res.sendFile(newPath, { root: appRoot });
            } catch {
                res.status(500).send("something went wrong");
            }
        }
    }
);

export default images;
