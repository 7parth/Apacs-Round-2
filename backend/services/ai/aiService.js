let inputValue = ""; // Insert input value here

fetch(
  "https://astra.datastax.com/api/v1/run/edd6775b-e723-4b50-84e0-005b7bcdb724?stream=false",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer <TOKEN>",
      "Content-Type": "application/json",
			"x-api-key": "AstraCS:yofiBNHKedfTXSYFlZCDLLis:17c15b7bbc0292c768501a8b8006c5c6d7482efe827dfe74956452d3e0d3999e"
    },
    body: JSON.stringify({
			input_value: inputValue, 
      output_type: "chat",
      input_type: "chat",
      tweaks: {
        "ChatInput-WvrEz": {},
        "AstraDB-pwZOw": {},
        "File-MbbWR": {},
        "SplitText-BZ6Up": {},
        "ParseData-n5XlI": {},
        "Prompt-YQ4kM": {},
        "GoogleGenerativeAIModel-eNCMX": {},
        "ChatOutput-qIHSV": {},
        "AstraDB-7yfng": {},
        "Memory-gavl3": {},
        "TextInput-4DKGl": {},
        "CombineText-TrSIp": {}
}
    }),
  },
)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));