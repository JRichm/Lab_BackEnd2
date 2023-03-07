const express = require('express');
const cors = require('cors');

const app = express();

let port = 5050;

app.use(cors());
app.use(express.json());

const { getHouses, deleteHouse, createHouse, updateHouse } = require('./controller');

app.get('/api/houses', getHouses);
app.delete('/api/houses/:id', deleteHouse);
app.put('/api/houses/:id', updateHouse);
app.post('/api/houses', createHouse);

app.listen(port, () => console.log(`server is up on ${port}`))