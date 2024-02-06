import { CLOSE_API } from "#app/config.js"
import qs from "querystring"


export class BaseService {
    constructor(entityName) {
        this.entityName = entityName;
    }

    async findAll(query= {}) {
        try {
            const result = [];
            query = {
                _limit: 100,
                ...query
            }
            while (true) {
                const response = await fetch(`${CLOSE_API.BASE_URL}/${this.entityName}?${qs.encode(query)}`, { headers: CLOSE_API.HEADERS });
                if (!response.ok) throw new Error(`Failed to fetch ${this.entityName}: ${response.statusText}`);
                const rawData = await response.json();
                const { data, has_more } = rawData;
                if (data) result.push(...data);
                if (!has_more) break;
            }
            return result;
        } catch (error) {
            this.handleError(`Error fetching all ${this.entityName}`, error);
        }
    }
    
    async findOne(id) {
        try {
            const response = await fetch(`${CLOSE_API.BASE_URL}/${this.entityName}/${id}`, { headers: CLOSE_API.HEADERS });
            if (!response.ok) throw new Error(`Failed to fetch ${this.entityName} with ID ${id}: ${response.statusText}`);
            const result = await response.json();
            return result;
        } catch (error) {
            this.handleError(`Error fetching ${this.entityName} with ID ${id}`, error);
        }
    }

    handleError(message, error) {
        console.error(error);
        // If error is an instance of Error, use its message; otherwise, use the statusText from a response object
        const errorMessage = error instanceof Error ? error.message : error.statusText;
        throw new Error(`${message}: ${errorMessage}`);
    }
}