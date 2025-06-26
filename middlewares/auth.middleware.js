const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "No token" });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token no válido" });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = {verifyToken};