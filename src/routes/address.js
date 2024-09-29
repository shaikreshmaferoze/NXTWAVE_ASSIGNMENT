const express = require('express');
const User = require('../models/users');
const Address = require('../models/address');

const router = express.Router();

router.post('/submit', async (req, res) => {
    try {
        const { name, address } = req.body;

        const user = await User.create({ name });
        await Address.create({ address, userId: user.id });

        res.status(201).json({ message: 'User and address added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;
