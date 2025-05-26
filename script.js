// Get the DOM elements where the quote and author will be displayed
const quoteElement = document.getElementById("quote-text");
const authorElement = document.getElementById("quote-author");

// Fetch a random quote from the API Ninjas Quotes API
fetch("https://api.api-ninjas.com/v1/quotes", { 
    method: "GET", 
    headers: { "X-Api-Key": apiKey } // Pass your API key in the headers
})
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Extract the quote and author from the response data
        const quote = data[0].quote;
        const author = data[0].author;
        // Update the DOM elements with the fetched quote and author
        quoteElement.textContent = quote;
        authorElement.textContent = `- ${author}`;
    })