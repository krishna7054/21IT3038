const axios = require('axios');

const fetchNumbers = async (type, accessToken) => {
    const endpoints = {
        p: 'http://20.244.56.144/test/primes',
        f: 'http://20.244.56.144/test/fibo',
        e: 'http://20.244.56.144/test/even',
        r: 'http://20.244.56.144/test/rand'
    };

    try {
        const response = await axios.get(endpoints[type], { 
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            timeout: 500 
        });
        return response.data.numbers;
    } catch (error) {
        console.error('Error fetching numbers:', error.message);
        return [];
    }
};

module.exports = { fetchNumbers };
