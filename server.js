const express = require('express');
const app = express();
const { fetchNumbers } = require('./utils/fetchNumbers');
const { calculateAverage } = require('./utils/calculateAverage');

app.get('/numbers/:type', async (req, res) => {
    const { type } = req.params;
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjIyNjI3LCJpYXQiOjE3MTcyMjIzMjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc2YmFiOTBhLTg5NzktNDc4ZS04M2FmLWU4ZWE0MTdiMGMyMiIsInN1YiI6IjIxaXQzMDM4QHJnaXB0LmFjLmluIn0sImNvbXBhbnlOYW1lIjoiUkdJUFQiLCJjbGllbnRJRCI6Ijc2YmFiOTBhLTg5NzktNDc4ZS04M2FmLWU4ZWE0MTdiMGMyMiIsImNsaWVudFNlY3JldCI6ImN1dFNQcHdvSFB2Q0lrbE0iLCJvd25lck5hbWUiOiJrcmlzaG5hIiwib3duZXJFbWFpbCI6IjIxaXQzMDM4QHJnaXB0LmFjLmluIiwicm9sbE5vIjoiMjFpdDMwMzgifQ.YB-401D3bkiiTfbt9hU6h4FHkQ0PXZIp4XkN_WP89fk';

    try {
        const numbers = await fetchNumbers(type, accessToken);
        const average = calculateAverage(numbers);
        res.json({ numbers, average });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
    }
});

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
