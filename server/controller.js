let houses = require('./db.json');
let globalID = 4;


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },

    deleteHouse: (req, res) => {
        const { id } = req.params;

        const index = houses.findIndex(house => house.id === +id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },

    createHouse: (req, res) => {
        const { id, address, price, imageURL } = req.body;

        if (!id || !address || !price || !imageURL) {
            res.sendStatus(400);
        }

        const copy = {
            id: globalID,
            address: address,
            price: +price,
            imageURL: imageURL
        };

        houses.push(copy);
        globalID++;

        res.status(200).send(houses);
    },

    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;

        const idx = houses.findIndex(house => house.id === +id);

        if (type === 'plus') {
            houses[idx].price += 10000
            res.status(200).send(houses);
        } else {
            houses[idx].price -= 10000
            res.status(200).send(houses);
        }
    }
}