// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req, res, next) => {
    // Get the token from the header
    const token = req.header('Authorization');
    
    // Check if there is no token
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

        // Attach the user to the request object
        req.user = decoded.user;
        
        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // If the token is invalid, respond with an error
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
