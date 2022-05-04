import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index";
import path from "path";

const app = express();
const port = 3000;
const appRoot = path.resolve("./");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response): void => {
    res.sendFile("assets/templates/index.html", { root: appRoot });
});

app.use("/api", routes);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;
