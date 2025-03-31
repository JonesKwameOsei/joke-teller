// Load environment variables
require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Create an endpoint to securely provide the API key
app.get('/api/config', (req, res) => {
	res.json({
		voiceRSSKey: process.env.VOICERSS_API_KEY,
	});
});

// Serve main HTML file
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
