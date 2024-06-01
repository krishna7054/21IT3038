const { fetchNumbers } = require('../utils/fetchNumbers');
const { calculateAverage } = require('../utils/calculateAverage');

let windowSize = 10;
let storedNumbers = [];

const getNumbers = async (req, res) => {
    const numberId = req.params.numberId;
    if (!['p', 'f', 'e', 'r'].includes(numberId)) {
        return res.status(400).json({ error: 'Invalid number ID' });
    }

    try {
        console.log(`Fetching numbers for type: ${numberId}`);
        const newNumbers = await fetchNumbers(numberId);
        if (newNumbers.length === 0) {
            return res.status(500).json({ error: 'Failed to fetch numbers or request timed out' });
        }

        // Ensure stored numbers are unique and avoid duplicates
        const uniqueNewNumbers = [...new Set(newNumbers)];

        // Combine stored and new numbers, ensuring uniqueness
        storedNumbers = [...new Set([...storedNumbers, ...uniqueNewNumbers])];

        // If stored numbers exceed window size, keep the latest numbers
        if (storedNumbers.length > windowSize) {
            storedNumbers = storedNumbers.slice(storedNumbers.length - windowSize);
        }

        const average = calculateAverage(storedNumbers);

        res.json({
            windowPrevState: storedNumbers.slice(0, storedNumbers.length - uniqueNewNumbers.length),
            windowCurrState: storedNumbers,
            numbers: uniqueNewNumbers,
            avg: average
        });
    } catch (error) {
        console.error('Error in getNumbers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getNumbers };
