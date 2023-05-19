const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

require('dotenv').config();

app.get('/', (req, res) => {
	res.send('<h1>Hello</h1>');
});

app.listen(port, () => {
	console.log(`server running http://localhost:${port}`);
});
