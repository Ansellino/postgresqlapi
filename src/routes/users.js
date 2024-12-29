const express = require('express');
const UserRepo = require('../repo/user-repo');

const router = express.Router();

router.get('/users', async (req, res) => {
    // Run a query to get all users
    const users = await UserRepo.find();

    // Send the result back to the person

    // Who made this request
    res.send(users);
});

router.get('/users/:id', async (req, res) => {
    const { id } = req.params;

    const user = await UserRepo.findById(id);

    if(user) {
        res.send(user);
    }else{
        res.sendStatus(404);
    }
});

router.post('/users', async (req, res) => {});

router.put('/users/:id', async(req, res) => {});

router.delete('/users/:id', async (req, res) => {});

module.exports = router;