const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = 4000;

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Define the proxy route
app.post("/proxy", async (req, res) => {
  try {
    // Forward the request to the Zapier webhook
    const response = await fetch("https://hooks.zapier.com/hooks/catch/21196050/2k3qpst/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body), // Forward the request body
    });

    // Handle the response from Zapier
    const responseData = await response.json();

    // Send the response back to the client
    res.status(response.status).json(responseData);
  } catch (error) {
    console.error("Error forwarding request:", error);
    res.status(500).json({ error: "Failed to forward the request" });
  }
});

app.post("/america", async (req, res) => {
  try {
    // Forward the request to the Zapier webhook
    const response = await fetch("https://hooks.zapier.com/hooks/catch/21196050/2fxya2n/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body), // Forward the request body
    });

    // Handle the response from Zapier
    const responseData = await response.json();

    // Send the response back to the client
    res.status(response.status).json(responseData);
  } catch (error) {
    console.error("Error forwarding request:", error);
    res.status(500).json({ error: "Failed to forward the request" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
