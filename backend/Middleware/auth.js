import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(403).json({ message: false, error: 'No token provided' });
    }
  
    jwt.verify(token, 'ali@123321', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: false, error: 'Unauthorized' });
      }
  
      req.customerId = decoded.id; // Add the decoded customer ID to the request object
      next();
    });
  };