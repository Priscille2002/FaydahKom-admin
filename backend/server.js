const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

app.use(helmet()); // Sécurise headers (NFR-021)
app.use(cors()); // Permet requêtes frontend
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
    res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));