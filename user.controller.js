const User = require('../libs/models/user.model');

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body; 
        const newUser = await User.create({ email, password });
        res.render('user', { message: 'User Created', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).render('user', { message: 'Error Creating User', user: null });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: 'nathan@mail.com' });
        if (user) {
            res.render('user', { message: 'User Retrieved', user });
        } else {
            res.render('user', { message: 'User Not Found', user: null });
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).render('user', { message: 'Error Retrieving User', user: null });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ email: 'nathan@mail.com' });
        if (user) {
            res.render('user', { message: 'User Deleted', user: null });
        } else {
            res.render('user', { message: 'User Not Found', user: null });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).render('user', { message: 'Error Deleting User', user: null });
    }
};

module.exports = {
    getUser,
    createUser,
    deleteUser,
};