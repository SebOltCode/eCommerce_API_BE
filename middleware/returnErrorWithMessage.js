export const returnErrorWithMessage = (res, statusCode, message) => {
    res.statusCode = statusCode || 300;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ message: message || 'Internal Server Error' }));
};