
## Task 1: Number Fetching and Average Calculation
Overview
Task 1 involves fetching numbers from a third-party server and calculating the average of these numbers based on certain criteria such as prime, Fibonacci, even, and random numbers. This task emphasizes the implementation of an API client to fetch numbers and perform calculations based on those numbers.

Requirements
Node.js installed on your system
Basic understanding of JavaScript and Express.js framework
Installation
Clone the repository to your local machine:


git clone <repository_url>
Navigate to the project directory:


cd average-calculator
Install dependencies:


npm install
Usage
Start the server:


node server.js
Make GET requests to the following endpoints to fetch numbers and calculate their average:

/numbers/p for prime numbers
/numbers/f for Fibonacci numbers
/numbers/e for even numbers
/numbers/r for random numbers
Example:


curl http://localhost:9876/numbers/p
The server responds with a JSON object containing the fetched numbers and their average.
