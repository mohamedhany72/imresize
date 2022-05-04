import express from "express";
import images from "./images/images";

const routes: express.Router = express.Router();

routes.get("/", (req: express.Request, res: express.Response): void => {
    res.send("main api rout");
});

routes.use("/images", images);

export default routes;
