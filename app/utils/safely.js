export const safely = (func) => {
    return async (req, res, next) => {
        try {
            await func(req, res, next);
        } catch (error) {
            console.error(error); // Log the error for debugging purposes
            res.status(500).json({ error: error?.message || 'Internal Server Error' });
        }
    };
};
