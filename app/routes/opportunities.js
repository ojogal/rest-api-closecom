import { Router } from "express"
import { getOpportunities, showOpportunity } from "#app/controllers/opportunities.js"
import { safely } from "../utils/safely.js"

const opportunitiesRouter = Router({ mergeParams: true });

opportunitiesRouter.get("/", safely(getOpportunities));
opportunitiesRouter.get("/:opportunityId", safely(showOpportunity));

export default opportunitiesRouter;