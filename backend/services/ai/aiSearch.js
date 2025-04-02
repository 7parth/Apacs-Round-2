const express = require("express");
const fetch = require("node-fetch"); // or use the built-in fetch in recent Node versions
const app = express();

app.use(express.json());

const ASTRA_API_URL = "https://astra.datastax.com/api/v1/run/edd6775b-e723-4b50-84e0-005b7bcdb724?stream=false"; // Replace with your Astra API URL

app.post("/api/search", async (req, res) => {
  const { query } = req.body;
  try {
    // Call your Astra API with the query
    const apiResponse = await fetch(ASTRA_API_URL, {
      method: "POST",
      headers: {
        "Authorization": "Bearer <TOKEN>",
      "Content-Type": "application/json",
			"x-api-key": "AstraCS:yofiBNHKedfTXSYFlZCDLLis:17c15b7bbc0292c768501a8b8006c5c6d7482efe827dfe74956452d3e0d3999e"
      },
      body: JSON.stringify({ query })
    });
    
    const apiData = await apiResponse.json();
    
    // Assuming the response contains a field "answer" with the generated result
    res.json({ answer: apiData.answer });
  } catch (error) {
    console.error("Error calling Astra API:", error);
    res.status(500).json({ answer: "Error processing your request." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
