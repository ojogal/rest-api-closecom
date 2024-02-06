import { Router } from "express"
import opportunitiesRouter from "./opportunities.js"
import { getPipelines, showPipeline } from "#app/controllers/pipelines.js"
import { safely } from "../utils/safely.js"

const pipelinesRouter = Router({ mergeParams: true });

pipelinesRouter.get("/", safely(getPipelines));
pipelinesRouter.get("/:pipelineId", safely(showPipeline));
pipelinesRouter.use("/:pipelineId/opportunities", opportunitiesRouter);

export default pipelinesRouter;