const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AuthController = {
    store: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const hash = await bcrypt.hashSync(password, 10);
            const userExists = await User.findOne({ where: { email } });
            if (userExists || !hash) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const user = await User.create({ name, email, password: hash });
            return res.status(201).json(user);   // return user to frontend
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
  
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({
                    id: user.id,
                    email:user.email
                },
                process.env.JWT_KEY,
                { expiresIn: '1h' }
            );
            return res.status(200).json({ message: 'Logged in successfully', token });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = AuthController; 