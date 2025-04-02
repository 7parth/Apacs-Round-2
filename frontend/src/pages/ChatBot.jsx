import React, { useState } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
      });
      const data = await response.json();
      setResult(data.answer);
    } catch (error) {
      console.error("Error:", error);
      setResult("There was an error processing your request.");
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default SearchComponent;
