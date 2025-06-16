const jwt= require('jsonwebtoken');
const userModel = require('../Model/user.model');
const jwtVerify = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const secretKey = "heinhtetaun123"; // Use the same secret key as in user.controller.js
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; 
        // Log the decoded user info for debugging
        // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('JWT verification error:', error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = {
    jwtVerify
};
