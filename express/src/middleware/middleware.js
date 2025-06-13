const jwt = require('jsonwebtoken');

const jwtVerify = (req, res, next) => {
  // Middleware logic here
  console.log("Middleware executed");
  const token = req.headers['x-access-token']; // Extract token from Authorization header
    if(!token) {
      return res.status(401).json({ message: "No token provided" });
    }
  console.log(process.env.SECRETKEY, "secret key");
   try {
      const decoded = jwt.verify(token,  process.env.SECRETKEY);
      console.log(decoded, "decoded token");
      req.user = decoded; // add decoded data to request
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  // Call next() to pass control to the next middleware or route handler
  //  next();
}

module.exports ={ jwtVerify};