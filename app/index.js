import express from "express"
import pipelinesRouter from "#app/routes/pipelines.js"

export const bootstrap = () => {
    const app = express();

    app.use("/pipelines", pipelinesRouter);

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send("Internal server error");
    })

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server started on PORT http://localhost:${process.env.PORT || 3000}`);
    })

    return app;
}