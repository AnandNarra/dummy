const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'https://dummy-ruby-iota.vercel.app',
    credentials: true
}));
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Basic route to show data
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello from the backend!',
        data: [
            { id: 1, name: 'Item One' },
            { id: 2, name: 'Item Two' },
            { id: 3, name: 'Item Three' }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
