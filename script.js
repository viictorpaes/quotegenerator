let apiQuotes = [];
// Get Quotes From API  
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[13]);
    } catch(error){
        // Catch erro here
    }
}

//On load
getQuotes();