import { opportunityService } from "../services/opportunity.service.js"
import { pipelineService } from "../services/pipeline.service.js"

export const getOpportunities = async (req, res, next) => {
    const pipeline = await pipelineService.findOne(req.params.pipelineId);

    if (!pipeline.statuses) return res.status(500).json({message: "Invalid pipeline id" });

    const opportunities = await opportunityService.findAll({ status_id__in: pipeline.statuses.map(({ id }) => id).join(",") });
    
    return res.json(opportunities);
}

export const showOpportunity = async (req, res, next) => {
    const opportunity = await opportunityService.findOne(req.params.opportunityId);

    if (!opportunity) return res.status(404).json({message: "Opportunity not found" });

    return res.json(opportunity);
}