const express = require('express');
const router = express.Router();
const {
    getUser,
    createUser,
    deleteUser,
} = require('../controllers/user.controller');

router.get('/', getUser);

router.post('/create', createUser); 

router.delete('/delete/:id', deleteUser); 

module.exports = router;