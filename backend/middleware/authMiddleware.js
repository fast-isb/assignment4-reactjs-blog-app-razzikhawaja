const jwt = require('jsonwebtoken');

// Middleware function to verify JWT token
module.exports = function (req, res, next) {
  // Get the token from the request header
  const token = req.header('x-auth-token'); // Assuming you send the token in the 'x-auth-token' header

  // Check if the token is missing
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key

    // Set the user ID from the decoded token to the request object
    req.user = decoded.user;
    next(); // Continue to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
