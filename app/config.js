console.log(process.env.CLOSE_API_TOKEN);

export const CLOSE_API = {
        BASE_URL: "https://api.close.com/api/v1",
        HEADERS: {
            Authorization: `Basic ${btoa(process.env.CLOSE_API_TOKEN)}`,
            Accept: "application/json"
        }
    }

