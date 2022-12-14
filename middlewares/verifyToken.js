const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
 try{
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
    }catch(err){
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}

module.exports = verifyToken;