// server.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors()); // Add this line to enable CORS for all routes

app.use(express.json());

app.use('/api', async (req, res) => {
  const url = `https://api.countrystatecity.in${req.url}`;
  try {
    const response = await axios.get(url, { headers: req.headers });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
