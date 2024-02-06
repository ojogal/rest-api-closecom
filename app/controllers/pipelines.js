import { pipelineService } from "../services/pipeline.service.js"

export const getPipelines = async (req, res, next) => {
    const pipelines = await pipelineService.findAll();
    return res.json(pipelines);
}

export const showPipeline = async (req, res, next) => {
    const pipeline = await pipelineService.findOne(req.params.pipelineId);
    return res.json(pipeline);
}